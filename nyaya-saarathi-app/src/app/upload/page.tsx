"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { FileDropzone } from '@/components/inputs/FileDropzone';
import { FileRow } from '@/components/inputs/FileRow';
import { useCaseStore } from '@/store/CaseContext';

export default function UploadPage() {
  const { files, uploadDocument } = useCaseStore();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Share Your Documents</h1>
      <p className="text-gray-600 mb-8">Upload letters, messages, receipts, or bank statements.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <FileDropzone onUpload={uploadDocument} />
          
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Uploaded Files</h4>
            <div className="space-y-3">
              {files.map((f, i) => <FileRow key={i} file={f} />)}
            </div>
          </div>
        </div>

        <div>
           <div className="bg-[#14532d] text-white rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="font-bold text-lg mb-2 relative z-10">AI Processing Notice</h3>
              <p className="text-green-100/90 text-sm mb-6 relative z-10">
                 Your documents will be analyzed to extract dates, amounts, and names.
              </p>
              <div className="flex items-start gap-2 bg-black/20 p-3 rounded-xl relative z-10">
                 <AlertCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                 <p className="text-xs text-green-50">Nothing is sent to authorities automatically.</p>
              </div>
           </div>

           <div className="mt-6 flex justify-end">
             <Link href="/evidence-map" className="w-full">
               <button className="w-full bg-[#84cc16] hover:bg-[#65a30d] text-white px-6 py-3 rounded-full font-medium text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-[#84cc16]/20">
                 Analyze Evidence <ArrowRight className="w-4 h-4" />
               </button>
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
}