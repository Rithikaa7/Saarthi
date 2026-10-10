import React from 'react';
import { AppHeader } from './AppHeader';
import { DisclaimerBanner } from './DisclaimerBanner';
import { ModeBanner } from './ModeBanner';
import { StepNavigator } from './StepNavigator';
import { GlobalActions } from './GlobalActions';
import { AppFooter } from './AppFooter';

export const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#84cc16] selection:text-white">
      <DisclaimerBanner />
      <ModeBanner />
      <AppHeader />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar (Navigator + Global Actions) */}
        <aside className="hidden md:flex flex-col border-r border-gray-100 bg-gray-50 w-64 shrink-0">
          <StepNavigator />
          <div className="p-4 bg-gray-50">
            <GlobalActions />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 relative">
          {children}
        </main>
      </div>
      
      <AppFooter />
    </div>
  );
};