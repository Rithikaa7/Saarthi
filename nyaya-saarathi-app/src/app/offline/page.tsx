"use client";

import React from 'react';
import { WifiOff } from 'lucide-react';
export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <WifiOff className="w-16 h-16 text-amber-400 mb-4" />
      <h1 className="text-2xl font-bold text-gray-900 mb-2">You are offline</h1>
      <p className="text-gray-500 mb-8">AI services are currently unavailable.</p>
    </div>
  );
}