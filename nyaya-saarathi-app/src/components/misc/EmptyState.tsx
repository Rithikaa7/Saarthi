"use client";
import React from 'react';
import { Inbox } from 'lucide-react';

export const EmptyState = ({ title, description, action }: { title: string, description: string, action?: React.ReactNode }) => (
  <div className="text-center p-8 border border-dashed border-gray-200 rounded-2xl bg-gray-50">
    <Inbox className="w-8 h-8 text-gray-300 mx-auto mb-3" />
    <h3 className="text-sm font-bold text-gray-900 mb-1">{title}</h3>
    <p className="text-xs text-gray-500 mb-4">{description}</p>
    {action}
  </div>
);