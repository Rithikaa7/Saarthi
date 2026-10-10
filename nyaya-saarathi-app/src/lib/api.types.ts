/**
 * Typed contracts for the Nyaya Saarathi Case and Intake APIs.
 * These match the FastAPI backend schemas (Phase 1 & 2 backend).
 */

// ─── Case ──────────────────────────────────────────────────────────────────

export interface CreateCaseRequest {
  lang: 'EN' | 'TA';
  consent_no_legal_advice: boolean;
  consent_ai_processing: boolean;
}

export interface CaseResponse {
  id: string; // UUID
  lang: 'EN' | 'TA';
  consent_no_legal_advice: boolean;
  consent_ai_processing: boolean;
  created_at: string; // ISO-8601
  updated_at: string;
}

// ─── Intake / Story ────────────────────────────────────────────────────────

export interface SaveStoryRequest {
  story_text: string;
}

export interface StoryResponse {
  case_id: string;
  story_text: string;
  updated_at: string;
}

export interface PathwayResponse {
  id: string;
  case_id: string;
  title: string;
  description: string;
  updated_at: string;
}

export interface RequirementResponse {
  id: string;
  case_id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  updated_at: string;
}

export interface DocumentResponse {
  id: string;
  case_id: string;
  filename: string;
  content_type: string;
  upload_status: string;
  updated_at: string;
}
// ─── Evidence Map ────────────────────────────────────────────────────────────

export interface FactResponse {
  id: string;
  case_id: string;
  document_id: string | null;
  fact_type: string;
  value: string;
  source_type: string;
}

export interface ConflictResponse {
  id: string;
  case_id: string;
  fact_type: string;
  description: string;
  resolved: boolean;
}

export interface QuestionResponse {
  id: string;
  case_id: string;
  title: string;
  reason: string;
  options: string[];
  answered: boolean;
  answer: string | null;
}

export interface EvidenceMapResponse {
  facts: FactResponse[];
  conflicts: ConflictResponse[];
  questions: QuestionResponse[];
}

export interface AnswerQuestionRequest {
  answer: string;
}

// ─── Error envelope returned by the backend ────────────────────────────────

export interface ApiErrorBody {
  detail: string | { msg: string; type: string }[];
}

// ─── Discriminated result union used throughout src/lib ────────────────────

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; status: number; message: string };
