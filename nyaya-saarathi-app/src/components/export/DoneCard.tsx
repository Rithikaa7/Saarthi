"use client";
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const DoneCard = () => (
  <div className="text-center py-12">
    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <CheckCircle2 className="w-10 h-10 text-green-600" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Package Downloaded</h2>
    <p className="text-gray-600 max-w-md mx-auto mb-8">
      Your information is ready. This does not automatically file a case for you. You must take this package to the authority.
    </p>
  </div>
);