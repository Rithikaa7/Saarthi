"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { RequirementCard } from '@/components/content/RequirementCard';
import { useCaseStore } from '@/store/CaseContext';

export default function RequirementsPage() {
  const { requirements } = useCaseStore();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
        <p className="text-sm text-amber-800 font-medium">These are things the process commonly asks about. Having them does not guarantee any outcome.</p>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Requirements Explained</h1>
      
      <div className="space-y-4 mb-8">
        {requirements.map(r => <RequirementCard key={r.id} requirement={r} />)}
      </div>

      <div className="flex justify-end">
        <Link href="/upload">
          <button className="bg-[#14532d] hover:bg-[#0f3f24] text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2">
            Continue to Upload <ArrowRight className="w-4 h-4"/>
          </button>
        </Link>
      </div>
    </div>
  );
}