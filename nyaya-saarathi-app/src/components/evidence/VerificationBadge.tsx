"use client";
import React from 'react';
import { ShieldCheck, ShieldAlert } from 'lucide-react';

export const VerificationBadge = ({ verified }: { verified: boolean }) => {
  if (verified) {
    return <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium"><ShieldCheck className="w-3.5 h-3.5"/> Source verified</span>;
  }
  return <span className="inline-flex items-center gap-1 text-xs text-amber-600 font-medium"><ShieldAlert className="w-3.5 h-3.5"/> Source not verified</span>;
};