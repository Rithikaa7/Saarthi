import os
import json
from google import genai
from google.genai import types
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv

load_dotenv()

# We only initialize if there is an API key available to not crash if the user hasn't set one yet
_client = None
def get_client():
    global _client
    if not _client:
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key or api_key == "your_api_key_here":
            return None
        _client = genai.Client(api_key=api_key)
    return _client

class LLMRequirement(BaseModel):
    title: str
    description: str
    type: str

class LLMPathway(BaseModel):
    title: str
    description: str
    requirements: List[LLMRequirement]

class LLMFact(BaseModel):
    fact_type: str
    value: str
    source_type: str # "user" or "document"
    source_excerpt: Optional[str] = None # exact quote from the document or story where this fact is stated

class LLMConflict(BaseModel):
    fact_type: str
    description: str

class LLMQuestion(BaseModel):
    title: str
    reason: str
    options: List[str]

class LLMEvidenceExtraction(BaseModel):
    facts: List[LLMFact]
    conflicts: List[LLMConflict]
    questions: List[LLMQuestion]

class LLMCaseSummary(BaseModel):
    summary: str
    strength: str # e.g. "Strong", "Weak"

def generate_pathway_from_story(story_text: str) -> Optional[LLMPathway]:
    client = get_client()
    if not client:
        return None
        
    prompt = f"""
    Analyze the following user story and determine the best legal pathway in India.
    Provide the pathway title, a description, and a list of required documents/facts (requirements).
    
    User Story:
    {story_text}
    """
    
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=LLMPathway,
            ),
        )
        return LLMPathway.model_validate_json(response.text)
    except Exception as e:
        print(f"LLM Error generating pathway: {e}")
        return None

def extract_evidence_from_case(story_text: str, document_texts: List[str]) -> Optional[LLMEvidenceExtraction]:
    client = get_client()
    if not client:
        return None
        
    doc_context = "\n".join([f"Document {i+1}: {text}" for i, text in enumerate(document_texts)])
    
    prompt = f"""
    Analyze the user story and the provided documents to extract concrete facts.
    Identify any conflicts between the user story and the documents.
    Generate clarifying questions for any identified conflicts.
    
    CRITICAL GROUNDING INSTRUCTION:
    For EVERY fact you extract, you MUST provide a `source_excerpt`. This must be an EXACT QUOTE verbatim from either the User Story or the Documents that proves the fact.
    Do not hallucinate facts.
    
    FACT TYPES INSTRUCTION:
    You must extract specific facts where applicable. Use exactly these `fact_type` labels:
    - `event_date`, `period_covered`, `payment_date`
    - `amount_claimed`, `amount_paid`
    - `party_name`, `opposite_party_name`, `opposite_party_address`, `opposite_party_phone`
    
    User Story:
    {story_text}
    
    Documents:
    {doc_context}
    """
    
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=LLMEvidenceExtraction,
            ),
        )
        return LLMEvidenceExtraction.model_validate_json(response.text)
    except Exception as e:
        print(f"LLM Error extracting evidence: {e}")
        return None

def generate_case_summary(story_text: str, facts: List[dict]) -> Optional[LLMCaseSummary]:
    client = get_client()
    if not client:
        return None
        
    facts_str = "\n".join([f"- {f['type']}: {f['value']}" for f in facts])
    
    prompt = f"""
    Based on the initial user story and the following verified facts extracted from documents, 
    write a formal and concise legal summary of the case ready for a paralegal to review.
    Also, assess the overall strength of the case.
    
    User Story:
    {story_text}
    
    Verified Facts:
    {facts_str}
    """
    
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=LLMCaseSummary,
            ),
        )
        return LLMCaseSummary.model_validate_json(response.text)
    except Exception as e:
        print(f"LLM Error generating summary: {e}")
        return None
