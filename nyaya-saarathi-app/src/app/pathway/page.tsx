"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PathwayCard } from '@/components/content/PathwayCard';
import { useCaseStore } from '@/store/CaseContext';
import { Loader2 } from 'lucide-react';

export default function PathwayPage() {
  const router = useRouter();
  const { pathway, generatePathwayAndRequirements, isLoading, mode, caseId } = useCaseStore();
  const fetchedRef = useRef(false);

  useEffect(() => {
    // Generate only once per caseId when in live mode.
    if (caseId && mode === 'live' && !fetchedRef.current) {
      fetchedRef.current = true;
      generatePathwayAndRequirements();
    }
  }, [generatePathwayAndRequirements, mode, caseId]);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-4 flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#14532d] mb-4" />
        <p className="text-gray-600 font-medium">Analyzing your story to find the best pathway...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Pathway</h1>
      <p className="text-gray-600 mb-8">Based on your story, here is what we think fits best.</p>

      <div className="mb-8">
        <PathwayCard pathway={pathway} onConfirm={() => router.push('/requirements')} isSuggested={true} />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4 mt-12">Other Possible Pathways</h3>
      <div className="space-y-6 mb-12">
        <PathwayCard 
          pathway={{
            title: "Workplace Harassment",
            description: "If your story involves mistreatment, discrimination, or harassment at the workplace alongside or instead of unpaid wages.",
            authority: "Internal Complaints Committee / Labour Court",
            version: "Pack v1.0.0",
            date: "Oct 2026",
            reviewStatus: "reviewed"
          }} 
          onConfirm={() => router.push('/requirements')} 
          isSuggested={false} 
        />
        <PathwayCard 
          pathway={{
            title: "Unfair Dismissal / Termination",
            description: "If you were fired without proper notice or valid reason according to your contract or labour laws.",
            authority: "Labour Court / Tribunal",
            version: "Pack v1.0.0",
            date: "Oct 2026",
            reviewStatus: "reviewed"
          }} 
          onConfirm={() => router.push('/requirements')} 
          isSuggested={false} 
        />
      </div>

      <div className="text-center">
        <Link href="/help">
          <button className="text-gray-500 hover:text-gray-900 font-medium text-sm underline">None of these fit</button>
        </Link>
      </div>
    </div>
  );
}