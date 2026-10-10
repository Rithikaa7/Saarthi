import React from 'react';
import { ShieldCheck, Scale } from 'lucide-react';

export const CanCannotCard = ({ canList, cannotList }: { canList: string[], cannotList: string[] }) => (
  <div className="grid md:grid-cols-2 gap-8 mb-12">
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h3 className="font-bold text-green-700 text-lg mb-4 flex items-center gap-2">
        <ShieldCheck className="w-5 h-5" /> What we can do
      </h3>
      <ul className="space-y-3 text-gray-600">
        {canList.map((item, i) => <li key={i}>• {item}</li>)}
      </ul>
    </div>
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h3 className="font-bold text-red-700 text-lg mb-4 flex items-center gap-2">
        <Scale className="w-5 h-5" /> What we cannot do
      </h3>
      <ul className="space-y-3 text-gray-600">
        {cannotList.map((item, i) => <li key={i}>• {item}</li>)}
      </ul>
    </div>
  </div>
);