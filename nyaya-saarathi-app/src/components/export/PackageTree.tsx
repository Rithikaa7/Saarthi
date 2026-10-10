/* eslint-disable */
"use client";
import React from 'react';
import { Folder, FileText } from 'lucide-react';

export const PackageTree = () => (
  <div className="bg-white p-6 rounded-2xl border border-gray-200">
    <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">What's in the ZIP?</h3>
    <div className="font-mono text-xs text-gray-600 space-y-2">
      <div className="flex items-center gap-2 text-gray-900 font-semibold"><Folder className="w-4 h-4 text-blue-500 fill-blue-500/20"/> nyaya-saarathi-export/</div>
      <div className="flex items-center gap-2 ml-4"><FileText className="w-4 h-4 text-gray-400"/> 01_Summary.md</div>
      <div className="flex items-center gap-2 ml-4"><FileText className="w-4 h-4 text-gray-400"/> 02_Evidence_Index.csv</div>
      <div className="flex items-center gap-2 ml-4"><FileText className="w-4 h-4 text-gray-400"/> 03_Requirement_to_Evidence_Index.md</div>
      <div className="flex items-center gap-2 ml-4"><FileText className="w-4 h-4 text-gray-400"/> 04_Checklist.md</div>
      <div className="flex items-center gap-2 ml-4"><Folder className="w-4 h-4 text-blue-500 fill-blue-500/20"/> 06_Selected_Documents/</div>
      <div className="flex items-center gap-2 ml-8 text-gray-500"><FileText className="w-4 h-4 text-gray-300"/> employment_letter.pdf</div>
    </div>
  </div>
);