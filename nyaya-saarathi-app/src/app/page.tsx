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
        <main className="flex-1">
          <Hero />
          <Features />
          <Pathways />
          <CTA />
        </main>

      </div>
    </div>
  );
}
