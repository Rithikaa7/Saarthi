/* eslint-disable */
"use client";
import React from 'react';
import { ReviewBadge } from './ReviewBadge';
import { ArrowRight } from 'lucide-react';

export const PathwayCard = ({ pathway, onConfirm, isSuggested = true }: { pathway: any, onConfirm: () => void, isSuggested?: boolean }) => (
  <div className={`border-2 rounded-2xl p-8 relative overflow-hidden ${isSuggested ? 'bg-[#f4fce3] border-[#d9f99d]' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
    {isSuggested && <div className="absolute top-0 right-0 bg-[#d9f99d] text-[#4d7c0f] px-4 py-1 text-xs font-bold rounded-bl-xl">Suggested Match</div>}
    
    <h2 className="text-2xl font-bold text-gray-900 mb-2">{pathway.name || pathway.title}</h2>
    <p className="text-gray-700 mb-6">{pathway.description}</p>
    
    <div className="grid grid-cols-2 gap-4 mb-8">
       <div>
         <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Authority</p>
         <p className="text-sm font-semibold text-gray-900">{pathway.authority || 'Labour Authority'}</p>
       </div>
       <div>
         <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Source Version</p>
         <p className="text-sm font-semibold text-gray-900">{pathway.version || 'Pack v1.0.0'} ({pathway.date || 'Oct 2026'})</p>
       </div>
       <div className="col-span-2">
         <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Status</p>
         <ReviewBadge status={pathway.reviewStatus || 'reviewed'} />
       </div>
    </div>

    <div className="flex justify-end">
      <button onClick={onConfirm} className={`px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 ${isSuggested ? 'bg-[#14532d] hover:bg-[#0f3f24] text-white' : 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-700'}`}>
        Confirm Pathway <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);