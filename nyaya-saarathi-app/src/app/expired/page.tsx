/* eslint-disable */
"use client";

import React from 'react';
import { Clock } from 'lucide-react';
export default function ExpiredPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Clock className="w-16 h-16 text-gray-300 mb-4" />
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Session Expired</h1>
      <p className="text-gray-500 mb-8">For your privacy, your session data has been cleared.</p>
      <button className="bg-[#14532d] text-white px-8 py-3 rounded-full font-medium" onClick={() => window.location.href='/welcome'}>Start Again</button>
    </div>
  );
}