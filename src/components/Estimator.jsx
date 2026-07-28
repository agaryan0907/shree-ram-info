import React, { useState } from 'react';
import { Calculator, Cpu, ShieldCheck, Clock, Truck, Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

export default function Estimator({ onBookWithEstimate }) {
  const [deviceType, setDeviceType] = useState('laptop');
  const [brand, setBrand] = useState('hp');
  const [issue, setIssue] = useState('motherboard');
  const [speed, setSpeed] = useState('standard');

  // Estimate calculation logic matrix
  const rates = {
    motherboard: { baseMin: 1200, baseMax: 2800, time: '24-48 Hours', warranty: '60 Days' },
    screen: { baseMin: 2200, baseMax: 4500, time: '2-4 Hours', warranty: '90 Days' },
    battery: { baseMin: 1400, baseMax: 2600, time: '1-2 Hours', warranty: '180 Days' },
    liquid: { baseMin: 1500, baseMax: 3500, time: '24-72 Hours', warranty: '60 Days' },
    datarecovery: { baseMin: 1800, baseMax: 5000, time: '24-72 Hours', warranty: 'Confidentiality Guarantee' },
    ssd: { baseMin: 1600, baseMax: 3800, time: '1-3 Hours', warranty: '3 Years Component Warranty' },
    os: { baseMin: 500, baseMax: 950, time: '2-4 Hours', warranty: '30 Days Software Support' },
    psu: { baseMin: 900, baseMax: 2200, time: '4-8 Hours', warranty: '90 Days' }
  };

  const selectedData = rates[issue] || rates.motherboard;

  // Brand multiplier
  let brandMultiplier = 1;
  if (brand === 'apple') brandMultiplier = 1.35;
  if (brand === 'gaming') brandMultiplier = 1.2;

  // Speed multiplier
  const speedAddon = speed === 'express' ? 350 : 0;

  const minPrice = Math.round(selectedData.baseMin * brandMultiplier + speedAddon);
  const maxPrice = Math.round(selectedData.baseMax * brandMultiplier + speedAddon);

  const handleBook = () => {
    if (onBookWithEstimate) {
      onBookWithEstimate({
        deviceType,
        brand,
        issue,
        speed,
        estimatedCost: `₹${minPrice.toLocaleString()} - ₹${maxPrice.toLocaleString()}`,
        turnaround: selectedData.time,
        warranty: selectedData.warranty
      });
    }
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT DIAGNOSTIC CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Instant Repair <span className="glow-text-cyan">Cost & Time Estimator</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Configure your hardware specs and issue to view immediate estimated diagnostic costs, turnaround times, and warranty coverage prior to booking.
          </p>
        </div>

        {/* Estimator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Selection */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 space-y-8 border border-white/10">
            
            {/* Step 1: Device Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] flex items-center justify-center font-bold">1</span>
                <span>Select Hardware Type</span>
              </label>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'laptop', label: 'Laptop', sub: 'Portable PC' },
                  { id: 'desktop', label: 'Desktop PC', sub: 'Tower Rig' },
                  { id: 'b2b', label: 'B2B Workstation', sub: 'Office Fleet' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDeviceType(item.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      deviceType === item.id
                        ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{item.label}</div>
                    <div className="text-[10px] text-slate-400">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Brand / Model Line */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] flex items-center justify-center font-bold">2</span>
                <span>Select Brand / Series</span>
              </label>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'dell', name: 'Dell' },
                  { id: 'hp', name: 'HP' },
                  { id: 'lenovo', name: 'Lenovo' },
                  { id: 'asus', name: 'ASUS / ROG' },
                  { id: 'acer', name: 'Acer' },
                  { id: 'apple', name: 'Apple MacBook / Mac' },
                  { id: 'gaming', name: 'Custom Gaming Rig' }
                ].map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBrand(b.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all ${
                      brand === b.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                        : 'bg-slate-900/50 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Hardware Issue */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] flex items-center justify-center font-bold">3</span>
                <span>Select Primary Issue</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'motherboard', label: 'Motherboard / Chip' },
                  { id: 'screen', label: 'Screen / Display' },
                  { id: 'battery', label: 'Battery / Charging' },
                  { id: 'liquid', label: 'Liquid Damage' },
                  { id: 'datarecovery', label: 'Data Recovery' },
                  { id: 'ssd', label: 'SSD / RAM Upgrade' },
                  { id: 'os', label: 'OS Boot / Virus' },
                  { id: 'psu', label: 'Power Supply (PSU)' }
                ].map((i) => (
                  <button
                    key={i.id}
                    onClick={() => setIssue(i.id)}
                    className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                      issue === i.id
                        ? 'bg-gradient-to-br from-cyan-950 to-blue-950 border-cyan-400 text-white shadow-md'
                        : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {i.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Turnaround Speed */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] flex items-center justify-center font-bold">4</span>
                <span>Service Priority</span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSpeed('standard')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    speed === 'standard'
                      ? 'bg-slate-900 border-cyan-500/50 text-white'
                      : 'bg-slate-900/30 border-white/5 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-xs text-white">
                    <span>Standard Pickup</span>
                    <span className="text-[10px] text-emerald-400">FREE PICKUP</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Normal diagnostics & repair turnaround</div>
                </button>

                <button
                  onClick={() => setSpeed('express')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    speed === 'express'
                      ? 'bg-gradient-to-r from-amber-950/40 to-slate-900 border-amber-500/50 text-white'
                      : 'bg-slate-900/30 border-white/5 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-xs text-amber-300">
                    <span>Express Priority (+₹350)</span>
                    <span className="text-[10px] bg-amber-500/20 px-1.5 py-0.5 rounded text-amber-300">FAST PASS</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Immediate bench allocation & same-day pickup</div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Live Estimate Result Card */}
          <div className="lg:col-span-5 double-bezel sticky top-28">
            <div className="double-bezel-inner space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Live Estimate Summary</span>
                  <h3 className="font-display text-xl font-bold text-white uppercase">{brand} {deviceType}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Price Display */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950/50 border border-cyan-500/30 text-center space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Estimated Repair Range</span>
                <div className="font-display text-4xl font-extrabold text-white">
                  ₹{minPrice.toLocaleString()} – ₹{maxPrice.toLocaleString()}
                </div>
                <p className="text-[11px] text-cyan-300">
                  Includes component inspection, labor & doorstep pickup/drop in Bengaluru.
                </p>
              </div>

              {/* Breakdown metrics */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" /> Turnaround Time:
                  </span>
                  <span className="font-bold text-white">{selectedData.time}</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Warranty Included:
                  </span>
                  <span className="font-bold text-emerald-400">{selectedData.warranty}</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-amber-400" /> Pickup & Drop:
                  </span>
                  <span className="font-bold text-white">Included (Bengaluru)</span>
                </div>
              </div>

              {/* Guarantee Note */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-[11px] text-slate-400 space-y-1">
                <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> No Cost If Unrepairable
                </div>
                <p>If our technician cannot resolve your hardware issue, zero diagnostic fee is charged.</p>
              </div>

              {/* CTA */}
              <button
                onClick={handleBook}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-sm shadow-xl shadow-cyan-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book Pickup with This Estimate</span>
                <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
