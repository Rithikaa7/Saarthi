import React from 'react';

export const ReviewBadge = ({ status }: { status: string }) => {
  return (
    <span className="text-sm font-semibold text-blue-700 bg-blue-100 inline-flex px-2 py-1 rounded">
      {status}
    </span>
  );
};