"use client";
import React from 'react';

export const PasteTextBox = () => (
  <div className="w-full space-y-2">
    <label className="block text-sm font-medium text-gray-700">Paste document text here</label>
    <textarea className="w-full h-32 p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#84cc16]" placeholder="Paste chat messages or document text..." />
  </div>
);