import React from 'react';
import Link from 'next/link';
import { Scale } from 'lucide-react';

export const AppHeader = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 h-16 flex items-center justify-between px-6 z-50">
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 bg-[#14532d] rounded-lg flex items-center justify-center">
          <Scale className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-lg text-[#14532d]">Nyaya Saarathi</span>
      </Link>
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors">
          தமிழ்
        </button>
      </div>
    </header>
  );
};