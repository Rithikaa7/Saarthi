/**
 * Low-level HTTP client — thin wrapper around fetch.
 *
 * Reads NEXT_PUBLIC_API_BASE_URL from the environment.
 * Defaults to http://localhost:8000 so the frontend works
 * against a locally running FastAPI server during development.
 *
 * Never falls back silently to mock data here.
 * The demo-mode toggle lives one layer up in casesApi / intakeApi.
 */

import type { ApiErrorBody, ApiResult } from './api.types';

export const API_BASE =
  (process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8000').replace(/\/$/, '');

/** Shared fetch helper with consistent error serialisation. */
export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<ApiResult<T>> {
  const url = `${API_BASE}${path}`;
  try {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json', ...init?.headers },
      ...init,
    });

    if (res.ok) {
      const data: T = res.status === 204 ? (undefined as unknown as T) : await res.json();
      return { ok: true, data };
    }

    // Parse FastAPI error envelope
    let message = `HTTP ${res.status}`;
    try {
      const body: ApiErrorBody = await res.json();
      if (typeof body.detail === 'string') {
        message = body.detail;
      } else if (Array.isArray(body.detail) && body.detail.length > 0) {
        message = body.detail.map((e) => e.msg).join('; ');
      }
    } catch {
      /* body was not JSON — keep the status message */
    }
    return { ok: false, status: res.status, message };
  } catch (err: unknown) {
    // Network error (offline, CORS, DNS failure, etc.)
    const message = err instanceof Error ? err.message : 'Network error';
    return { ok: false, status: 0, message };
  }
}
