/* eslint-disable */
"use client";
import React from 'react';
import { ArrowRight, CheckCircle2, HelpCircle, FileCheck, Map as MapIcon } from 'lucide-react';
import Link from 'next/link';
import { useCaseStore } from '@/store/CaseContext';
import { StatusChip } from '@/components/dashboard/StatusChip';

export default function DashboardPage() {
  const { requirements } = useCaseStore();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-12">
        <div className="flex justify-between items-end mb-8">
           <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-xs mb-3">
               <FileCheck className="w-3.5 h-3.5" />
               <span>Unpaid Wages Pathway</span>
             </div>
             <h1 className="text-3xl font-bold text-gray-900">Readiness Dashboard</h1>
           </div>
           
           <div className="flex gap-3">
              <Link href="/evidence-map">
                <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full font-medium text-sm inline-flex items-center gap-2">
                  <MapIcon className="w-4 h-4" /> Evidence Map
                </button>
              </Link>
              <Link href="/review">
                <button className="bg-[#14532d] hover:bg-[#0f3f24] text-white px-5 py-2 rounded-full font-medium text-sm shadow-md">
                  Review &amp; Export
                </button>
              </Link>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                 <div className="bg-gray-50 p-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">Requirement Checklist</h3>
                    <span className="text-xs text-gray-500">Source: NALSA (Updated 2026-10-10)</span>
                 </div>
                 
                 <div className="divide-y divide-gray-100">
                    {requirements.map((req) => (
                       <div key={req.id} className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                          <div>
                             <h4 className="font-medium text-gray-900 mb-1">{req.title}</h4>
                             <p className="text-xs text-gray-500">{req.docs} supporting sources</p>
                          </div>
                          <div>
                             <StatusChip status={req.status as 'found' | 'clarify' | 'missing' | 'human'} />
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="space-y-6">
              <div className="bg-[#fffbeb] border border-[#fde68a] rounded-2xl p-6 shadow-sm">
                 <h3 className="font-bold text-[#b45309] mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" /> Action Needed
                 </h3>
                 
                 <div className="bg-white rounded-xl p-4 border border-[#fde68a] mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Conflict: Start Date</p>
                    <p className="text-xs text-gray-600 mb-3">Your story says January, but the employment letter says 1 February 2026.</p>
                    <Link href="/clarify">
                      <button className="w-full bg-[#b45309] hover:bg-[#92400e] text-white py-2 rounded-lg text-xs font-medium transition-colors">
                         Resolve Conflict
                      </button>
                    </Link>
                 </div>

                 <div className="bg-white rounded-xl p-4 border border-[#fde68a]">
                    <p className="text-sm font-medium text-gray-900 mb-2">Missing: Unpaid Months</p>
                    <p className="text-xs text-gray-600 mb-3">Which specific months were you not paid?</p>
                    <Link href="/clarify">
                      <button className="w-full bg-[#b45309] hover:bg-[#92400e] text-white py-2 rounded-lg text-xs font-medium transition-colors">
                         Answer Question
                      </button>
                    </Link>
                 </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center">
                 <p className="text-xs text-gray-500 leading-relaxed">
                    This dashboard shows preparation progress, not eligibility. Having all requirements marked as &quot;Found&quot; does not guarantee a successful claim.
                 </p>
              </div>
           </div>
        </div>

      </main>
    </div>
  );
}
