"use client";

import React from 'react';

export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Pack Manager</h1>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
            <tr>
              <th className="p-4 font-medium uppercase">Pack Name</th>
              <th className="p-4 font-medium uppercase">Version</th>
              <th className="p-4 font-medium uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="p-4 font-bold text-gray-900">Unpaid Wages</td>
              <td className="p-4 text-gray-600">v1.0.0</td>
              <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">Published</span></td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-gray-900">Workplace Injury</td>
              <td className="p-4 text-gray-600">v0.9.1</td>
              <td className="p-4"><span className="bg-amber-100 text-amber-700 px-2 py-1 rounded font-medium">Draft</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}