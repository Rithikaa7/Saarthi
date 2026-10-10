/* eslint-disable */
"use client";
import React from 'react';
import { Upload } from 'lucide-react';

export const AnswerActions = ({ onSave }: { onSave: () => void }) => (
  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-200 mt-6">
    <button 
      onClick={onSave}
      className="bg-[#14532d] hover:bg-[#0f3f24] text-white px-6 py-2.5 rounded-full font-medium shadow-sm transition-colors"
    >
      Save answer
    </button>
    <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5 rounded-full font-medium transition-colors">
      I don't know
    </button>
    <button className="text-gray-500 hover:text-gray-900 font-medium px-4 py-2.5 transition-colors">
      Skip for now
    </button>
    <div className="flex-1"></div>
    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2">
      <Upload className="w-4 h-4"/> Upload a document instead
    </button>
  </div>
);