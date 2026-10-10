"use client";

import React from 'react';
import { SourceCard } from '@/components/content/SourceCard';

export default function SourcesPage() {
  const sources = [
    { title: 'Payment of Wages Act, 1936', url: '#', authority: 'Govt of India', lastChecked: 'Oct 2026' },
    { title: 'Minimum Wages Act, 1948', url: '#', authority: 'Govt of India', lastChecked: 'Oct 2026' }
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Official Sources</h1>
      <p className="text-gray-600 mb-8">The logic in this pack is derived from these official documents.</p>
      <div className="grid gap-4">
        {sources.map((s, i) => <SourceCard key={i} source={s} />)}
      </div>
    </div>
  );
}