import React from 'react';
import { ShieldCheck, Truck, Cpu, Building2, Wrench, CheckCircle2, ArrowRight, Star, Clock, Zap } from 'lucide-react';

export default function Hero({ onOpenPickup, onOpenTracker }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Eyebrow Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="shimmer-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-xs font-semibold text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>OPENED IN 2022</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">HMT LAYOUT, BENGALURU</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>30-90 Days Warranty Provided</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Enterprise <span className="glow-text-cyan">B2B IT Solutions</span> & Chip-Level Hardware Lab.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Empowering businesses & individuals across Bengaluru with turnkey IT AMC maintenance, network architecture, and master chip-level laptop & desktop servicing. Guaranteed warranty with zero hassle.
              </p>
            </div>

            {/* Value Proposition Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Pickup & Drop</div>
                  <div className="text-[10px] text-slate-400">Free Bengaluru Service</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">B2B Focus</div>
                  <div className="text-[10px] text-slate-400">Corporate AMC & SLA</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Warranty</div>
                  <div className="text-[10px] text-slate-400">30 - 90 Days Covered</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Chip-Level</div>
                  <div className="text-[10px] text-slate-400">Multimeter Tested</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenPickup}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <Truck className="w-5 h-5 text-cyan-200 group-hover:-translate-x-1 transition-transform" />
                <span>Book Doorstep Pickup</span>
                <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#b2b"
                className="px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2.5 group"
              >
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span>Explore B2B AMC Plans</span>
              </a>
            </div>

            {/* Quick Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 text-xs text-slate-400 border-t border-white/5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Genuine OEM Parts Only</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>24-48 Hr Standard Turnaround</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Double Bezel Container */}
            <div className="double-bezel relative z-10 group">
              <div className="double-bezel-inner space-y-6">
                
                {/* Workshop Live Image Card */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-white/10 bg-slate-950">
                  <img 
                    src="/assets/motherboard-repair.jpg" 
                    alt="Ramu inspecting laptop motherboard with multimeter at Shree Ram Info Systems" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
                        RAMU
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Board-Level Diagnostics</div>
                        <div className="text-[10px] text-cyan-300">Live Repair Desk • HMT Layout</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                        <Zap className="w-3 h-3" /> Active Lab
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stat Grid */}
                <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="font-display text-xl font-extrabold text-white">2022</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Established</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="font-display text-xl font-extrabold text-cyan-400">100%</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Warranty</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="font-display text-xl font-extrabold text-emerald-400">24h</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Fast Pickup</div>
                  </div>
                </div>

                {/* Business Card Reference Floating Bar */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-cyan-950/40 border border-cyan-500/20 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400">Need immediate help?</span>
                    <div className="font-bold text-white">Direct Line: +91 9035359700</div>
                  </div>

                  <button
                    onClick={onOpenTracker}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-semibold text-xs border border-cyan-500/30 transition-colors"
                  >
                    Track Job Ticket
                  </button>
                </div>

              </div>
            </div>

            {/* Glowing Backdrop Behind Card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[28px] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

          </div>

        </div>
      </div>

    </section>
  );
}
