"use client";

import React from 'react';
import Link from 'next/link';
import { QueueSummary } from '@/components/clarify/QueueSummary';
import { QuestionCard } from '@/components/clarify/QuestionCard';
import { AnsweredList } from '@/components/clarify/AnsweredList';
import { useCaseStore } from '@/store/CaseContext';

export default function ClarifyPage() {
  const stats = { total: 4, conflicts: 1, missing: 2, unclear: 1 };
  const { questions, answered, submitAnswer } = useCaseStore();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <QueueSummary stats={stats} />
      {questions.length > 0 ? (
        <QuestionCard 
          question={questions[0]} 
          onAnswer={(answer: string) => submitAnswer(questions[0].id as string, answer)} 
        />
      ) : (
        <div className="bg-white p-8 rounded-3xl border border-gray-200 text-center text-gray-600 mb-8">
          All questions answered! Great job.
        </div>
      )}
      <AnsweredList items={answered} />
      
      <div className="mt-12 flex justify-between">
        <Link href="/evidence-map">
          <button className="text-gray-500 hover:text-gray-900 font-medium px-4 py-2">Back to Map</button>
        </Link>
        <Link href="/dashboard">
          <button className="bg-[#14532d] hover:bg-[#0f3f24] text-white px-8 py-3 rounded-full font-medium transition-colors">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
