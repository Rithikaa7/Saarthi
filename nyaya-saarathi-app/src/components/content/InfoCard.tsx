/* eslint-disable */
import React from 'react';

export const InfoCard = ({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon?: any }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
    {title && (
      <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
        {Icon && <Icon className="w-5 h-5 text-gray-500" />}
        {title}
      </h3>
    )}
    <div className="text-gray-600 text-sm space-y-3">
      {children}
    </div>
  </div>
);