import uuid
from sqlalchemy import Column, String, Boolean, DateTime, ForeignKey, Integer
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .database import Base

def generate_uuid():
    return str(uuid.uuid4())

class Case(Base):
    __tablename__ = "cases"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    lang = Column(String, nullable=False)
    consent_no_legal_advice = Column(Boolean, nullable=False)
    consent_ai_processing = Column(Boolean, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    story = relationship("Story", back_populates="case", uselist=False, cascade="all, delete-orphan")
    pathway = relationship("Pathway", back_populates="case", uselist=False, cascade="all, delete-orphan")
    requirements = relationship("Requirement", back_populates="case", cascade="all, delete-orphan")
    documents = relationship("Document", back_populates="case", cascade="all, delete-orphan")
    facts = relationship("Fact", back_populates="case", cascade="all, delete-orphan")
    conflicts = relationship("Conflict", back_populates="case", cascade="all, delete-orphan")
    questions = relationship("Question", back_populates="case", cascade="all, delete-orphan")
    matters = relationship("Matter", back_populates="case", cascade="all, delete-orphan")
    events = relationship("EventLog", back_populates="case", cascade="all, delete-orphan")
    attention_dates = relationship("AttentionDate", back_populates="case", cascade="all, delete-orphan")

class Matter(Base):
    __tablename__ = "matters"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), nullable=False)
    description = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    case = relationship("Case", back_populates="matters")
    facts = relationship("Fact", back_populates="matter")

class EventLog(Base):
    __tablename__ = "events"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), nullable=False)
    event_type = Column(String, nullable=False)
    description = Column(String, nullable=False)
    actor = Column(String, nullable=False, default="USER") # USER, SYSTEM, HELPER
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    case = relationship("Case", back_populates="events")

class AttentionDate(Base):
    __tablename__ = "attention_dates"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), nullable=False)
    document_id = Column(String, ForeignKey("documents.id", ondelete="CASCADE"), nullable=True)
    date_value = Column(String, nullable=False)
    excerpt = Column(String, nullable=False)
    page = Column(Integer, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    case = relationship("Case", back_populates="attention_dates")
    document = relationship("Document")

class Story(Base):
    __tablename__ = "stories"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), unique=True, nullable=False)
    story_text = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    case = relationship("Case", back_populates="story")

class Pathway(Base):
    __tablename__ = "pathways"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), unique=True, nullable=False)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    case = relationship("Case", back_populates="pathway")

class Requirement(Base):
    __tablename__ = "requirements"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    type = Column(String, nullable=False)
    status = Column(String, nullable=False, default="MISSING")
    
    layer = Column(String, nullable=True) # A or B
    source_url = Column(String, nullable=True)
    retrieved_at = Column(DateTime(timezone=True), nullable=True)
    content_hash = Column(String, nullable=True)
    verified_by = Column(String, nullable=True)
    jurisdiction = Column(String, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    case = relationship("Case", back_populates="requirements")

class Document(Base):
    __tablename__ = "documents"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), nullable=False)
    filename = Column(String, nullable=False)
    content_type = Column(String, nullable=False)
    file_path = Column(String, nullable=False)
    upload_status = Column(String, nullable=False, default="UPLOADED")
    
    coverage_period = Column(String, nullable=True)
    coverage_pages = Column(String, nullable=True)
    coverage_holder = Column(String, nullable=True)
    coverage_institution = Column(String, nullable=True)
    quality_flags = Column(String, nullable=True)
    authenticity_note = Column(String, nullable=False, default="provided by user; authenticity not verified")

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    case = relationship("Case", back_populates="documents")

class Fact(Base):
    __tablename__ = "facts"
    
    id = Column(String, primary_key=True, default=generate_uuid)
    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), nullable=False)
    document_id = Column(String, ForeignKey("documents.id", ondelete="CASCADE"), nullable=True)
    matter_id = Column(String, ForeignKey("matters.id", ondelete="CASCADE"), nullable=True)
    
    fact_type = Column(String, nullable=False)
    value = Column(String, nullable=False)
    source_type = Column(String, nullable=False)
    source_excerpt = Column(String, nullable=True) # exact quote from the document or story
    is_grounded = Column(Boolean, default=False) # whether the excerpt was verified in the raw text
    
    confidence = Column(String, nullable=True)
    supersedes_id = Column(String, nullable=True)
    translated = Column(Boolean, default=False)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    case = relationship("Case", back_populates="facts")
    document = relationship("Document")
    matter = relationship("Matter", back_populates="facts")

class Conflict(Base):
    __tablename__ = "conflicts"

    id = Column(String, primary_key=True, default=generate_uuid)
    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), nullable=False)
    fact_type = Column(String, nullable=False)
    description = Column(String, nullable=False)
    resolved = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    case = relationship("Case", back_populates="conflicts")

class Question(Base):
    __tablename__ = "questions"

    id = Column(String, primary_key=True, default=generate_uuid)
    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), nullable=False)
    title = Column(String, nullable=False)
    reason = Column(String, nullable=False)
    options = Column(String, nullable=False) # JSON encoded list
    answered = Column(Boolean, default=False)
    answer = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    case = relationship("Case", back_populates="questions")
