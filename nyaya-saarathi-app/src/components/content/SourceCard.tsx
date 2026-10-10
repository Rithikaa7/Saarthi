/* eslint-disable */
import React from 'react';
import { ExternalLink } from 'lucide-react';

export const SourceCard = ({ source }: { source: any }) => (
  <a href={source.url} target="_blank" rel="noopener noreferrer" className="block p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
    <h4 className="font-bold text-[#14532d] flex items-center gap-2">
      {source.title} <ExternalLink className="w-4 h-4"/>
    </h4>
    <p className="text-xs text-gray-500 mt-1">Last checked: {source.lastChecked}</p>
  </a>
);