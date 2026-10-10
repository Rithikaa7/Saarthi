import { apiFetch } from './apiClient';
import { ApiResult, EvidenceMapResponse, QuestionResponse, AnswerQuestionRequest } from './api.types';

export const evidenceApi = {
  extractEvidence: async (caseId: string): Promise<ApiResult<{ status: string }>> => {
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      return { ok: true, data: { status: 'extracted' } };
    }
    return apiFetch<{ status: string }>(`/cases/${caseId}/extract`, {
      method: 'POST',
    });
  },

  getEvidenceMap: async (caseId: string): Promise<ApiResult<EvidenceMapResponse>> => {
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      return {
        ok: true,
        data: {
          facts: [],
          conflicts: [
            {
              id: 'demo-conflict-1',
              case_id: caseId,
              fact_type: 'Start Date',
              description: 'Your story says January, but the employment letter says 1 February 2026.',
              resolved: false,
            }
          ],
          questions: [
            {
              id: 'demo-q-1',
              case_id: caseId,
              title: 'When did your work start?',
              reason: 'We found two different dates for this requirement.',
              options: ['January 2026', '1 Feb 2026', 'Other'],
              answered: false,
              answer: null,
            }
          ]
        },
      };
    }
    return apiFetch<EvidenceMapResponse>(`/cases/${caseId}/evidence-map`);
  },

  answerQuestion: async (
    caseId: string, 
    questionId: string, 
    payload: AnswerQuestionRequest
  ): Promise<ApiResult<QuestionResponse>> => {
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      return {
        ok: true,
        data: {
          id: questionId,
          case_id: caseId,
          title: 'When did your work start? (Demo)',
          reason: 'We found two different dates for this requirement.',
          options: ['January 2026', '1 Feb 2026', 'Other'],
          answered: true,
          answer: payload.answer,
        },
      };
    }
    return apiFetch<QuestionResponse>(`/cases/${caseId}/questions/${questionId}/answer`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
  },
};
