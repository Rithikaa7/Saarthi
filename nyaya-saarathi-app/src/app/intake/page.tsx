"use client";
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Loader2, AlertCircle, Save } from 'lucide-react';
import { useCaseStore } from '@/store/CaseContext';

const CHIPS = [
  'Unpaid salary',
  'Notice received',
  'No written contract',
  'Employer refuses to respond',
];

// Auto-save debounce (ms) — avoids hammering the API on every keystroke.
const AUTOSAVE_DELAY_MS = 1500;

export default function IntakePage() {
  const router = useRouter();
  const { story, setStory, saveStory, caseId, isLoading, apiError, mode } =
    useCaseStore();
  const [saveStatus, setSaveStatus] = React.useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Redirect to welcome if no case has been created yet (direct URL access).
  useEffect(() => {
    if (!caseId && mode === 'live') {
      router.replace('/welcome');
    }
  }, [caseId, mode, router]);

  // Debounced auto-save — only triggers in live mode with a valid caseId.
  useEffect(() => {
    if (!caseId || mode === 'demo') return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setSaveStatus('saving');
      await saveStory();
      setSaveStatus(apiError ? 'error' : 'saved');
    }, AUTOSAVE_DELAY_MS);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [story]);

  const handleNext = async () => {
    if (caseId && mode === 'live') {
      setSaveStatus('saving');
      await saveStory();
      if (apiError) {
        setSaveStatus('error');
        return; // Block navigation on save failure — explicit, not silent.
      }
      setSaveStatus('saved');
    }
    router.push('/pathway');
  };

  const appendChip = (chip: string) => {
    const base = story.trimEnd();
    setStory(base ? `${base} ${chip}.` : `${chip}.`);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tell Your Story</h1>
        <p className="text-gray-600 mb-8">In your own words, what happened?</p>

        <div className="mb-8">
          <textarea
            id="story-input"
            value={story}
            onChange={(e) => {
              setStory(e.target.value);
              setSaveStatus('idle');
            }}
            className="w-full h-44 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#84cc16] focus:border-transparent outline-none resize-none text-gray-700 leading-relaxed"
            placeholder="Example: My employer has not paid my salary for three months. I started working in January…"
            aria-label="Your story"
          />

          {/* Quick-start chips */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {CHIPS.map((chip) => (
              <button
                key={chip}
                onClick={() => appendChip(chip)}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Save status — explicit, never hidden */}
        {saveStatus !== 'idle' && (
          <div
            role="status"
            aria-live="polite"
            className={`flex items-center gap-2 text-xs mb-6 ${
              saveStatus === 'error' ? 'text-red-600' : 'text-gray-500'
            }`}
          >
            {saveStatus === 'saving' && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            {saveStatus === 'saved' && <Save className="w-3.5 h-3.5 text-green-600" />}
            {saveStatus === 'error' && <AlertCircle className="w-3.5 h-3.5" />}
            <span>
              {saveStatus === 'saving' && 'Saving…'}
              {saveStatus === 'saved' && 'Saved'}
              {saveStatus === 'error' && `Save failed: ${apiError}. Check backend connectivity.`}
            </span>
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={isLoading || story.trim().length === 0}
            className={`px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-colors
              ${isLoading || story.trim().length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#14532d] hover:bg-[#0f3f24] text-white'
              }`}
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            Next Step <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}