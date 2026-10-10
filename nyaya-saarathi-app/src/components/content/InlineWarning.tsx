import React from 'react';
import { AlertCircle } from 'lucide-react';

export const InlineWarning = ({ message }: { message: string }) => (
  <div className="flex items-start gap-2 text-amber-700 bg-amber-50 p-3 rounded-lg text-xs mt-2">
    <AlertCircle className="w-4 h-4 shrink-0" />
    <p>{message}</p>
  </div>
);