"use client";

import React from 'react';
import { InfoCard } from '@/components/content/InfoCard';
import { ShieldCheck, Download, Trash2 } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy & My Data</h1>
      
      <InfoCard title="Privacy Notice" icon={ShieldCheck}>
        <p>Your data is processed locally on your device where possible. Documents you upload are sent securely to our AI service for extraction and are not stored permanently by us.</p>
      </InfoCard>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
           <h3 className="font-bold text-gray-900 mb-2">Download My Data</h3>
           <p className="text-sm text-gray-500 mb-4">Export everything stored in this session.</p>
           <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-2 rounded-xl flex items-center justify-center gap-2 mx-auto w-full">
             <Download className="w-4 h-4"/> Download JSON
           </button>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-red-200 shadow-sm text-center">
           <h3 className="font-bold text-red-900 mb-2">Delete My Session</h3>
           <p className="text-sm text-red-700 mb-4">Permanently remove all data, documents, and answers.</p>
           <button className="bg-red-50 hover:bg-red-100 text-red-700 font-medium px-6 py-2 rounded-xl flex items-center justify-center gap-2 mx-auto w-full">
             <Trash2 className="w-4 h-4"/> Delete Session
           </button>
        </div>
      </div>
    </div>
  );
}