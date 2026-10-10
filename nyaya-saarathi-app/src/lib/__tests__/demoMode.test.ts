/**
 * Tests for casesApi and intakeApi in DEMO mode.
 * No network calls — verifies mock contract shape.
 */
import { describe, it, expect, beforeAll } from 'vitest';

// Force demo mode for this test suite without touching env globally
// by importing the modules AFTER setting the env variable.
beforeAll(() => {
  process.env.NEXT_PUBLIC_DEMO_MODE = 'true';
});

describe('casesApi (demo mode)', () => {
  it('create returns a stable case with the requested lang', async () => {
    const { casesApi } = await import('../casesApi');
    const result = await casesApi.create({
      lang: 'TA',
      consent_no_legal_advice: true,
      consent_ai_processing: true,
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.id).toContain('demo-case');
      expect(result.data.lang).toBe('TA');
      expect(result.data.consent_no_legal_advice).toBe(true);
    }
  });

  it('get returns a case with the given caseId', async () => {
    const { casesApi } = await import('../casesApi');
    const result = await casesApi.get('my-test-case-id');
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.data.id).toBe('my-test-case-id');
  });
});

describe('intakeApi (demo mode)', () => {
  it('saveStory echoes the story_text back', async () => {
    const { intakeApi } = await import('../intakeApi');
    const result = await intakeApi.saveStory('case-1', {
      story_text: 'My employer did not pay me.',
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.case_id).toBe('case-1');
      expect(result.data.story_text).toBe('My employer did not pay me.');
      expect(result.data.updated_at).toBeTruthy();
    }
  });

  it('getStory returns an empty story for a new case', async () => {
    const { intakeApi } = await import('../intakeApi');
    const result = await intakeApi.getStory('case-2');
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.case_id).toBe('case-2');
      expect(result.data.story_text).toBe('');
    }
  });
});
