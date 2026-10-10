"use client";
import React from 'react';

export const ConsentBlock = ({ onChange }: { onChange: (c1: boolean, c2: boolean) => void }) => {
  const [c1, setC1] = React.useState(false);
  const [c2, setC2] = React.useState(false);

  React.useEffect(() => onChange(c1, c2), [c1, c2]);

  return (
    <div className="space-y-3">
      <label className="flex items-start gap-3 cursor-pointer group">
        <input type="checkbox" checked={c1} onChange={e => setC1(e.target.checked)} className="mt-1 w-4 h-4 accent-[#14532d]" />
        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">I understand this tool does not give legal advice.</span>
      </label>
      <label className="flex items-start gap-3 cursor-pointer group">
        <input type="checkbox" checked={c2} onChange={e => setC2(e.target.checked)} className="mt-1 w-4 h-4 accent-[#14532d]" />
        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">I understand my text may be processed by an AI service.</span>
      </label>
    </div>
  );
};