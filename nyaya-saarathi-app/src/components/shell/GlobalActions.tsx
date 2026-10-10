import React from 'react';
import Link from 'next/link';
import { Trash2, LifeBuoy } from 'lucide-react';

export const GlobalActions = () => {
  return (
    <div className="mt-auto border-t border-gray-200 pt-6 space-y-2">
      <Link href="/help" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-colors">
        <LifeBuoy className="w-4 h-4" /> Get human help
      </Link>
      <button className="w-full flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors">
        <Trash2 className="w-4 h-4" /> Delete my session
      </button>
    </div>
  );
};