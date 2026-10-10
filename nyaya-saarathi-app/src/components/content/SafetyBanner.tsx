import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const SafetyBanner = ({ show, onHelp }: { show: boolean, onHelp?: () => void }) => {
  if (!show) return null;
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mb-8 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-red-800 flex items-center gap-2 mb-1">
          <ShieldAlert className="w-5 h-5"/> Emergency Notice
        </h3>
        <p className="text-sm text-red-700">If you are in immediate danger, please contact local emergency services immediately (Dial 112).</p>
      </div>
      {onHelp && (
        <button onClick={onHelp} className="bg-white text-red-700 border border-red-200 px-4 py-2 rounded-lg text-sm font-medium">
          Get Human Help
        </button>
      )}
    </div>
  );
};