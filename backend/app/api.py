from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from typing import List
import os
import shutil
import json
from sqlalchemy.orm import Session
from . import schemas, models
from .database import get_db
from .llm import generate_pathway_from_story, extract_evidence_from_case, generate_case_summary
import PyPDF2
import re

def normalize_amount(val: str) -> str:
    # simple mock for S2 Amount parsing
    digits = re.sub(r'[^\d]', '', val)
    return f"₹{digits}" if digits else val

def is_name_variant(val1: str, val2: str) -> bool:
    # S1 name variant mock: ignore spacing, case, and initials
    v1 = re.sub(r'[^a-zA-Z]', '', val1).lower()
    v2 = re.sub(r'[^a-zA-Z]', '', val2).lower()
    # If one is substring of other (e.g. R. Kumar vs Rajan Kumar)
    if len(v1) > 2 and len(v2) > 2:
        return v1 in v2 or v2 in v1
    return False

router = APIRouter()

@router.post("/cases", response_model=schemas.CaseResponse, status_code=status.HTTP_201_CREATED)
def create_case(req: schemas.CreateCaseRequest, db: Session = Depends(get_db)):
    if not req.consent_no_legal_advice or not req.consent_ai_processing:
        raise HTTPException(status_code=400, detail="Consent is required")
        
    db_case = models.Case(
        lang=req.lang,
        consent_no_legal_advice=req.consent_no_legal_advice,
        consent_ai_processing=req.consent_ai_processing
    )
    db.add(db_case)
    db.commit()
    db.refresh(db_case)
    return db_case

@router.get("/cases/{case_id}", response_model=schemas.CaseResponse)
def get_case(case_id: str, db: Session = Depends(get_db)):
    db_case = db.query(models.Case).filter(models.Case.id == case_id).first()
    if not db_case:
        raise HTTPException(status_code=404, detail="Case not found")
    return db_case

@router.post("/cases/{case_id}/story", response_model=schemas.StoryResponse)
def save_story(case_id: str, req: schemas.SaveStoryRequest, db: Session = Depends(get_db)):
    db_case = db.query(models.Case).filter(models.Case.id == case_id).first()
    if not db_case:
        raise HTTPException(status_code=404, detail="Case not found")
        
    db_story = db.query(models.Story).filter(models.Story.case_id == case_id).first()
    if db_story:
        db_story.story_text = req.story_text
    else:
        db_story = models.Story(case_id=case_id, story_text=req.story_text)
        db.add(db_story)
        
    db.commit()
    db.refresh(db_story)
    return db_story

@router.get("/cases/{case_id}/story", response_model=schemas.StoryResponse)
def get_story(case_id: str, db: Session = Depends(get_db)):
    db_case = db.query(models.Case).filter(models.Case.id == case_id).first()
    if not db_case:
        raise HTTPException(status_code=404, detail="Case not found")
    
    db_story = db.query(models.Story).filter(models.Story.case_id == case_id).first()
    if not db_story:
        return schemas.StoryResponse(case_id=case_id, story_text="", updated_at=db_case.created_at)
    return db_story

@router.post("/cases/{case_id}/pathway", response_model=schemas.PathwayResponse)
def generate_pathway(case_id: str, db: Session = Depends(get_db)):
    db_case = db.query(models.Case).filter(models.Case.id == case_id).first()
    if not db_case:
        raise HTTPException(status_code=404, detail="Case not found")
        
    db_pathway = db.query(models.Pathway).filter(models.Pathway.case_id == case_id).first()
    if not db_pathway:
        db_story = db.query(models.Story).filter(models.Story.case_id == case_id).first()
        story_text = db_story.story_text if db_story else ""
        
        llm_pathway = generate_pathway_from_story(story_text)
        if llm_pathway:
            db_pathway = models.Pathway(
                case_id=case_id, 
                title=llm_pathway.title,
                description=llm_pathway.description
            )
            db.add(db_pathway)
            
            reqs = [
                models.Requirement(case_id=case_id, title=r.title, description=r.description, type=r.type)
                for r in llm_pathway.requirements
            ]
            db.add_all(reqs)
            db.commit()
            db.refresh(db_pathway)
        else:
            # Mock LLM generation
            db_pathway = models.Pathway(
                case_id=case_id, 
                title="Non-payment of Wages",
                description="Based on your story, this falls under non-payment of salary under the Payment of Wages Act."
            )
            db.add(db_pathway)
            
            # Mock Requirements
            reqs = [
                models.Requirement(case_id=case_id, title="Employment Proof", description="Offer letter, ID card, or contract.", type="Employment"),
                models.Requirement(case_id=case_id, title="Unpaid Salary Proof", description="Bank statements showing missing salary.", type="Violation")
            ]
            db.add_all(reqs)
            db.commit()
            db.refresh(db_pathway)
        
    return db_pathway

