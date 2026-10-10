/* eslint-disable */
"use client";
import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

export const RelationshipList = ({ relations }: { relations: any[] }) => (
  <div className="space-y-2">
    {relations.map((rel, i) => (
      <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
        <LinkIcon className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
        <p><span className="font-medium text-gray-800">{rel.type}</span> {rel.target}</p>
      </div>
    ))}
  </div>
);