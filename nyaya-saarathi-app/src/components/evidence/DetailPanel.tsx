/* eslint-disable */
"use client";
import React from 'react';
import { OriginBadge } from './OriginBadge';
import { VerificationBadge } from './VerificationBadge';
import { RelationshipList } from './RelationshipList';

export const DetailPanel = ({ item }: { item: any }) => (
  <div className="w-full md:w-80 bg-white p-6 flex flex-col h-full border-l border-gray-200">
    <h3 className="font-bold text-gray-900 border-b pb-3 mb-4">Detail Panel</h3>
    <div className="space-y-6">
      <div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Overview</p>
        <p className="text-lg font-bold text-gray-900 mb-2">{item.value}</p>
        <div className="flex gap-2 items-center">
          <OriginBadge origin={item.origin} />
          {item.origin === 'document' && <VerificationBadge verified={item.verified} />}
        </div>
      </div>
      
      {item.relations && (
        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Connections</p>
          <RelationshipList relations={item.relations} />
        </div>
      )}
    </div>
  </div>
);