/* eslint-disable */
"use client";

import React from 'react';
import { useCaseStore } from '@/store/CaseContext';

export default function SupportWorkerViewPage() {
  const { summary } = useCaseStore();
  
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="bg-blue-900 text-white px-6 py-3 rounded-t-2xl font-medium flex justify-between items-center">
        <span>Support Worker View (Read Only)</span>
        <span className="text-sm bg-blue-800 px-3 py-1 rounded-full">Access expires in 2h</span>
      </div>
      <div className="bg-white p-8 rounded-b-2xl border border-t-0 border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Overview</h2>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
          <p className="text-gray-700 italic">"{summary}"</p>
        </div>
        <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-xl font-medium">Add Internal Note</button>
      </div>
    </div>
  );
}