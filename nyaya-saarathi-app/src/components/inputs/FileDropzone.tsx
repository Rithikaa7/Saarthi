"use client";
import React, { useRef } from 'react';
import { UploadCloud } from 'lucide-react';

export const FileDropzone = ({ onUpload }: { onUpload?: (file: File) => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0 && onUpload) {
      onUpload(e.target.files[0]);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div 
      onClick={() => fileInputRef.current?.click()}
      className="border-2 border-dashed border-gray-300 rounded-3xl p-10 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer text-center"
    >
      <input 
        type="file" 
        className="hidden" 
        ref={fileInputRef} 
        onChange={handleFileChange}
        accept=".pdf,.txt,.jpg,.jpeg,.png"
      />
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <UploadCloud className="w-8 h-8 text-[#65a30d]" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">Click to upload or drag & drop</h3>
      <p className="text-sm text-gray-500 mb-4">Supported: PDF, TXT, Images (Max 10MB)</p>
      <button className="bg-white border border-gray-200 shadow-sm text-gray-700 px-5 py-2 rounded-full font-medium text-sm pointer-events-none">
        Select Files
      </button>
    </div>
  );
};