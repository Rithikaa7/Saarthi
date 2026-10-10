"use client";
/**
 * ModeBanner — displayed at the top of every page.
 *
 * DEMO mode  → amber strip: "Demo mode — synthetic data only"
 * LIVE mode  → hidden (no element rendered)
 * API error  → red strip with the exact failure message.
 *              Never silently hides a real failure.
 */
import React from 'react';
import { FlaskConical, WifiOff } from 'lucide-react';
import { useCaseStore } from '@/store/CaseContext';

export const ModeBanner = () => {
  const { mode, apiError } = useCaseStore();

  if (apiError) {
    return (
      <div
        role="alert"
        aria-live="assertive"
        className="bg-red-600 text-white text-xs font-medium py-2 px-6 flex items-center justify-center gap-2"
      >
        <WifiOff className="w-3.5 h-3.5 shrink-0" />
        <span>
          API error — {apiError}. The backend may be offline or unreachable.
        </span>
      </div>
    );
  }

  if (mode === 'demo') {
    return (
      <div
        role="status"
        className="bg-amber-400 text-amber-900 text-xs font-bold py-1.5 px-6 flex items-center justify-center gap-2"
      >
        <FlaskConical className="w-3.5 h-3.5 shrink-0" />
        Demo mode — synthetic data only. No real backend connection.
      </div>
    );
  }

  return null;
};
