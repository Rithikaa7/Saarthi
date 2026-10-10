import { apiFetch } from './apiClient';
import { ApiResult, PathwayResponse, RequirementResponse } from './api.types';

export const pathwayApi = {
  generatePathway: async (caseId: string): Promise<ApiResult<PathwayResponse>> => {
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      return {
        ok: true,
        data: {
          id: 'demo-pathway',
          case_id: caseId,
          title: 'Non-payment of Wages (Demo)',
          description: 'This is a mocked pathway description in demo mode.',
          updated_at: new Date().toISOString(),
        },
      };
    }
    return apiFetch<PathwayResponse>(`/cases/${caseId}/pathway`, {
      method: 'POST',
    });
  },

  getPathway: async (caseId: string): Promise<ApiResult<PathwayResponse>> => {
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      return {
        ok: true,
        data: {
          id: 'demo-pathway',
          case_id: caseId,
          title: 'Non-payment of Wages (Demo)',
          description: 'This is a mocked pathway description in demo mode.',
          updated_at: new Date().toISOString(),
        },
      };
    }
    return apiFetch<PathwayResponse>(`/cases/${caseId}/pathway`);
  },

  getRequirements: async (caseId: string): Promise<ApiResult<RequirementResponse[]>> => {
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      return {
        ok: true,
        data: [
          {
            id: 'demo-req-1',
            case_id: caseId,
            title: 'Employment Proof (Demo)',
            description: 'Offer letter, ID card, or contract.',
            type: 'Employment',
            status: 'MISSING',
            updated_at: new Date().toISOString(),
          }
        ],
      };
    }
    return apiFetch<RequirementResponse[]>(`/cases/${caseId}/requirements`);
  },
};
