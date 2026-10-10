/* eslint-disable */
"use client";
import React from 'react';

export const SourceExcerpt = ({ docName, page, excerpt }: { docName: string, page: string, excerpt: string }) => (
  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-2">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-xs font-bold text-gray-700">{docName} (Pg {page})</span>
      <button className="text-[10px] text-blue-600 font-bold uppercase hover:underline">View Source</button>
    </div>
    <p className="text-xs text-gray-500 italic font-serif border-l-2 border-gray-300 pl-2">"{excerpt}"</p>
  </div>
);