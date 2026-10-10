/* eslint-disable */
import React from 'react';
import { FileText } from 'lucide-react';

export const RequirementCard = ({ requirement }: { requirement: any }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-bold text-gray-900">{requirement.id}. {requirement.title}</h3>
      {requirement.needsHuman && (
        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">Needs human confirm</span>
      )}
    </div>
    <p className="text-sm text-gray-600 mb-3">{requirement.description}</p>
    <div className="flex gap-4">
      <button className="text-xs text-[#14532d] font-medium flex items-center gap-1">
        <FileText className="w-3 h-3"/> Official wording
      </button>
    </div>
  </div>
);