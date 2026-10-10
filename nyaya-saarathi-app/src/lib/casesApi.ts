/**
 * cases API module — wraps POST /cases and GET /cases/:id.
 *
 * DEMO_MODE (NEXT_PUBLIC_DEMO_MODE=true):
 *   Returns deterministic mock data immediately.
 *   No network call is made. Mode banner is visible in UI.
 *
 * LIVE mode:
 *   Makes real HTTP calls. On failure, returns ApiResult { ok: false }.
 *   Callers must handle the error; no silent fallback to fake data.
 */

import { apiFetch } from './apiClient';
import type { ApiResult, CaseResponse, CreateCaseRequest } from './api.types';

const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

// Stable mock so the UI can navigate without a backend.
const MOCK_CASE: CaseResponse = {
  id: 'demo-case-00000000-0000-0000-0000-000000000001',
  lang: 'EN',
  consent_no_legal_advice: true,
  consent_ai_processing: true,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

export const casesApi = {
  /** Create a new case after the user gives consent. */
  create: async (req: CreateCaseRequest): Promise<ApiResult<CaseResponse>> => {
    if (DEMO_MODE) {
      return { ok: true, data: { ...MOCK_CASE, lang: req.lang } };
    }
    return apiFetch<CaseResponse>('/cases', {
      method: 'POST',
      body: JSON.stringify(req),
    });
  },

  /** Retrieve an existing case by UUID (used on page reload / resume). */
  get: async (caseId: string): Promise<ApiResult<CaseResponse>> => {
    if (DEMO_MODE) {
      return { ok: true, data: { ...MOCK_CASE, id: caseId } };
    }
    return apiFetch<CaseResponse>(`/cases/${caseId}`);
  },
};
