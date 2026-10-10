"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CanCannotCard } from '@/components/content/CanCannotCard';
import { AIDisclosure } from '@/components/content/AIDisclosure';
import { ConsentBlock } from '@/components/inputs/ConsentBlock';
import { useCaseStore } from '@/store/CaseContext';
import { Loader2 } from 'lucide-react';

export default function WelcomePage() {
  const router = useRouter();
  const { createCase, isLoading, mode } = useCaseStore();

  const [consented, setConsented] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleStart = async () => {
    if (!consented) return;
    setLocalError(null);

    const result = await createCase('EN');
    if (result.ok) {
      router.push('/intake');
    } else {
      // Explicit failure — never silently swallow it.
      setLocalError(
        mode === 'live'
          ? `Could not create case: ${result.message}. Check that the backend is running.`
          : result.message,
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Nyaya Saarathi
        </h1>
        <p className="text-xl text-gray-600">
          Helps you organise your information and papers before you approach legal aid.
        </p>
      </div>

      <CanCannotCard
        canList={[
          'Organise your story and documents',
          'Explain requirements in plain language',
          'Show what information is missing',
          'Prepare a review-ready package',
        ]}
        cannotList={[
          'Give legal advice',
          'Decide if you are eligible',
          'Predict case outcomes',
          'File applications for you',
        ]}
      />

      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-8 mt-8">
        <h3 className="font-bold text-gray-900 mb-2">Privacy &amp; Consent</h3>
        <AIDisclosure />
        <ConsentBlock onChange={(c1, c2) => setConsented(c1 && c2)} />
      </div>

      {/* Explicit error display — never hidden */}
      {localError && (
        <div
          role="alert"
          className="mb-6 bg-red-50 border border-red-300 text-red-800 text-sm px-4 py-3 rounded-xl"
        >
          {localError}
        </div>
      )}

      <div className="flex justify-between items-center">
        <button className="text-gray-500 font-medium text-sm hover:text-gray-900 transition-colors">
          Read full privacy notice
        </button>

        <button
          onClick={handleStart}
          disabled={!consented || isLoading}
          aria-disabled={!consented || isLoading}
          className={`px-8 py-3 rounded-full font-bold transition-colors inline-flex items-center gap-2
            ${consented && !isLoading
              ? 'bg-[#14532d] hover:bg-[#0f3f24] text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          {isLoading ? 'Creating session…' : 'Start Preparation'}
        </button>
      </div>
    </div>
  );
}