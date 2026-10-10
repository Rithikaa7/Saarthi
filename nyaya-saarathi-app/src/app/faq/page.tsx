"use client";

import React from 'react';

export default function FAQPage() {
  const faqs = [
    { q: 'Is this legal advice?', a: 'No, this tool only helps you organize facts and documents based on common requirements. You must consult a legal professional for advice.' },
    { q: 'What does "Information found" mean?', a: 'It means the AI found a detail in your uploaded documents that seems to match a requirement. You should always review it.' },
    { q: 'Why do you show two dates?', a: 'If you typed one date in your story but a document shows a different date, we show both so you can clarify the conflict.' }
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
            <p className="text-sm text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}