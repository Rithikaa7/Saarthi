import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, Lock } from 'lucide-react';

const steps = [
  { id: 1, name: 'Welcome', path: '/welcome', status: 'done' },
  { id: 2, name: 'Tell Your Story', path: '/intake', status: 'done' },
  { id: 3, name: 'Choose Pathway', path: '/pathway', status: 'done' },
  { id: 4, name: 'Requirements', path: '/requirements', status: 'done' },
  { id: 5, name: 'Upload', path: '/upload', status: 'current' },
  { id: 6, name: 'Evidence Map', path: '/evidence-map', status: 'locked' },
  { id: 7, name: 'Clarification', path: '/clarify', status: 'locked' },
  { id: 8, name: 'Dashboard', path: '/dashboard', status: 'locked' },
  { id: 9, name: 'Review & Export', path: '/review', status: 'locked' }
];

export const StepNavigator = () => {
  return (
    <nav className="w-64 border-r border-gray-100 bg-gray-50/50 p-6 flex flex-col h-full overflow-y-auto">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Preparation Steps</div>
      <ul className="space-y-4 flex-1">
        {steps.map((step) => (
          <li key={step.id}>
            <Link href={step.status === 'locked' ? '#' : step.path} className={`flex items-center gap-3 group ${step.status === 'locked' ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
              {step.status === 'done' && <CheckCircle2 className="w-5 h-5 text-[#84cc16]" />}
              {step.status === 'current' && <Circle className="w-5 h-5 text-[#14532d] fill-[#14532d]/10" />}
              {step.status === 'locked' && <Lock className="w-5 h-5 text-gray-300" />}
              <span className={`text-sm font-medium ${step.status === 'current' ? 'text-[#14532d]' : 'text-gray-600 group-hover:text-gray-900'}`}>
                {step.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};