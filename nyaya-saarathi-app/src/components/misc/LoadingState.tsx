"use client";
import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingState = ({ text }: { text: string }) => (
  <div className="flex flex-col items-center justify-center p-12 space-y-3">
    <Loader2 className="w-8 h-8 animate-spin text-[#14532d]" />
    <p className="text-sm font-medium text-gray-600">{text}</p>
  </div>
);