"use client";
import React from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ProcessingStatus = ({ status, detailsFound }: { status: 'reading' | 'done' | 'error', detailsFound?: number }) => {
  if (status === 'reading') {
    return (
      <div className="flex items-center gap-2 text-gray-500 text-xs">
        <Loader2 className="w-4 h-4 animate-spin text-[#65a30d]" /> Reading text...
      </div>
    );
  }
  if (status === 'error') {
    return (
      <div className="flex items-center gap-2 text-red-600 text-xs font-medium">
        <AlertCircle className="w-4 h-4" /> Could not read
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 text-green-600 text-xs font-medium">
      <CheckCircle2 className="w-4 h-4" /> Processed • {detailsFound} details found
    </div>
  );
};