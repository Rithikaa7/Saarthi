/* eslint-disable */
"use client";
import React from 'react';
import { OriginBadge } from './OriginBadge';
import { SourceExcerpt } from './SourceExcerpt';

export const EvidenceCard = ({ fact }: { fact: any }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
    <div className="flex justify-between items-start mb-3">
      <OriginBadge origin={fact.origin} />
      <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{fact.type}</span>
    </div>
    <p className="text-lg font-bold text-gray-900 mb-2">{fact.value}</p>
    {fact.origin === 'document' && fact.source && (
      <SourceExcerpt docName={fact.source.docName} page={fact.source.page} excerpt={fact.source.excerpt} />
    )}
  </div>
);