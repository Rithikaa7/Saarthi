/**
 * intake API module — wraps POST /cases/:id/story and GET /cases/:id/story.
 *
 * Same DEMO_MODE contract as casesApi:
 *   - true  → mock response, no network call.
 *   - false → real call; failure surfaces as ApiResult { ok: false }.
 */

import { apiFetch } from './apiClient';
import type { ApiResult, SaveStoryRequest, StoryResponse } from './api.types';

const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

const mockStory = (caseId: string, text: string): StoryResponse => ({
  case_id: caseId,
  story_text: text,
  updated_at: new Date().toISOString(),
});

export const intakeApi = {
  /** Save / overwrite the user's story text. */
  saveStory: async (
    caseId: string,
    req: SaveStoryRequest,
  ): Promise<ApiResult<StoryResponse>> => {
    if (DEMO_MODE) {
      return { ok: true, data: mockStory(caseId, req.story_text) };
    }
    return apiFetch<StoryResponse>(`/cases/${caseId}/story`, {
      method: 'POST',
      body: JSON.stringify(req),
    });
  },

  /** Load a previously saved story (used when resuming a session). */
  getStory: async (caseId: string): Promise<ApiResult<StoryResponse>> => {
    if (DEMO_MODE) {
      return { ok: true, data: mockStory(caseId, '') };
    }
    return apiFetch<StoryResponse>(`/cases/${caseId}/story`);
  },
};
