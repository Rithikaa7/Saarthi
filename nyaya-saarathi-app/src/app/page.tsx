/* eslint-disable */
import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Layout, 
  Link as LinkIcon, 
  Lock, 
  Mail, 
  MessageSquare, 
  PieChart, 
  QrCode, 
  Settings, 
  ShieldCheck, 
  Smartphone, 
  Star, 
  TrendingUp, 
  Wallet, 
  Zap,
  Menu,
  FileText,
  Scale,
  Search,
  Map as MapIcon,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import Link from 'next/link';

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-full px-6 py-3 text-sm";
  const variants = {
    primary: "bg-[#14532d] hover:bg-[#0f3f24] text-white", // Changed primary to dark green
    secondary: "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200",
    lightGreen: "bg-[#84cc16] hover:bg-[#65a30d] text-white",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className = '' }: any) => (
  <section className={`relative py-16 md:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {children}
    </div>
  </section>
);


const Hero = () => {
  return (
    <Section className="overflow-hidden bg-gray-50/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f4fce3] text-[#4d7c0f] font-medium text-sm mb-6 border border-[#d9f99d]">
            <Scale className="w-4 h-4" />
            <span>AI-Powered Preparation</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
            Find the Missing Pieces. Organize the Evidence.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Nyaya Saarathi helps you get organized before you approach a legal-aid service or authority. Tell your story, share your papers, and get a clear, review-ready preparation package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/intake">
              <Button className="h-14 px-8 text-base shadow-lg shadow-[#14532d]/20 w-full sm:w-auto">Start Preparation</Button>
            </Link>
            <Button variant="secondary" className="h-14 px-8 text-base w-full sm:w-auto">Learn More</Button>
          </div>
        </div>

        {/* Hero Mockup */}
        <div className="relative">
          {/* Decorative background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#84cc16]/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 relative max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#14532d] rounded-xl flex items-center justify-center">
                <FileCheck className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Case Readiness</h3>
                <p className="text-sm text-gray-500">Unpaid Wages Pathway</p>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="mb-6 space-y-3">
               <div className="flex justify-between items-center p-3 bg-green-50 border border-green-100 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600 w-5 h-5" />
                    <span className="text-sm font-medium">Who you worked for</span>
                  </div>
                  <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">Found</span>
               </div>
               <div className="flex justify-between items-center p-3 bg-amber-50 border border-amber-100 rounded-xl">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="text-amber-500 w-5 h-5" />
                    <span className="text-sm font-medium">When the work started</span>
                  </div>
                  <span className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded-full">Clarify</span>
               </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl border border-gray-100 hover:border-[#84cc16] hover:bg-[#f7fee7] transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#84cc16]/10 flex items-center justify-center mb-3">
                  <MapIcon className="w-4 h-4 text-gray-900 group-hover:text-[#4d7c0f]" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Evidence Map</h4>
                <p className="text-xs text-gray-500">View connections</p>
              </div>
              <div className="p-4 rounded-2xl border border-gray-100 hover:border-[#84cc16] hover:bg-[#f7fee7] transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#84cc16]/10 flex items-center justify-center mb-3">
                  <ArrowRight className="w-4 h-4 text-gray-900 group-hover:text-[#4d7c0f]" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Answer Questions</h4>
                <p className="text-xs text-gray-500">Resolve conflicts</p>
              </div>
            </div>

            <Button className="w-full h-12 shadow-md shadow-[#14532d]/20">Review Export Package</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Features = () => {
  return (
    <Section className="bg-white border-b border-gray-100" id="features">
      <div className="mb-16">
        <p className="text-sm font-semibold text-[#65a30d] tracking-wide uppercase mb-3">Core Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-2xl">
          From a Pile of Confusing Papers to a Clear Package
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          We bridge the gap between messy real-world documents and the structured requirements of legal aid portals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: Document Reader */}
        <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Document Extraction</h3>
          <p className="text-gray-500 mb-8 max-w-md">Our system reads your uploaded documents, finds key dates, amounts, and names, and crucially, remembers exactly where each fact came from.</p>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-md mt-auto">
             <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                     <span className="font-medium text-gray-700">Employment Letter.pdf</span>
                     <span className="text-gray-400">Page 1</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 font-mono">
                     "Your date of joining will be <span className="bg-[#f4fce3] text-[#4d7c0f] font-bold px-1 rounded">1 February 2026</span>. You will receive a monthly salary of Rs. 15,000..."
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Card 2: Interactive Evidence Map */}
        <div className="bg-[#14532d] rounded-3xl p-8 border border-gray-100 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="bg-white rounded-2xl p-4 shadow-xl mb-8 w-4/5 ml-auto transform rotate-6 border border-white/20">
             <div className="aspect-video bg-gray-100 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden p-2">
                <div className="w-full h-full border-2 border-dashed border-[#84cc16]/50 rounded-lg flex items-center justify-center">
                   <div className="flex gap-4 items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs">U</div>
                      <div className="h-0.5 w-8 bg-gray-300"></div>
                      <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-amber-700 text-xs border border-amber-300">!</div>
                   </div>
                </div>
             </div>
             <p className="text-[10px] text-center font-medium text-gray-500">Visualizing Connections</p>
          </div>

          <div className="mt-auto relative z-10">
             <h3 className="text-xl font-bold mb-2">Evidence Map</h3>
             <p className="text-green-100/80 text-sm">See how your story and documents connect. Instantly spot inconsistencies before they become problems.</p>
          </div>
        </div>

        {/* Card 3: Neutral Clarifications */}
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
           <div className="flex items-center gap-4 mb-6 relative">
              <div className="w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
                 <div className="text-sm font-medium text-gray-800">We found two different dates for when you started:</div>
                 <div className="flex justify-between text-xs mt-2">
                    <span className="bg-gray-100 px-2 py-1 rounded">January (You)</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">1 Feb (Letter)</span>
                 </div>
              </div>
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">Neutral Clarifications</h3>
           <p className="text-gray-500 text-sm">When things don't add up, the system asks simple, non-judgmental questions to help you clarify.</p>
        </div>

        {/* Card 4: Readiness Dashboard (Spans 2 cols) */}
        <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
           <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Readiness Dashboard</h3>
              <p className="text-gray-500 text-sm">Check your gathered information against officially-sourced requirements. Know exactly what you're missing before you seek official help.</p>
           </div>
           
           <div className="flex-1 w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-green-600"/></div>
                    <div>
                       <p className="text-sm font-semibold">Requirement 3: Salary</p>
                       <p className="text-xs text-gray-400">Supported by 2 documents</p>
                    </div>
                 </div>
              </div>
              <Button className="w-full h-10 text-sm shadow-sm" variant="secondary">View Export Package</Button>
           </div>
        </div>
      </div>
    </Section>
  );
};

const Pathways = () => {
  return (
    <Section className="bg-white border-b border-gray-100 overflow-hidden" id="pathways">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <p className="text-sm font-semibold text-[#65a30d] tracking-wide uppercase mb-3">Supported Pathways</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tailored Preparation for Specific Legal Issues
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every case type has different requirements. Our system uses verified "Pathway Packs" derived from official sources to ensure you gather the right information.
          </p>
          <Button variant="secondary" className="gap-2">View All Pathways <ArrowRight className="w-4 h-4" /></Button>
        </div>
        
        {/* Placeholder Graphic for Pathways */}
        <div className="relative aspect-square max-w-md mx-auto w-full flex items-center justify-center">
           <div className="absolute inset-0 bg-gray-50 rounded-full border border-gray-200"></div>
           <div className="absolute inset-8 rounded-full border border-gray-200 border-dashed"></div>
           
           {/* Center */}
           <div className="w-24 h-24 bg-[#14532d] rounded-full shadow-xl flex items-center justify-center z-20">
              <FileText className="w-10 h-10 text-white" />
           </div>

           {/* Orbiting Elements */}
           <div className="absolute top-[15%] left-[20%] p-3 bg-white rounded-xl shadow-lg border border-gray-100 font-medium text-sm text-gray-800">
             Unpaid Wages
           </div>
           <div className="absolute bottom-[20%] right-[10%] p-3 bg-white rounded-xl shadow-lg border border-gray-100 font-medium text-sm text-gray-800">
             Victim Compensation
           </div>
           <div className="absolute top-[30%] right-[10%] p-3 bg-white rounded-xl shadow-lg border border-gray-100 font-medium text-sm text-gray-800 opacity-50">
             Workplace Injury (Soon)
           </div>
        </div>
      </div>
    </Section>
  );
};

const CTA = () => {
  return (
    <Section className="bg-white pt-0">
      <div className="bg-[#14532d] rounded-[3rem] px-8 py-20 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#84cc16] rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#84cc16] rounded-full blur-[100px] opacity-20"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Organize Your Case?
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            Start building your evidence map and preparation package today. Fully private, and you are always in control of your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/intake">
              <Button variant="lightGreen" className="h-14 px-8 text-base shadow-lg shadow-black/20">Start Preparation</Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 cursor-pointer mb-6">
              <div className="w-8 h-8 bg-[#14532d] rounded-lg flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#14532d]">Nyaya Saarathi</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              AI-powered evidence mapping and legal-aid preparation assistant.
            </p>
            <p className="text-xs text-gray-400 font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">
              Disclaimer: This system is for preparation only and does not provide legal advice, establish eligibility, or file claims.
            </p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">How it Works</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Pathways</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Human Help</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2026 Nyaya Saarathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-[#84cc16] selection:text-white">
      {/* Background Subtle Vertical Grid pattern representing the structural lines in the design */}
      <div className="fixed inset-0 pointer-events-none flex justify-center z-0 opacity-[0.03]">
        <div className="w-full max-w-7xl px-4 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 h-full">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className="border-l border-black h-full"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="relative bg-surface w-full min-h-screen">
<div className="flex flex-col w-full">
{/* Top Sovereign Institutional Banner */}
<section className="w-full bg-surface-container-high text-on-surface py-space-xs px-space-md mb-space-md rounded-lg shadow-sm flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
<span className="font-code-legal text-code-legal text-on-surface uppercase tracking-wider">Statutory Pre-Litigation Assembly Protocol</span>
<span className="hidden md:inline text-on-surface-variant font-code-legal text-code-legal">• Act No. 39 of 1987 Compliant Architecture</span>
</div>
<div className="flex items-center gap-space-md font-code-legal text-code-legal text-on-surface-variant">
<span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> DETERMINISTIC PARSER v4.2</span>
<span className="hidden sm:inline">ZERO TELEMETRY</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-semibold">DELHI DLSA GATEWAY</span>
</div>
</section>
{/* Hero Section: Balanced Two-Column High-Credibility Layout */}
<section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start mb-space-xl">
{/* Left Column: Editorial Value Proposition */}
<div className="lg:col-span-6 flex flex-col justify-center space-y-space-md pt-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-low text-secondary rounded-full w-fit">
<span className="material-symbols-outlined text-[16px]">assured_workload</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">LEGAL PREPARATION, MADE CLEARER</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight leading-tight">
        Understand your case. Organise your evidence. Prepare with confidence.
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        Nyaya Saarathi structures complex legal disputes and scattered paperwork into an audit-traceable evidence ledger before you approach legal-aid advocates or labour forums. Completely deterministic, rule-based, and zero generative AI.
      </p>
{/* Action Cluster */}
<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all" data-path="start-intake-stepper" href="#">
<span className="material-symbols-outlined text-[20px]">assignment_add</span>
<span>Start Preparing (Case Intake)</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg shadow-sm transition-all" href="#how-it-works">
<span className="material-symbols-outlined text-[20px]">account_tree</span>
<span>Explore How It Works</span>
</a>
</div>
{/* Trust Stamp & Sovereignty Metric */}
<div className="pt-space-sm">
<div className="p-space-sm bg-surface-container-lowest rounded-lg shadow-sm flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">lock_clock</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Statutory Privacy &amp; Verification Guarantee</span>
<p className="font-caption text-caption text-on-surface-variant leading-normal">
              Zero cloud data retention. Pure client-side parsing. Verified against Legal Services Authorities Act, 1987. No probabilistic hallucination or third-party LLM training APIs.
            </p>
</div>
</div>
</div>
{/* Editorial Quote / Legal Assistance Notice */}
<div className="flex items-center gap-space-md text-on-surface-variant pt-space-xs">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-code-legal text-code-legal font-bold">DL</div>
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-code-legal text-code-legal font-bold">LA</div>
<div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed flex items-center justify-center font-code-legal text-code-legal font-bold">LC</div>
</div>
<span className="font-caption text-caption">Direct procedural export format recognized by DLSA Front Offices &amp; LADCS Advocates</span>
</div>
</div>
{/* Right Column: Realistic Product-Interface Preview (Live Workbench Card) */}
<div className="lg:col-span-6 w-full">
<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md relative overflow-hidden">
{/* Visual Accents */}
<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md px-space-md pt-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">folder_special</span>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Unpaid Wages Claim</span>
<span className="font-code-legal text-code-legal text-on-surface-variant">DLSA-2026-0842-DEL • Central District, Tis Hazari</span>
</div>
</div>
<span className="px-space-xs py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold uppercase tracking-wide">Ready For Review</span>
</div>
{/* Progress Indicator Bar */}
<div className="space-y-space-xs mb-space-md">
<div className="flex justify-between items-baseline">
<span className="font-label-md text-label-md text-on-surface font-semibold">Statutory Readiness Index</span>
<span className="font-code-legal text-code-legal font-bold text-secondary">75% Complete (4/5 Verified Nodes)</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
<div className="bg-secondary h-full rounded-full transition-all duration-700" ></div>
</div>
<div className="flex justify-between font-caption text-caption text-on-surface-variant">
<span>Payment of Wages Act, 1936 §15(2)</span>
<span>Limitation Status: Within Period (42 days left)</span>
</div>
</div>
{/* Evidence Summary Matrix */}
<div className="mb-space-md">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Docket Evidence Ledger (3 Items Extracted)</span>
<span className="font-code-legal text-code-legal text-secondary">PyMuPDF Text Extract</span>
</div>
<div className="space-y-space-xs">
{/* Row 1: Contract */}
<div className="p-space-xs bg-surface-container rounded-lg flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-primary text-[18px]">description</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-medium truncate">Employment_Agreement_2025.pdf</span>
<span className="font-caption text-caption text-on-surface-variant">Page 2, Cl. 4: Monthly Stated Remuneration ₹28,500</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm whitespace-nowrap">Found &amp; Parsed</span>
</div>
{/* Row 2: WhatsApp Chat Transcript */}
<div className="p-space-xs bg-surface-container rounded-lg flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-primary text-[18px]">chat</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-medium truncate">Supervisor_Notice_Transcript.txt</span>
<span className="font-caption text-caption text-on-surface-variant">Line 42: Admission of withheld transfer for Jan/Feb</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-on-tertiary-fixed-variant font-label-sm text-label-sm whitespace-nowrap">Needs Clarification</span>
</div>
{/* Row 3: Bank Passbook Statement */}
<div className="p-space-xs bg-surface-container rounded-lg flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-primary text-[18px]">account_balance</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-medium truncate">SBI_Statement_Nov2025_Feb2026.pdf</span>
<span className="font-caption text-caption text-on-surface-variant">Folio 3881: Zero NEFT credits post-15 Dec 2025</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm whitespace-nowrap">Found &amp; Parsed</span>
</div>
</div>
</div>
{/* Needs Attention / Discrepancy Alert Panel */}
<div className="p-space-sm bg-surface-container-high rounded-lg mb-space-sm shadow-sm">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-error text-[20px] mt-0.5">priority_high</span>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Chronology Discrepancy Detected</span>
<span className="font-code-legal text-code-legal text-error font-medium">Rule #D-802</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                Written employment agreement indicates start date as <span className="font-semibold text-on-surface">1 February 2026</span>, while your typed narrative states work commenced in <span className="font-semibold text-on-surface">January 2026</span>.
              </p>
<div className="flex items-center gap-space-xs mt-2">
<button className="px-space-xs py-1 rounded bg-surface-container-lowest text-primary text-label-sm font-label-sm hover:bg-surface-container shadow-sm">
                  Add Explanatory Addendum
                </button>
<button className="px-space-xs py-1 rounded bg-surface-container text-on-surface-variant text-label-sm font-label-sm hover:text-on-surface">
                  Flag as Probative Issue
                </button>
</div>
</div>
</div>
</div>
{/* Bottom Audit Substrate Bar */}
<div className="flex items-center justify-between pt-space-xs text-on-surface-variant font-code-legal text-code-legal">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">format_image_left</span>
            IMMUTABLE LOCAL RECORD
          </span>
<span>SHA-256: 7e2d...41a9</span>
<span className="text-secondary font-semibold cursor-pointer hover:underline">Inspect Node Tree</span>
</div>
</div>
</div>
</section>
{/* Photo Anchor Banner: Physical Courtroom & Documentation Context */}
<section className="w-full mb-space-xl">
<div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
<div className="bg-cover bg-center w-full h-full" data-alt="Dignified high-ceiling legal library and judicial archive room with warm wooden tables, neatly stacked paper legal dockets, leather bound statutory law reports, brass balance scales, and diffuse sunlight streaming through tall colonial courthouse windows in Delhi." style={{ backgroundImage: "url('" + "https://lh3.googleusercontent.com/aida-public/AB6AXuDh8DuHQHPIRdtCTYyx0_h-3cQd3WtcElczR33b9L59ll5PTv0Q44MTCRJ1xa9TIWCfU1nJG_owRmB5iD28BgHWcoNyqh3K45Els8EqOOaLCf1XopRP5koYAh0Eq338z7_0_rDZBnoPNLmZtEbCw-JVRqMTT1oX188OoBCLqFEMoEr29hP9fkXa7VPoU10F6A0bU0cbeZA4C9IuPfBpaMEyIDYpJluHm8l9ZQQ6J_txDHgnovLIxIWLwQ" + "')" }}>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-transparent flex flex-col justify-center px-space-xl max-w-2xl text-on-primary">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container font-semibold mb-space-xs">The Procedural Reality</span>
<h2 className="font-headline-lg text-headline-lg font-bold leading-tight mb-space-xs">
          Courts run on documentary coherence, not conversational ambiguity.
        </h2>
<p className="font-body-md text-body-md text-surface-variant">
          When an under-represented citizen meets an empaneled legal-aid advocate, the first twenty minutes determine whether an application survives maintainability checks. Nyaya Saarathi ensures your file is ready from minute one.
        </p>
</div>
</div>
</section>
{/* Section 2: The Challenge in Access to Justice */}
<section className="w-full mb-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-md">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Institutional Bottlenecks</span>
<h2 className="font-headline-lg text-headline-lg text-primary font-bold">The Challenge in Access to Justice</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mt-2 md:mt-0">
        Over 70% of pre-litigation delay in Lok Adalats and District Legal Services Authorities arises from disorganized evidentiary paperwork and self-contradicting dates.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/* Card 1 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[26px]">chat_error</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">Scattered Papers &amp; Chat Logs</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Essential admissions are routinely trapped across screenshots, fragmented physical receipts, cash slips, and informal WhatsApp threads without verifiable context or chronological continuity.
          </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-sm rounded-b-xl flex items-center gap-space-xs text-on-surface-variant font-code-legal text-code-legal">
<span className="material-symbols-outlined text-[16px] text-error">warning</span>
<span>Risk: Inadmissibility under Sec. 65B</span>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
<span className="material-symbols-outlined text-[26px]">menu_book</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">Complex Statutory Terminology</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Citizens struggle to distinguish between summary dispute claims, maintainability periods, limitation bars, and statutory grounds under distinct enactments such as the Industrial Disputes Act or Payment of Wages Act.
          </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-sm rounded-b-xl flex items-center gap-space-xs text-on-surface-variant font-code-legal text-code-legal">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">info</span>
<span>Risk: Forum non conveniens dismissal</span>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-tertiary-container mb-space-md">
<span className="material-symbols-outlined text-[26px]">rule_folder</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">Unidentified Inconsistencies</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Discrepancies between oral recollection and handwritten receipts often remain unflagged until formal opposing counsel cross-examination, fatal to meritorious legal claims.
          </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-sm rounded-b-xl flex items-center gap-space-xs text-on-surface-variant font-code-legal text-code-legal">
<span className="material-symbols-outlined text-[16px] text-error">cancel</span>
<span>Risk: Credibility breakdown at first hearing</span>
</div>
</div>
</div>
</section>
{/* Section 3: How Nyaya Saarathi Works — 4-Step Deterministic Process */}
<section className="w-full mb-space-xl bg-surface-container-low rounded-xl p-space-xl shadow-sm" id="how-it-works">
<div className="max-w-3xl mb-space-xl">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Procedural Mechanics</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-1">How Nyaya Saarathi Works</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
        A completely predictable 4-step pipeline that builds verified legal dossiers through rule-based logic and explicit provenance tags.
      </p>
</div>
{/* Step Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
{/* Step 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="w-8 h-8 rounded-full bg-primary text-on-primary font-code-legal text-code-legal font-bold flex items-center justify-center">01</span>
<span className="font-code-legal text-code-legal text-on-surface-variant">INTAKE PHASE</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">Describe Issue in Plain Language</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Record what happened in conversational terms. The system isolates date mentions, entity names, monetary values, and grievance categories with origin lineage tags.
          </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container -mx-space-md -mb-space-md px-space-md pb-space-sm rounded-b-xl">
<span className="font-caption text-caption text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">sell</span> Entity Anchor Mapping
          </span>
</div>
</div>
{/* Step 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="w-8 h-8 rounded-full bg-secondary text-on-secondary font-code-legal text-code-legal font-bold flex items-center justify-center">02</span>
<span className="font-code-legal text-code-legal text-on-surface-variant">OCR VERIFICATION</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">Upload Docs &amp; Verbatim Parse</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Upload PDFs, passbooks, termination memos, or messages. PyMuPDF extracts raw strings verbatim with exact page, paragraph, and line bounding coordinates.
          </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container -mx-space-md -mb-space-md px-space-md pb-space-sm rounded-b-xl">
<span className="font-caption text-caption text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">data_object</span> Zero Probabilistic Editing
          </span>
</div>
</div>
{/* Step 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-code-legal text-code-legal font-bold flex items-center justify-center">03</span>
<span className="font-code-legal text-code-legal text-on-surface-variant">CROSS-RULE AUDIT</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">Interactive Evidence Map &amp; Conflict Check</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Cross-compares dates, claimed wage sums, and company designations. Instantly flags internal timing conflicts and statutory limitation expirations.
          </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container -mx-space-md -mb-space-md px-space-md pb-space-sm rounded-b-xl">
<span className="font-caption text-caption text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">flaky</span> Deterministic Rule Engine
          </span>
</div>
</div>
{/* Step 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="w-8 h-8 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-code-legal text-code-legal font-bold flex items-center justify-center">04</span>
<span className="font-code-legal text-code-legal text-on-surface-variant">FILING DOSSIER</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">Export Admissible Dossier &amp; DLSA Route</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Generate an index-paginated court-ready filing bundle with cryptographic checksum hash and direct statutory referral letter for LADCS advocates.
          </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container -mx-space-md -mb-space-md px-space-md pb-space-sm rounded-b-xl">
<span className="font-caption text-caption text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">picture_as_pdf</span> 100% Admissible Layout
          </span>
</div>
</div>
</div>
</section>
{/* Interactive Evidentiary Verification Mockup Banner */}
<section className="w-full mb-space-xl bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
<div className="flex flex-col lg:flex-row items-center gap-space-xl">
<div className="w-full lg:w-5/12 space-y-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Under The Hood</span>
<h3 className="font-headline-lg text-headline-lg text-primary font-bold">Verifiable Provenance Architecture</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Every statement in your generated brief contains a direct link back to its physical origin. When an advocate clicks a fact in the synopsis, the exact paragraph in your uploaded bank statement or contract is immediately highlighted.
        </p>
<div className="space-y-space-xs pt-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="font-label-md text-label-md text-on-surface">No Large Language Models writing fake legal precedents</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="font-label-md text-label-md text-on-surface">Exact coordinates (X, Y, Page) pinned in PDF binary</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="font-label-md text-label-md text-on-surface">Offline-capable parsing runs inside your browser sandbox</span>
</div>
</div>
</div>
<div className="w-full lg:w-7/12 bg-surface-container rounded-lg p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-xs mb-space-sm bg-surface-container-high -mx-space-md -mt-space-md px-space-md pt-space-xs rounded-t-lg">
<span className="font-code-legal text-code-legal font-bold text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">terminal</span> PROVENANCE VIEWER // PAIRED EVIDENCE GRAPH
          </span>
<span className="font-code-legal text-code-legal text-on-surface-variant">INSPECTION NODE #84</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
{/* Left: Narrative Item */}
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm space-y-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Narrative Assertion §3.2</span>
<p className="font-body-sm text-body-sm text-on-surface">
              "The employer failed to disburse salary for the period 01-12-2025 to 31-01-2026 despite continued daily gate biometric sign-ins."
            </p>
<div className="pt-2 flex items-center justify-between font-caption text-caption text-secondary font-medium">
<span>Source: User Intake</span>
<span>Ref: Event-109</span>
</div>
</div>
{/* Right: Corroboration File Match */}
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm space-y-1 border-l-4 border-l-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Matched Documentary Extract</span>
<p className="font-code-legal text-code-legal text-on-surface bg-surface-container-low p-1.5 rounded">
              FILE: Biometric_Log_TisHazari.csv<br />
              ROW: 144-188 [CONFIRMED]<br />
              MATCH: "UID-8910: 44 ACTIVE PUNCHES"
            </p>
<div className="pt-2 flex items-center justify-between font-caption text-caption text-on-surface-variant">
<span>Confidence: Exact Regex</span>
<span className="text-secondary font-semibold">Verified</span>
</div>
</div>
</div>
<div className="mt-space-sm p-space-xs bg-surface-container-lowest rounded flex items-center justify-between font-code-legal text-code-legal text-on-surface-variant">
<span>RULE CHECK: Industrial Disputes Act, 1947 Sec. 25-F</span>
<span className="text-secondary font-bold">CONDITION SATISFIED</span>
</div>
</div>
</div>
</section>
{/* Section 4: Trust, Provenance & Transparency Charter */}
<section className="w-full mb-space-xl">
<div className="max-w-3xl mb-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Institutional Safeguards</span>
<h2 className="font-headline-lg text-headline-lg text-primary font-bold">Trust, Provenance &amp; Transparency Charter</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
        Nyaya Saarathi is an administrative preparation instrument designed to assist disadvantaged applicants. We adhere to unequivocal institutional commitments.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Charter Item 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[22px]">link</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">Source Traceability</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Every statement carries verbatim page and paragraph markers. No unsourced factual declarations can enter an exported formal bundle.
        </p>
</div>
{/* Charter Item 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[22px]">calculate</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">Zero Generative AI</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Zero probabilistic hallucination. Rules are auditable, open-source Boolean conditions modeled strictly upon statutory limitations and procedural acts.
        </p>
</div>
{/* Charter Item 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-low text-tertiary-container flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[22px]">vpn_lock</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">Client Data Sovereignty</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Your records, Aadhaar numbers, and bank slips do not leave your local device storage until you deliberately print or export your docket.
        </p>
</div>
{/* Charter Item 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-low text-error flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[22px]">gavel</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">Non-Advocate Disclaimer</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Nyaya Saarathi provides record structuring and procedural clarification, not legal representation. Advocacy remains strictly with certified bar practitioners.
        </p>
</div>
</div>
</section>
{/* Section 5: Final CTA & Help Network */}
<section className="w-full bg-primary-container text-on-primary rounded-xl p-space-xl shadow-lg mb-space-xl relative overflow-hidden">
<div className="relative z-10 max-w-4xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-primary text-secondary-fixed mb-space-sm">
<span className="material-symbols-outlined text-[16px]">folder_zip</span>
<span className="font-code-legal text-code-legal uppercase tracking-wider font-semibold">Immediate Pre-Litigation Assistance</span>
</div>
<h2 className="font-headline-xl text-headline-xl font-bold leading-tight mb-space-sm">
        Ready to structure your records?
      </h2>
<p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed mb-space-lg max-w-2xl">
        Begin organizing your matter step-by-step now. It takes approximately 10 minutes to transform your loose receipts, messages, and recollections into an admissible legal aid brief.
      </p>
<div className="flex flex-wrap items-center gap-space-md">
<a className="inline-flex items-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-semibold shadow-md hover:bg-secondary/90 transition-all" data-path="start-intake-stepper" href="#">
<span className="material-symbols-outlined text-[20px]">play_arrow</span>
<span>Begin Case Intake</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-primary hover:bg-primary/80 text-on-primary font-label-lg text-label-lg transition-all shadow-sm" href="tel:15100">
<span className="material-symbols-outlined text-secondary-fixed text-[20px]">phone_in_talk</span>
<span>Consult Helplines (15100 NALSA)</span>
</a>
</div>
{/* Statutory Footnote */}
<div className="mt-space-lg pt-space-md bg-primary/40 -mx-space-xl -mb-space-xl px-space-xl pb-space-md flex flex-wrap items-center justify-between gap-space-sm text-on-primary-container font-caption text-caption">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px]">balance</span>
<span>Under the aegis of Legal Services Authorities Act, 1987 — Accessible to every eligible citizen of India.</span>
</div>
<div className="flex items-center gap-space-md">
<a className="hover:text-on-primary underline" data-path="legal-aid-help-centre" href="#">Directory of District Legal Aid Clinics</a>
<a className="hover:text-on-primary underline" data-path="document-terminal" href="#">Direct File Inspection</a>
</div>
</div>
</div>
</section>
{/* Interactive script for client-side navigation simulation */}

</div>
</main>

      </div>
    </div>
  );
}
