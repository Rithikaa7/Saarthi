/* eslint-disable */
"use client";
import React from 'react';

export const AnsweredList = ({ items }: { items: any[] }) => (
  <div className="mt-8 pt-8 border-t border-gray-200">
    <h3 className="font-bold text-gray-900 mb-4">Answered Questions</h3>
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
          <div>
            <p className="text-sm font-medium text-gray-900">{item.question}</p>
            <p className="text-xs text-gray-500 mt-1">Answered: <span className="font-semibold text-gray-700">{item.answer}</span></p>
          </div>
          <button className="text-xs font-bold text-blue-600 uppercase hover:underline">Edit</button>
        </div>
      ))}
    </div>
  </div>
);