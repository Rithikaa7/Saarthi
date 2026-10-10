import React from 'react';
import { CheckCircle2, HelpCircle, XCircle, AlertCircle } from 'lucide-react';

type StatusType = 'found' | 'clarify' | 'missing' | 'human' | 'not_applicable' | 'unavailable';

export const StatusChip = ({ status }: { status: StatusType }) => {
  switch (status) {
    case 'found': 
      return <span className="flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5"/> Information found</span>;
    case 'clarify': 
      return <span className="flex items-center gap-1.5 text-xs font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full"><HelpCircle className="w-3.5 h-3.5"/> Please clarify</span>;
    case 'missing': 
      return <span className="flex items-center gap-1.5 text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full"><XCircle className="w-3.5 h-3.5"/> Not yet provided</span>;
    case 'human': 
      return <span className="flex items-center gap-1.5 text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full"><AlertCircle className="w-3.5 h-3.5"/> Ask a person to confirm</span>;
    case 'not_applicable':
      return <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full">May not apply</span>;
    case 'unavailable':
      return <span className="flex items-center gap-1.5 text-xs font-medium text-red-700 bg-red-100 px-3 py-1 rounded-full"><XCircle className="w-3.5 h-3.5"/> You marked: not available</span>;
    default: 
      return null;
  }
};