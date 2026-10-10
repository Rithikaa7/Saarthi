/**
 * Tests for src/lib/apiClient.ts
 * Verifies: successful 2xx, 4xx error parsing, network failure.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { apiFetch, API_BASE } from '../apiClient';

// ── Helpers ────────────────────────────────────────────────────────────────

const mockFetch = (response: Partial<Response>) => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response));
};

const mockFetchThrows = (err: Error) => {
  vi.stubGlobal('fetch', vi.fn().mockRejectedValue(err));
};

beforeEach(() => vi.clearAllMocks());
afterEach(() => vi.unstubAllGlobals());

// ── Tests ──────────────────────────────────────────────────────────────────

describe('apiFetch', () => {
  it('returns ok:true with parsed JSON on 200', async () => {
    mockFetch({
      ok: true,
      status: 200,
      json: async () => ({ id: 'abc', lang: 'EN' }),
    } as Response);

    const result = await apiFetch<{ id: string; lang: string }>('/cases');
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.data.id).toBe('abc');
  });

  it('returns ok:true with undefined on 204', async () => {
    mockFetch({ ok: true, status: 204 } as Response);
    const result = await apiFetch<undefined>('/cases/x/story');
    expect(result.ok).toBe(true);
  });

  it('parses FastAPI string detail on 422', async () => {
    mockFetch({
      ok: false,
      status: 422,
      json: async () => ({ detail: 'story_text is required' }),
    } as Response);

    const result = await apiFetch('/cases/x/story');
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.status).toBe(422);
      expect(result.message).toBe('story_text is required');
    }
  });

  it('parses FastAPI array detail on 422', async () => {
    mockFetch({
      ok: false,
      status: 422,
      json: async () => ({
        detail: [
          { msg: 'field required', type: 'missing' },
          { msg: 'not a valid string', type: 'string_type' },
        ],
      }),
    } as Response);

    const result = await apiFetch('/cases');
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.message).toBe('field required; not a valid string');
  });

  it('handles non-JSON error body gracefully', async () => {
    mockFetch({
      ok: false,
      status: 500,
      json: async () => { throw new SyntaxError('not json'); },
    } as unknown as Response);

    const result = await apiFetch('/cases');
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.status).toBe(500);
  });

  it('returns status 0 and message on network error', async () => {
    mockFetchThrows(new Error('Failed to fetch'));
    const result = await apiFetch('/cases');
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.status).toBe(0);
      expect(result.message).toContain('Failed to fetch');
    }
  });

  it('uses the configured API_BASE URL', () => {
    expect(API_BASE).toBeTruthy();
    expect(API_BASE).not.toMatch(/\/$/); // no trailing slash
  });
});
