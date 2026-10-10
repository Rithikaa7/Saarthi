"use client";
import React from 'react';
import { RefreshCw } from 'lucide-react';

export const SummaryEditor = ({ content }: { content: string }) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
      <h3 className="font-bold text-gray-900">Case Summary</h3>
      <button className="text-xs font-medium text-gray-500 flex items-center gap-1.5 hover:text-gray-900 transition-colors">
        <RefreshCw className="w-3.5 h-3.5" /> Regenerate
      </button>
    </div>
    <textarea 
      className="w-full h-64 p-6 outline-none focus:ring-2 focus:ring-[#84cc16] text-gray-700 resize-none font-serif leading-relaxed"
      defaultValue={content}
    />
  </div>
);