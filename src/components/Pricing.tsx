import React, { useState } from 'react';
import { Check, Coins, HelpCircle, ArrowRight, Zap, Flame, Shield, Sparkles } from 'lucide-react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedVoucher, setSelectedVoucher] = useState('');
  const [voucherSuccess, setVoucherSuccess] = useState(false);

  const tiers = [
    {
      name: 'Developer Sandbox',
      price: billingPeriod === 'monthly' ? '$0' : '$0',
      description: 'Ideal for prototyping multi-agent pipelines with local mock simulations.',
      features: [
        'Up to 3 active developer templates',
        '25,000 baseline simulation tokens',
        'Topological coordinate shifter controls',
        'Live system-action terminal traces',
        'Standard mock model response engines'
      ],
      cta: 'Current Plan',
      popular: false,
      glow: 'border-slate-800 bg-slate-900/40 hover:bg-slate-900/60'
    },
    {
      name: 'Startup Pro-Cluster',
      price: billingPeriod === 'monthly' ? '$49' : '$39',
      badge: 'Most Popular',
      description: 'For growing saas founders requiring live production Gemini APIs.',
      features: [
        'Unlimited custom workspace pipelines',
        '1,500,000 live API tokens per month',
        'Topological bezier connecting arrows',
        'Unlimited system parameter inputs',
        'Dedicated server-side Gemini Proxy routes',
        'Priority 24/7 technical chat support'
      ],
      cta: 'Upgrade to Pro',
      popular: true,
      glow: 'border-indigo-500/80 bg-[#090e1a] shadow-[0_0_30px_rgba(99,102,241,0.15)]'
    },
    {
      name: 'Enterprise Agentic Node',
      price: 'Custom',
      description: 'Built for high-volume enterprise compliance & analytical desks.',
      features: [
        'Dedicated node cluster deployments',
        'Infinite tokens with custom Cloud billing',
        'Custom Fine-Tuning system rules integrations',
        'Multi-Agent Spanner database triggers',
        'SLA 99.99% compliance guarantees',
        'Dedicated AI Architect consultations'
      ],
      cta: 'Contact Sales team',
      popular: false,
      glow: 'border-slate-800 bg-slate-900/40 hover:bg-slate-900/60'
    }
  ];

  const applyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedVoucher.trim().toUpperCase() === 'FREEPRO') {
      setVoucherSuccess(true);
    } else {
      alert('Voucher not recognized. Try typing: FREEPRO');
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-[#030712] min-h-[calc(100vh-4rem)] py-16">
      
      {/* Background Grid Pattern layout detail mirroring Immersive UI theme */}
      <div 
        className="absolute inset-0 -z-10 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#6366f1 0.6px, transparent 0.6px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Centered header content */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/30 border border-indigo-500/15 text-indigo-400 text-xs">
            <Coins className="h-3.5 w-3.5" />
            <span>Developer promo code offer: Try using "FREEPRO"</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white font-sans sm:text-5xl leading-tight">
            Subscription Pricing & Credit Hub
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Select the optimal tier below or enter custom coupons to trial advanced multi-agent executions.
          </p>

          {/* Toggle switcher */}
          <div className="flex justify-center pt-4">
            <div className="inline-flex rounded-full bg-slate-900 p-1 border border-slate-800/80">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold select-none transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Plan
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold select-none transition-all ${
                  billingPeriod === 'yearly'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Yearly Billing (Save 20%)
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 relative hover:scale-[1.01] ${tier.glow}`}
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{tier.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{tier.description}</p>
                  </div>
                  {tier.badge && (
                    <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-[9px] uppercase font-bold px-2 py-0.5 rounded-full tracking-wide">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="pt-2">
                  <span className="text-3xl font-extrabold text-white tracking-tight">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-xs text-slate-500"> / month</span>}
                </div>

                {/* Features list */}
                <ul className="space-y-3.5 pt-4 text-xs text-slate-300">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold select-none transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    tier.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/20 active:scale-[0.98]'
                      : 'bg-slate-900 border border-slate-800 hover:scale-[0.98] hover:bg-slate-800 text-slate-200'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic coupon form widget */}
        <section className="bg-slate-950/40 rounded-2xl border border-slate-900 p-8 max-w-2xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-indigo-400" />
            <h4 className="text-sm font-semibold text-white">Enter Promotion & Credit Coupons</h4>
          </div>
          
          <p className="text-xs text-slate-400">
            Apply developer testing keys to activate advanced SaaS sandbox metrics.
          </p>

          <form onSubmit={applyVoucher} className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. FREEPRO"
              value={selectedVoucher}
              onChange={(e) => setSelectedVoucher(e.target.value)}
              className="bg-[#050914] border border-slate-800 focus:border-indigo-500 text-xs px-3 py-2 text-white rounded-lg flex-1 outline-none font-mono"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 font-semibold px-4 py-2 rounded-lg text-xs text-indigo-100 transition-all cursor-pointer"
            >
              Verify Code
            </button>
          </form>

          {voucherSuccess && (
            <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-lg flex items-center gap-2.5 text-xs text-emerald-400 animate-pulse">
              <Sparkles className="h-4 w-4" />
              <span>Promo activated: FREEPRO applied successfully. Sandbox limits unlocked.</span>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
