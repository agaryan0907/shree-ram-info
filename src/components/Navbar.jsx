import React, { useState, useEffect } from 'react';
import { Phone, Truck, ShieldCheck, Cpu, Menu, X, ArrowUpRight, Search } from 'lucide-react';

export default function Navbar({ onOpenPickup, onOpenTracker }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'glass-panel py-2.5 px-4 sm:px-6 shadow-2xl border-white/10' 
          : 'bg-slate-950/40 backdrop-blur-md py-3 px-4 sm:px-6 border border-white/5'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <div className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-2">
                SHREE RAM <span className="text-cyan-400 font-normal text-xs uppercase tracking-widest px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">INFO</span>
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest -mt-0.5 font-medium">
                Systems • Est. 2022
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 text-sm font-medium text-slate-300">
            <a href="#services" className="px-4 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all">Services</a>
            <a href="#estimator" className="px-4 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all">Price Estimator</a>
            <a href="#b2b" className="px-4 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5">
              <span>B2B & AMC</span>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            </a>
            <a href="#workshop" className="px-4 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all">Lab & Setup</a>
            <button 
              onClick={onOpenTracker}
              className="px-3.5 py-1.5 rounded-full text-cyan-400 hover:bg-cyan-950/50 hover:text-cyan-300 transition-all flex items-center gap-1.5 border border-cyan-500/20 text-xs"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Track Repair</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:+919035359700" 
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-xl bg-slate-900/40 border border-white/5"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+91 9035359700</span>
            </a>

            <button
              onClick={onOpenPickup}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full group-hover:scale-105 transition-transform"></span>
              <span className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-slate-950 text-xs font-bold text-white transition-all group-hover:bg-opacity-90">
                <Truck className="w-4 h-4 text-cyan-400 group-hover:-translate-x-0.5 transition-transform" />
                <span>Book Pickup</span>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center ml-1 group-hover:translate-x-0.5 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300" />
                </span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenPickup}
              className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold"
            >
              <Truck className="w-4 h-4" />
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-300 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-slate-300" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-4 top-20 z-50 glass-panel rounded-2xl p-6 border border-white/10 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Pickup Available in Bengaluru</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 font-medium text-slate-200">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              Services Offered
            </a>
            <a 
              href="#estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              Diagnostic Estimator
            </a>
            <a 
              href="#b2b" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5 flex items-center justify-between"
            >
              <span>B2B & Corporate AMC</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">Priority</span>
            </a>
            <a 
              href="#workshop" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              Lab & Workshop
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              Contact & Location
            </a>
          </div>

          <div className="pt-2 space-y-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-cyan-400 border border-cyan-500/30 text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Track Repair Status</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPickup();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              <Truck className="w-4 h-4" />
              <span>Book Doorstep Pickup</span>
            </button>

            <a 
              href="tel:+919035359700"
              className="w-full py-2.5 rounded-xl bg-slate-900/80 text-slate-300 border border-white/10 text-xs font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Ramu: +91 9035359700</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
