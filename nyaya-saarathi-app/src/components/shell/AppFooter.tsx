import React from 'react';
import Link from 'next/link';

export const AppFooter = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-4 px-6 flex justify-between items-center text-xs text-gray-500 z-50">
      <div>
        Requirements: Unpaid Wages v1.0.0, last checked 2026-10-10
      </div>
      <div className="flex gap-4">
        <Link href="/help" className="hover:text-gray-900">Help & FAQ</Link>
        <Link href="#" className="hover:text-gray-900">Privacy Notice</Link>
      </div>
    </footer>
  );
};