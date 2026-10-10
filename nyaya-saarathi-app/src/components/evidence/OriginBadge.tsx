"use client";
import React from 'react';
import { User, FileText } from 'lucide-react';

export const OriginBadge = ({ origin }: { origin: 'user' | 'document' }) => {
  if (origin === 'user') {
    return (
      <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-200 text-xs font-bold uppercase">
        <User className="w-3.5 h-3.5" /> You Said
      </div>
    );
  }
  return (
    <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-md border border-green-200 text-xs font-bold uppercase">
      <FileText className="w-3.5 h-3.5" /> From Document
    </div>
  );
};