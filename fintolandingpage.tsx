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
  Menu
} from 'lucide-react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-full px-6 py-3 text-sm";
  const variants = {
    primary: "bg-[#84cc16] hover:bg-[#65a30d] text-white",
    secondary: "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200",
    dark: "bg-[#14532d] hover:bg-[#0f3f24] text-white",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className = '' }) => (
  <section className={`relative py-16 md:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {children}
    </div>
  </section>
);

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="font-bold text-xl tracking-tight">Finto</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-900">Features</a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Solutions</a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Customers</a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Resources</a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Pricing</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="px-4 py-2">Sign In</Button>
            <Button className="px-5 py-2">Open an Account</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <Section className="overflow-hidden bg-gray-50/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f4fce3] text-[#4d7c0f] font-medium text-sm mb-6 border border-[#d9f99d]">
            <Wallet className="w-4 h-4" />
            <span>Payments</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
            Global Payment to Grow Your Businesses
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Running Finto is where your business meets. Whether you're a startup or scaling enterprise software, we've got your back. It's free to start, no fees, no contract, no risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="h-14 px-8 text-base shadow-lg shadow-[#84cc16]/20">Open an Account</Button>
            <Button variant="secondary" className="h-14 px-8 text-base">Contact Sales</Button>
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
                <Wallet className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Miroxa Corp</h3>
                <p className="text-sm text-gray-500">miroxa.business.com</p>
              </div>
            </div>

            {/* Balance */}
            <div className="mb-8">
              <p className="text-sm font-medium text-gray-500 mb-1">Balance</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">$24,500.00</h2>
              <p className="text-sm text-[#65a30d] flex items-center gap-1 font-medium">
                <TrendingUp className="w-4 h-4" />
                +2.4% from last month
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl border border-gray-100 hover:border-[#84cc16] hover:bg-[#f7fee7] transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#84cc16]/10 flex items-center justify-center mb-3">
                  <ArrowRight className="w-4 h-4 text-gray-900 group-hover:text-[#4d7c0f]" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Send Money</h4>
                <p className="text-xs text-gray-500">To bank account</p>
              </div>
              <div className="p-4 rounded-2xl border border-gray-100 hover:border-[#84cc16] hover:bg-[#f7fee7] transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#84cc16]/10 flex items-center justify-center mb-3">
                  <QrCode className="w-4 h-4 text-gray-900 group-hover:text-[#4d7c0f]" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Scan to Pay</h4>
                <p className="text-xs text-gray-500">With QR code</p>
              </div>
            </div>

            <Button className="w-full h-12 shadow-md shadow-[#84cc16]/20">Pay Now</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

const LogoCloud = () => {
  return (
    <div className="border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <p className="text-sm font-semibold text-gray-500 md:max-w-[150px]">Trusted by thousand companies around the world</p>
          <div className="flex items-center gap-12 flex-wrap justify-center">
            {/* Using text representations as placeholders for actual logos */}
            <div className="flex items-center gap-2 font-bold text-xl"><Mail className="w-6 h-6"/> Mailchimp</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Layout className="w-6 h-6"/> Airtable</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Box className="w-6 h-6"/> GUMROAD</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Settings className="w-6 h-6"/> Notion</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Box = ({className}) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;

const CheckoutFeatures = () => {
  return (
    <Section className="bg-white border-b border-gray-100">
      <div className="mb-16">
        <p className="text-sm font-semibold text-[#65a30d] tracking-wide uppercase mb-3">Online Payments</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-2xl">
          Optimize Your Checkout Experience
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          Optimize checkout suite features for seamless customer experiences, increase revenue, and build trust while strengthening local trends with local payment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: Prebuilt Payments (Spans 2 cols) */}
        <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Prebuilt Payments</h3>
          <p className="text-gray-500 mb-8 max-w-md">Build multidevice checkout without writing code from scratch. Quickly integrates and scales as your business grows.</p>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-md mt-auto">
             <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                  <input type="text" value="steve.rogers@mail.com" readOnly className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Payment Method</label>
                  <div className="flex gap-2">
                     <div className="flex-1 border border-[#84cc16] bg-[#f7fee7] rounded-lg p-3 flex items-center justify-center gap-2 cursor-pointer">
                        <div className="w-4 h-4 rounded-full border border-gray-400 bg-white shadow-sm flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-gray-900"></div></div>
                        <span className="text-xs font-semibold">Card</span>
                     </div>
                     <div className="flex-1 border border-gray-200 bg-white rounded-lg p-3 flex items-center justify-center gap-2 cursor-pointer opacity-50">
                        <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                        <span className="text-xs font-semibold">PayPal</span>
                     </div>
                     <div className="w-12 border border-gray-200 bg-white rounded-lg flex items-center justify-center opacity-50">
                        <ArrowRight className="w-4 h-4" />
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Card 2: Payment Links */}
        <div className="bg-[#14532d] rounded-3xl p-8 border border-gray-100 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="bg-white rounded-2xl p-4 shadow-xl mb-8 w-4/5 ml-auto transform rotate-6 border border-white/20">
             <div className="aspect-square bg-gray-100 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden">
                <QrCode className="w-16 h-16 text-[#14532d]" />
                {/* Scanner line effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#84cc16] shadow-[0_0_8px_2px_#84cc16] animate-[scan_2s_ease-in-out_infinite]"></div>
             </div>
             <p className="text-[10px] text-center font-medium text-gray-500">Scan to pay $49.00</p>
          </div>

          <div className="mt-auto relative z-10">
             <h3 className="text-xl font-bold mb-2">Payment Links</h3>
             <p className="text-green-100/80 text-sm">Create and share links. Start receiving payments immediately with zero dev work.</p>
          </div>
        </div>

        {/* Card 3: UI Components */}
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
           <div className="flex items-center gap-4 mb-6 relative">
              <div className="w-1/2 p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
                 <div className="h-2 w-1/3 bg-gray-200 rounded-full"></div>
                 <div className="h-8 w-full bg-gray-100 rounded-lg"></div>
              </div>
              <div className="w-1/2 p-4 bg-[#14532d] rounded-xl shadow-sm flex flex-col gap-2 transform rotate-3 relative z-10">
                 <Smartphone className="w-6 h-6 text-white mb-1" />
                 <div className="h-2 w-2/3 bg-green-800 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#84cc16] rounded-full border-4 border-gray-50 flex items-center justify-center z-20">
                 <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">UI Components</h3>
           <p className="text-gray-500 text-sm">Build your UI directly. Pre-built UI elements that make customization a breeze.</p>
        </div>

        {/* Card 4: One-Click Checkout (Spans 2 cols) */}
        <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
           <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">One Click Checkout</h3>
              <p className="text-gray-500 text-sm">Empower users to checkout faster, maximizing conversions and driving repeat business. Fast authentication.</p>
           </div>
           
           <div className="flex-1 w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"><Wallet className="w-5 h-5 text-gray-600"/></div>
                    <div>
                       <p className="text-sm font-semibold">**** **** **** 4242</p>
                       <p className="text-xs text-gray-400">Expires 12/24</p>
                    </div>
                 </div>
                 <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">Verified</div>
              </div>
              <Button className="w-full h-10 text-sm shadow-sm">Pay $120.00</Button>
           </div>
        </div>
      </div>
      
      {/* CSS Animation for scanner */}
      <style>{`
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
      `}</style>
    </Section>
  );
};

const MarketFeatures = () => {
  return (
    <Section className="bg-white border-b border-gray-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <p className="text-sm font-semibold text-[#65a30d] tracking-wide uppercase mb-3">Global Payments</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Expand New Market Faster and Easier
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Reduce the complexity and cost of multitenancy management and facilitate cross-border payment records business in 100+ countries across 100+ currencies.
          </p>
          <Button variant="secondary" className="gap-2">Learn More <ArrowRight className="w-4 h-4" /></Button>
        </div>
        
        {/* Abstract Globe Illustration */}
        <div className="relative aspect-square max-w-md mx-auto w-full">
           <div className="absolute inset-0 bg-gray-50 rounded-full border border-gray-200"></div>
           {/* Latitude/Longitude lines simulated */}
           <div className="absolute inset-4 rounded-full border border-gray-200 border-dashed"></div>
           <div className="absolute inset-10 rounded-full border border-gray-200"></div>
           
           {/* Floating Flags (Circles) */}
           <div className="absolute top-[10%] left-[20%] w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center transform -rotate-12">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-100 flex">
                 <div className="w-1/3 bg-blue-600 h-full"></div>
                 <div className="w-1/3 bg-white h-full"></div>
                 <div className="w-1/3 bg-red-600 h-full"></div>
              </div>
           </div>
           <div className="absolute top-[5%] right-[30%] w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center transform rotate-12 z-10">
              <div className="w-10 h-10 rounded-full overflow-hidden flex flex-col">
                 <div className="h-1/3 bg-orange-500 w-full"></div>
                 <div className="h-1/3 bg-white w-full"></div>
                 <div className="h-1/3 bg-green-500 w-full"></div>
              </div>
           </div>
           <div className="absolute top-[25%] right-[10%] w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-red-100 flex flex-col">
                 <div className="h-1/3 bg-black w-full"></div>
                 <div className="h-1/3 bg-red-600 w-full"></div>
                 <div className="h-1/3 bg-yellow-400 w-full"></div>
              </div>
           </div>
           <div className="absolute bottom-[20%] left-[10%] w-16 h-16 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-10 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-12 h-12 rounded-full overflow-hidden flex relative bg-blue-700">
                <div className="absolute top-0 left-0 w-full h-2 bg-red-600 transform rotate-45 origin-center mt-5"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-red-600 transform -rotate-45 origin-center mt-5"></div>
              </div>
           </div>
           
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#14532d] rounded-full shadow-xl flex items-center justify-center">
              <Globe2 className="w-10 h-10 text-white" />
           </div>
        </div>
      </div>

      {/* 3 Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#84cc16] transition-colors group">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Globe2 className="w-6 h-6 text-gray-700 group-hover:text-[#65a30d]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">100+ Payment Method</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Scale your product globally with local payments via Finto in seconds.</p>
         </div>
         
         <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#84cc16] transition-colors group">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Zap className="w-6 h-6 text-gray-700 group-hover:text-[#65a30d]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Convert Automatically</h4>
            <p className="text-sm text-gray-500 leading-relaxed">We automatically handle recurring payments with the best fx rates.</p>
         </div>
         
         <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#84cc16] transition-colors group">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <ShieldCheck className="w-6 h-6 text-gray-700 group-hover:text-[#65a30d]" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Manage Funds</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Scale your product globally with local payments via Finto in seconds.</p>
         </div>
      </div>
    </Section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "When I signed up with Finto in 2021 it was a no-brainer. It's been one of the best decisions I've made to ensure my finances are on point.",
      author: "Alex Hormozi",
      role: "CEO at Acquisition.com",
      avatar: "bg-blue-100 text-blue-700"
    },
    {
      id: 2,
      text: "When working with vendors it was a no-brainer. It's been one of the best decisions I've made to ensure my finances are on point.",
      author: "Jane Seymour",
      role: "Accounting at Meta",
      avatar: "bg-green-100 text-green-700",
      featured: true
    },
    {
      id: 3,
      text: "When I signed up with Finto in 2022 it was a game-changer. It's been one of the best decisions I've made to ensure my finances are on point.",
      author: "Sarah Jenks",
      role: "Accounting at Stripe",
      avatar: "bg-purple-100 text-purple-700"
    },
    {
      id: 4,
      text: "Since we started using Finto, our checkout conversion rates have skyrocketed. The UI components are incredibly easy to integrate.",
      author: "David Chen",
      role: "CTO at StartupX",
      avatar: "bg-orange-100 text-orange-700"
    },
    {
      id: 5,
      text: "I haven't figured out why I waited so long. It's been one of the best decisions I've made to ensure my finances are on point.",
      author: "Lisa Berguiz",
      role: "Accounting at Webflow",
      avatar: "bg-pink-100 text-pink-700"
    },
    {
      id: 6,
      text: "Where signing up with Finto is a no-brainer. It's been one of the best decisions I've made to ensure my finances are on point.",
      author: "Mike Teryonja",
      role: "Accounting at Mailchimp",
      avatar: "bg-teal-100 text-teal-700"
    }
  ];

  return (
    <Section className="bg-white">
      <div className="mb-12">
        <p className="text-sm font-semibold text-[#65a30d] tracking-wide uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Customer Says
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className={`p-8 rounded-3xl border transition-all duration-300 ${
              review.featured 
                ? 'bg-[#f4fce3] border-[#d9f99d] shadow-lg shadow-[#84cc16]/10 transform md:-translate-y-2' 
                : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-md'
            }`}
          >
            <div className="flex gap-1 mb-6 text-[#84cc16]">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
            </div>
            <p className={`text-base leading-relaxed mb-8 ${review.featured ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
              "{review.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${review.avatar}`}>
                {review.author.charAt(0)}
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-sm">{review.author}</h5>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const CTA = () => {
  return (
    <Section className="bg-white pt-0">
      <div className="bg-[#14532d] rounded-[3rem] px-8 py-20 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#84cc16] rounded-full blur-[100px] opacity-20"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Simplifying Payments for<br />Growing Business
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            Join over 100+ partners and customers already growing with Finto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-14 px-8 text-base shadow-lg shadow-black/20">Open an Account</Button>
            <Button variant="secondary" className="h-14 px-8 text-base border-none">Contact Sales</Button>
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 cursor-pointer mb-6">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">Finto</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Global payment to grow your businesses smoothly without boundaries.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Features</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Payment Link</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Recurring Billing</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Invoicing</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Checkout</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Integrations</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">eCommerce</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Finance Automation</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Crypto</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Global Business</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Marketplaces</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Community</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">About</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Company</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#84cc16] transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2023 Finto. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#84cc16] hover:text-white transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#84cc16] hover:text-white transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#84cc16] hover:text-white transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
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
        <Navbar />
        <main className="flex-1">
          <Hero />
          <LogoCloud />
          <CheckoutFeatures />
          <MarketFeatures />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}