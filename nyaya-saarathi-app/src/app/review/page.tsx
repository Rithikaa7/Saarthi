"use client";

import React, { useState } from 'react';
import { SummaryEditor } from '@/components/export/SummaryEditor';
import { DocumentPicker } from '@/components/export/DocumentPicker';
import { ApprovalBlock } from '@/components/export/ApprovalBlock';
import { PackageTree } from '@/components/export/PackageTree';
import { DoneCard } from '@/components/export/DoneCard';
import { useCaseStore } from '@/store/CaseContext';

export default function ReviewPage() {
  const [downloaded, setDownloaded] = useState(false);

  const { summary, files } = useCaseStore();

  if (downloaded) {
    return (
      <div className="max-w-3xl mx-auto py-24 px-4">
        <DoneCard />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Review & Export</h1>
      <p className="text-gray-600 mb-8">Review the AI-generated summary and select documents to include.</p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <SummaryEditor content={summary} />
          <DocumentPicker documents={files} />
          <ApprovalBlock onApprove={() => {}} />
          <button 
            onClick={() => setDownloaded(true)}
            className="w-full bg-[#14532d] hover:bg-[#0f3f24] text-white py-4 rounded-xl font-bold mt-4"
          >
            Mock Download
          </button>
        </div>
        <div>
          <PackageTree />
        </div>
      </div>
    </div>
  );
}