@router.get("/cases/{case_id}/pathway", response_model=schemas.PathwayResponse)
def get_pathway(case_id: str, db: Session = Depends(get_db)):
    db_pathway = db.query(models.Pathway).filter(models.Pathway.case_id == case_id).first()
    if not db_pathway:
        raise HTTPException(status_code=404, detail="Pathway not found")
    return db_pathway

@router.get("/cases/{case_id}/requirements", response_model=List[schemas.RequirementResponse])
def get_requirements(case_id: str, db: Session = Depends(get_db)):
    reqs = db.query(models.Requirement).filter(models.Requirement.case_id == case_id).all()
    return reqs

@router.post("/cases/{case_id}/documents", response_model=schemas.DocumentResponse)
def upload_document(case_id: str, file: UploadFile = File(...), db: Session = Depends(get_db)):
    db_case = db.query(models.Case).filter(models.Case.id == case_id).first()
    if not db_case:
        raise HTTPException(status_code=404, detail="Case not found")
        
    # In a real app, save to S3 or a secure directory. For now, local uploads dir.
    upload_dir = "uploads"
    os.makedirs(upload_dir, exist_ok=True)
    file_path = os.path.join(upload_dir, f"{case_id}_{file.filename}")
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
    db_doc = models.Document(
        case_id=case_id,
        filename=file.filename,
        content_type=file.content_type or "application/octet-stream",
        file_path=file_path
    )
    db.add(db_doc)
    db.commit()
    db.refresh(db_doc)
    return db_doc

@router.get("/cases/{case_id}/documents", response_model=List[schemas.DocumentResponse])
def get_documents(case_id: str, db: Session = Depends(get_db)):
    docs = db.query(models.Document).filter(models.Document.case_id == case_id).all()
    return docs

@router.post("/cases/{case_id}/extract")
def extract_evidence(case_id: str, db: Session = Depends(get_db)):
    db_case = db.query(models.Case).filter(models.Case.id == case_id).first()
    if not db_case:
        raise HTTPException(status_code=404, detail="Case not found")
        
    db.query(models.Fact).filter(models.Fact.case_id == case_id).delete()
    db.query(models.Conflict).filter(models.Conflict.case_id == case_id).delete()
    db.query(models.Question).filter(models.Question.case_id == case_id).delete()
    
    db_story = db.query(models.Story).filter(models.Story.case_id == case_id).first()
    story_text = db_story.story_text if db_story else ""
    
    docs = db.query(models.Document).filter(models.Document.case_id == case_id).all()
    doc_texts = []
    for doc in docs:
        if doc.file_path.endswith('.pdf'):
            try:
                with open(doc.file_path, 'rb') as f:
                    reader = PyPDF2.PdfReader(f)
                    text = ""
                    for page in reader.pages:
                        text += page.extract_text() + "\n"
                    doc_texts.append(text)
            except Exception as e:
                print(f"Error reading PDF {doc.file_path}: {e}")
                
    extraction = extract_evidence_from_case(story_text, doc_texts)
    if extraction:
        facts = []
        for f in extraction.facts:
            # Grounding check in plain code: excerpt must appear in page text
            is_grounded = False
            if f.source_excerpt:
                excerpt_clean = f.source_excerpt.strip().lower()
                if excerpt_clean in story_text.lower():
                    is_grounded = True
                else:
                    for d_text in doc_texts:
                        if excerpt_clean in d_text.lower():
                            is_grounded = True
                            break
                            
            # S2: Date/Amount Normalisation
            if 'amount' in f.fact_type:
                f.value = normalize_amount(f.value)
                
            facts.append(
                models.Fact(
                    case_id=case_id, 
                    fact_type=f.fact_type, 
                    value=f.value, 
                    source_type=f.source_type,
                    source_excerpt=f.source_excerpt,
                    is_grounded=is_grounded
                )
            )
            
        # S1: Name transliteration check
        # Check if any user name and document name differ but are variants
        for c in extraction.conflicts:
            if 'name' in c.fact_type:
                # Mock: we'd parse the two values and check is_name_variant
                # if so, we downgrade from conflict to mere variant alert.
                pass
                
        db.add_all(facts)
        
        conflicts = [
            models.Conflict(case_id=case_id, fact_type=c.fact_type, description=c.description)
            for c in extraction.conflicts
        ]
        db.add_all(conflicts)
        
        questions = [
            models.Question(
                case_id=case_id,
                title=q.title,
                reason=q.reason,
                options=json.dumps(q.options)
            )
            for q in extraction.questions
        ]
        db.add_all(questions)
    else:
        # Fallback to mock
        facts = [
            models.Fact(case_id=case_id, fact_type="Start Date", value="January 2026", source_type="user", source_excerpt="I started in January 2026", is_grounded=True),
            models.Fact(case_id=case_id, fact_type="Start Date", value="1 Feb 2026", source_type="document", source_excerpt="Date of joining: 1 Feb 2026", is_grounded=True),
        ]
        db.add_all(facts)
        
        conflict = models.Conflict(
            case_id=case_id, 
            fact_type="Start Date", 
            description="User story says January, but employment letter says 1 February 2026."
        )
        db.add(conflict)
        
        options = json.dumps(["January 2026", "1 Feb 2026", "Other"])
        question = models.Question(
            case_id=case_id,
            title="When did your work start?",
            reason="We found two different dates for this requirement.",
            options=options
        )
        db.add(question)
        
    db.commit()
    return {"status": "extracted"}

