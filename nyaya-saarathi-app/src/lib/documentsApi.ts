import { apiFetch } from './apiClient';
import { ApiResult, DocumentResponse } from './api.types';

export const documentsApi = {
  uploadDocument: async (caseId: string, file: File): Promise<ApiResult<DocumentResponse>> => {
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      return {
        ok: true,
        data: {
          id: `demo-doc-${Date.now()}`,
          case_id: caseId,
          filename: file.name,
          content_type: file.type || 'application/octet-stream',
          upload_status: 'UPLOADED',
          updated_at: new Date().toISOString(),
        },
      };
    }

    const formData = new FormData();
    formData.append('file', file);

    return apiFetch<DocumentResponse>(`/cases/${caseId}/documents`, {
      method: 'POST',
      body: formData,
    });
  },

  getDocuments: async (caseId: string): Promise<ApiResult<DocumentResponse[]>> => {
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      return {
        ok: true,
        data: [],
      };
    }
    return apiFetch<DocumentResponse[]>(`/cases/${caseId}/documents`);
  },
};
