/* eslint-disable */
"use client";
import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { AnswerActions } from './AnswerActions';
import { EvidenceCard } from '../evidence/EvidenceCard';

export const QuestionCard = ({ question, onAnswer }: { question: any, onAnswer: (answer: string) => void }) => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="bg-white p-8 rounded-3xl border-2 border-amber-400 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-amber-400 text-amber-900 px-4 py-1 text-xs font-bold rounded-bl-xl uppercase tracking-wider">
        Conflict
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{question.title}</h2>
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8 bg-gray-50 inline-flex px-3 py-1.5 rounded-lg border border-gray-200">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
        <p>{question.why}</p>
      </div>

      {question.evidence && question.evidence.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6 mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
          {question.evidence.map((ev: any, idx: number) => (
            <EvidenceCard key={idx} fact={ev} />
          ))}
        </div>
      )}

      <div className="space-y-4">
        <p className="font-bold text-gray-900">Which one is correct?</p>
        {question.options?.map((opt: string, i: number) => (
          <label key={i} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
            <input 
              type="radio" 
              name="answer" 
              checked={selected === opt}
              onChange={() => setSelected(opt)}
              className="w-4 h-4 accent-[#14532d]" 
            />
            <span className="font-medium text-gray-800">{opt}</span>
          </label>
        ))}
      </div>

      <AnswerActions onSave={() => {
        if (selected) {
          onAnswer(selected);
        }
      }} />
    </div>
  );
};