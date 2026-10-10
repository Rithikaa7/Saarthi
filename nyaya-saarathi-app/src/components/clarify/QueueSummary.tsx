/* eslint-disable */
"use client";
import React from 'react';
import { HelpCircle, AlertCircle, XCircle } from 'lucide-react';

export const QueueSummary = ({ stats }: { stats: any }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-200 mb-8 shadow-sm">
    <h2 className="text-xl font-bold text-gray-900 mb-4">Please clarify {stats.total} items</h2>
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-amber-50 p-4 rounded-xl text-center border border-amber-100">
        <AlertCircle className="w-6 h-6 text-amber-600 mx-auto mb-2" />
        <p className="text-2xl font-bold text-amber-900">{stats.conflicts}</p>
        <p className="text-xs font-medium text-amber-800 uppercase">Conflicts</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-200">
        <XCircle className="w-6 h-6 text-gray-500 mx-auto mb-2" />
        <p className="text-2xl font-bold text-gray-900">{stats.missing}</p>
        <p className="text-xs font-medium text-gray-600 uppercase">Missing</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-xl text-center border border-blue-100">
        <HelpCircle className="w-6 h-6 text-blue-500 mx-auto mb-2" />
        <p className="text-2xl font-bold text-blue-900">{stats.unclear}</p>
        <p className="text-xs font-medium text-blue-800 uppercase">Unclear</p>
      </div>
    </div>
  </div>
);