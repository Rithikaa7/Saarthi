import React from 'react';
import { AlertCircle } from 'lucide-react';

export const DisclaimerBanner = () => {
  return (
    <div className="bg-gray-900 text-gray-200 text-xs py-2 px-6 flex items-center justify-center gap-2 z-50">
      <AlertCircle className="w-3.5 h-3.5" />
      <span>Preparation tool — not a lawyer. No legal advice. Does not decide eligibility.</span>
    </div>
  );
};