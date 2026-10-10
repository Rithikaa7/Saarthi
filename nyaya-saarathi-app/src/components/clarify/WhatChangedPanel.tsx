"use client";
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhatChangedPanel = () => (
  <div className="bg-green-50 p-4 rounded-xl border border-green-200 flex items-center gap-3 mb-6 text-green-800">
    <CheckCircle2 className="w-5 h-5 text-green-600" />
    <span className="text-sm font-medium">1 item updated based on your answer.</span>
  </div>
);