/* eslint-disable */
"use client";
import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export const OfficialLinksPanel = ({ links }: { links: any[] }) => (
  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8">
    <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
      <ShieldCheck className="w-5 h-5 text-blue-600" /> Official Resources
    </h3>
    <div className="space-y-3">
      {links.map((link, i) => (
        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white p-4 rounded-xl border border-blue-200 hover:border-blue-300 transition-colors group">
          <div>
            <p className="font-semibold text-blue-900 group-hover:text-blue-700">{link.title}</p>
            <p className="text-xs text-blue-600 mt-1">Verified on: {link.checked}</p>
          </div>
          <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-blue-600" />
        </a>
      ))}
    </div>
  </div>
);