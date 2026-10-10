/* eslint-disable */
"use client";
import React from 'react';
import { FileText, Trash2, RotateCcw } from 'lucide-react';
import { ProcessingStatus } from '../evidence/ProcessingStatus';

export const FileRow = ({ file }: { file: any }) => (
  <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50 group">
    <div className="flex items-center gap-3">
      <FileText className="w-5 h-5 text-gray-400" />
      <div>
        <p className="text-sm font-medium text-gray-900">{file.name}</p>
        <ProcessingStatus status={file.status} detailsFound={file.detailsFound} />
      </div>
    </div>
    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      {file.status === 'error' && <button className="p-1.5 text-gray-400 hover:text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm"><RotateCcw className="w-3.5 h-3.5"/></button>}
      <button className="p-1.5 text-gray-400 hover:text-red-600 bg-white border border-gray-200 rounded-lg shadow-sm"><Trash2 className="w-3.5 h-3.5"/></button>
    </div>
  </div>
);