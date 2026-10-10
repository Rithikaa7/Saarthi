from pydantic import BaseModel, ConfigDict
from typing import Literal, List, Optional, Any
from datetime import datetime

class CreateCaseRequest(BaseModel):
    lang: Literal["EN", "TA"]
    consent_no_legal_advice: bool
    consent_ai_processing: bool

class CaseResponse(BaseModel):
    id: str
    lang: Literal["EN", "TA"]
    consent_no_legal_advice: bool
    consent_ai_processing: bool
    created_at: datetime
    updated_at: datetime
    
    model_config = ConfigDict(from_attributes=True)

class SaveStoryRequest(BaseModel):
    story_text: str

class StoryResponse(BaseModel):
    case_id: str
    story_text: str
    updated_at: datetime
    
    model_config = ConfigDict(from_attributes=True)

class PathwayResponse(BaseModel):
    id: str
    case_id: str
    title: str
    description: str
    updated_at: datetime
    
    model_config = ConfigDict(from_attributes=True)

class RequirementResponse(BaseModel):
    id: str
    case_id: str
    title: str
    description: str
    type: str
    status: str
    layer: Optional[str] = None
    source_url: Optional[str] = None
    verified_by: Optional[str] = None
    jurisdiction: Optional[str] = None
    updated_at: datetime
    
    model_config = ConfigDict(from_attributes=True)

class DocumentResponse(BaseModel):
    id: str
    case_id: str
    filename: str
    content_type: str
    upload_status: str
    coverage_period: Optional[str] = None
    coverage_pages: Optional[str] = None
    coverage_holder: Optional[str] = None
    coverage_institution: Optional[str] = None
    quality_flags: Optional[str] = None
    authenticity_note: str
    updated_at: datetime
    
    model_config = ConfigDict(from_attributes=True)

class FactResponse(BaseModel):
    id: str
    case_id: str
    document_id: Optional[str] = None
    matter_id: Optional[str] = None
    fact_type: str
    value: str
    source_type: str
    source_excerpt: Optional[str] = None
    is_grounded: bool = False
    confidence: Optional[str] = None
    supersedes_id: Optional[str] = None
    translated: bool = False
    
    model_config = ConfigDict(from_attributes=True)

class ConflictResponse(BaseModel):
    id: str
    case_id: str
    fact_type: str
    description: str
    resolved: bool
    
    model_config = ConfigDict(from_attributes=True)

class QuestionResponse(BaseModel):
    id: str
    case_id: str
    title: str
    reason: str
    options: List[str]
    answered: bool
    answer: Optional[str] = None
    
    model_config = ConfigDict(from_attributes=True)

class EvidenceMapResponse(BaseModel):
    facts: List[FactResponse]
    conflicts: List[ConflictResponse]
    questions: List[QuestionResponse]

class AnswerQuestionRequest(BaseModel):
    answer: str

class ExportResponse(BaseModel):
    case_id: str
    pathway_title: str
    story: str
    summary: str
    strength: str
    facts: List[FactResponse]
    resolved_conflicts: int
    total_documents: int