@router.get("/cases/{case_id}/evidence-map", response_model=schemas.EvidenceMapResponse)
def get_evidence_map(case_id: str, db: Session = Depends(get_db)):
    db_case = db.query(models.Case).filter(models.Case.id == case_id).first()
    if not db_case:
        raise HTTPException(status_code=404, detail="Case not found")
        
    facts = db.query(models.Fact).filter(models.Fact.case_id == case_id).all()
    conflicts = db.query(models.Conflict).filter(models.Conflict.case_id == case_id).all()
    questions = db.query(models.Question).filter(models.Question.case_id == case_id).all()
    
    q_responses = []
    for q in questions:
        q_responses.append(schemas.QuestionResponse(
            id=q.id,
            case_id=q.case_id,
            title=q.title,
            reason=q.reason,
            options=json.loads(q.options),
            answered=q.answered,
            answer=q.answer
        ))
        
    return schemas.EvidenceMapResponse(
        facts=facts,
        conflicts=conflicts,
        questions=q_responses
    )

@router.post("/cases/{case_id}/questions/{question_id}/answer", response_model=schemas.QuestionResponse)
def answer_question(case_id: str, question_id: str, req: schemas.AnswerQuestionRequest, db: Session = Depends(get_db)):
    q = db.query(models.Question).filter(models.Question.id == question_id, models.Question.case_id == case_id).first()
    if not q:
        raise HTTPException(status_code=404, detail="Question not found")
        
    q.answer = req.answer
    q.answered = True
    
    conflict = db.query(models.Conflict).filter(models.Conflict.case_id == case_id).first()
    if conflict:
        conflict.resolved = True
        
    # A3. Provenance and immutable history
    event = models.EventLog(
        case_id=case_id,
        event_type="CONFLICT_RESOLVED",
        description=f"User answered question '{q.title}' with '{req.answer}'"
    )
    db.add(event)
    
    # A4. Conflicts flagged but not resolved (append answer as new fact)
    if conflict:
        new_fact = models.Fact(
            case_id=case_id,
            fact_type=conflict.fact_type,
            value=req.answer,
            source_type="user_clarification",
            is_grounded=True
        )
        db.add(new_fact)

    db.commit()
    db.refresh(q)
    
    return schemas.QuestionResponse(
        id=q.id,
        case_id=q.case_id,
        title=q.title,
        reason=q.reason,
        options=json.loads(q.options),
        answered=q.answered,
        answer=q.answer
    )

@router.get("/cases/{case_id}/export", response_model=schemas.ExportResponse)
def export_case(case_id: str, db: Session = Depends(get_db)):
    db_case = db.query(models.Case).filter(models.Case.id == case_id).first()
    if not db_case:
        raise HTTPException(status_code=404, detail="Case not found")
        
    db_story = db.query(models.Story).filter(models.Story.case_id == case_id).first()
    story_text = db_story.story_text if db_story else ""
    
    db_pathway = db.query(models.Pathway).filter(models.Pathway.case_id == case_id).first()
    pathway_title = db_pathway.title if db_pathway else "Unknown Pathway"
    
    facts = db.query(models.Fact).filter(models.Fact.case_id == case_id).all()
    conflicts = db.query(models.Conflict).filter(models.Conflict.case_id == case_id).all()
    docs = db.query(models.Document).filter(models.Document.case_id == case_id).all()
    
    fact_dicts = [{"type": f.fact_type, "value": f.value} for f in facts]
    llm_summary = generate_case_summary(story_text, fact_dicts)
    
    if llm_summary:
        summary_text = llm_summary.summary
        strength = llm_summary.strength
    else:
        summary_text = "Based on the provided facts and story, this case presents a standard non-payment of wages claim. " \
                       "Key documents match user timeline."
        strength = "Moderate"
        
    resolved_conflicts = sum(1 for c in conflicts if c.resolved)
    
    return schemas.ExportResponse(
        case_id=case_id,
        pathway_title=pathway_title,
        story=story_text,
        summary=summary_text,
        strength=strength,
        facts=facts,
        resolved_conflicts=resolved_conflicts,
        total_documents=len(docs)
    )
