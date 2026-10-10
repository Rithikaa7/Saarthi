"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { DetailPanel } from '@/components/evidence/DetailPanel';
import { EvidenceCard } from '@/components/evidence/EvidenceCard';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useCaseStore } from '@/store/CaseContext';

export default function EvidenceMapPage() {
  const { conflicts, extractAndLoadEvidence, isLoading, mode, caseId } = useCaseStore();
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (caseId && mode === 'live' && !fetchedRef.current) {
      fetchedRef.current = true;
      extractAndLoadEvidence();
    }
  }, [extractAndLoadEvidence, mode, caseId]);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-4 flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#14532d] mb-4" />
        <p className="text-gray-600 font-medium">Extracting facts and analyzing evidence...</p>
      </div>
    );
  }

  const userFact = {
    value: 'January 2026',
    origin: 'user',
    type: 'Start Date'
  };
  
  const docFact = {
    value: '1 Feb 2026',
    origin: 'document',
    type: 'Start Date',
    source: { docName: 'Employment Letter', page: '1', excerpt: 'Your date of joining will be 1 February 2026.' }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 flex flex-col min-h-[80vh]">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Evidence Map</h1>
      <p className="text-gray-600 mb-8">See how your story and documents connect. We found <span className="font-bold text-amber-600">1 conflict</span> that needs review.</p>

      <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
        {/* Graph Area */}
        <div className="flex-1 bg-gray-50 p-8 relative flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
           
           <div className="flex flex-col items-center gap-8 w-full max-w-md">
              <div className="flex flex-col gap-4 w-full">
                 <EvidenceCard fact={userFact} />
                 <div className="w-px h-8 bg-amber-400 mx-auto"></div>
                 <EvidenceCard fact={docFact} />
              </div>
              
              <div className="bg-amber-100 border-2 border-amber-400 p-4 rounded-xl text-center cursor-pointer hover:bg-amber-200 transition-colors mt-4 w-full">
                 <AlertCircle className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                 <p className="font-bold text-amber-800">Date Conflict</p>
                 <p className="text-xs text-amber-700">Needs review</p>
              </div>
           </div>
        </div>

        {/* Detail Panel */}
        <div className="w-full md:w-80 flex flex-col h-full bg-white relative">
           <DetailPanel item={conflicts[0]} />
           
           <div className="p-6 border-t border-gray-200 space-y-3 mt-auto bg-gray-50">
             <Link href="/clarify" className="block w-full">
               <button className="w-full bg-[#b45309] hover:bg-[#92400e] text-white py-3 rounded-xl font-bold shadow-sm">
                 Clarify Now
               </button>
             </Link>
             <Link href="/dashboard" className="block w-full">
               <button className="w-full bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 py-3 rounded-xl font-medium">
                 Go to Dashboard
               </button>
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
}