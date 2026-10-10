/* eslint-disable */
"use client";
import React from 'react';
import { FileText } from 'lucide-react';

export const DocumentPicker = ({ documents }: { documents: any[] }) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-8 p-6">
    <h3 className="font-bold text-gray-900 mb-4">Documents to include</h3>
    <div className="space-y-3">
      {documents.map((doc, i) => (
        <label key={i} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group">
          <div className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#14532d]" />
            <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#14532d] transition-colors" />
            <span className="text-sm font-medium text-gray-900">{doc.name}</span>
          </div>
          <span className="text-xs text-gray-500">{doc.pages} pages</span>
        </label>
      ))}
    </div>
  </div>
);