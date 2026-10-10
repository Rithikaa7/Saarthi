import React from 'react';
import Link from 'next/link';
import { Scale, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-[#14532d] rounded-lg flex items-center justify-center">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-[#14532d]">Nyaya Saarathi</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/intake" className="text-sm font-medium text-gray-600 hover:text-gray-900">Intake</Link>
            <Link href="/upload" className="text-sm font-medium text-gray-600 hover:text-gray-900">Upload</Link>
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900">Dashboard</Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-transparent hover:bg-gray-100 text-gray-700 inline-flex items-center justify-center font-medium transition-colors rounded-full px-4 py-2 text-sm">
              தமிழ்
            </button>
            <Link href="/intake">
              <button className="bg-[#14532d] hover:bg-[#0f3f24] text-white inline-flex items-center justify-center font-medium transition-colors rounded-full px-5 py-2 text-sm">
                Start Your Case
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
