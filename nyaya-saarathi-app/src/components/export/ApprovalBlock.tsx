/* eslint-disable */
"use client";
import React from 'react';
import { AlertCircle, Download } from 'lucide-react';

export const ApprovalBlock = ({ onApprove }: { onApprove: (v: boolean) => void }) => {
  const [approved, setApproved] = React.useState(false);

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-8">
      <div className="flex items-start gap-3 mb-6 bg-amber-50 text-amber-800 p-4 rounded-xl border border-amber-200">
        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
        <p className="text-sm">You still have <strong>1 open item</strong>. It will be marked as "Needs Review" in the final export.</p>
      </div>
      
      <label className="flex items-start gap-3 cursor-pointer group mb-6">
        <input type="checkbox" checked={approved} onChange={e => { setApproved(e.target.checked); onApprove(e.target.checked); }} className="mt-1 w-5 h-5 accent-[#14532d]" />
        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
          I have reviewed this summary and the documents, and I want to generate the package.
        </span>
      </label>

      <button disabled={!approved} className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${approved ? 'bg-[#14532d] hover:bg-[#0f3f24] text-white shadow-lg shadow-[#14532d]/20' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
        <Download className="w-5 h-5" /> Download ZIP Package
      </button>
    </div>
  );
};