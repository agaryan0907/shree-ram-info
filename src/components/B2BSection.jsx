import React, { useState } from 'react';
import { Building2, Server, Network, ShieldCheck, Headphones, CheckCircle2, ArrowRight, Zap, FileText } from 'lucide-react';

export default function B2BSection({ onOpenPickup }) {
  const [pcCount, setPcCount] = useState(15);
  const [contractTerm, setContractTerm] = useState('1year');
  const [onsiteSupport, setOnsiteSupport] = useState(true);

  // SLA Calculation formula
  const basePerPcAnnual = 1800; // ₹1800 per PC per year
  const rawTotal = pcCount * basePerPcAnnual;
  const termDiscount = contractTerm === '3year' ? 0.85 : 1; // 15% off for 3 years
  const finalPrice = Math.round(rawTotal * termDiscount);

  const handleB2BInquiry = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Shree Ram Info Systems, I am interested in B2B Corporate AMC.\n` +
      `Fleet Size: ${pcCount} PCs\n` +
      `Contract Term: ${contractTerm === '3year' ? '3 Years' : '1 Year'}\n` +
      `Estimated AMC Budget: ₹${finalPrice.toLocaleString()}/year\n` +
      `Please provide an official proposal and schedule an office audit in Bengaluru.`
    );
    window.open(`https://wa.me/919035359700?text=${text}`, '_blank');
  };

  return (
    <section id="b2b" className="py-24 relative overflow-hidden bg-slate-950">
      
      {/* Background Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold text-blue-300">
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B ENTERPRISE & CORPORATE IT CONTRACTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Turnkey B2B IT Maintenance & <span className="glow-text-gradient">Networking AMC</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Serving corporate offices, manufacturing hubs (Peenya, Hebbal, Electronics City, Rajajinagar), and IT startups across Bengaluru since 2022. We ensure 99.9% uptime for your office hardware and network infrastructure.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1">
              <div className="text-2xl font-extrabold text-white font-display">2-Hour SLA</div>
              <div className="text-xs text-slate-400">Emergency On-Site Response</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1">
              <div className="text-2xl font-extrabold text-cyan-400 font-display">Zero Downtime</div>
              <div className="text-xs text-slate-400">Standby Hardware Replacement</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1">
              <div className="text-2xl font-extrabold text-emerald-400 font-display">Quarterly</div>
              <div className="text-xs text-slate-400">Preventive Hardware Audits</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1">
              <div className="text-2xl font-extrabold text-amber-400 font-display">100% Tax</div>
              <div className="text-xs text-slate-400">GST Invoice Compliant</div>
            </div>
          </div>
        </div>

        {/* Core B2B Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-3xl space-y-4 border border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">Annual Maintenance (AMC)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Comprehensive hardware maintenance for desktops, laptops, servers, UPS systems, and printers with scheduled servicing and unlimited break-fix calls.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Dedicated Account Manager</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Standby System Backup</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Thermal & Dust Maintenance</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-3xl space-y-4 border border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">Office Networking & Cabling</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              End-to-end structured LAN cabling (Cat6/Cat6A), firewall setup, Wi-Fi mesh routing, router/switch rack mounting, and VPN access for office teams.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Gigabit Network Architecture</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Firewall & Router Security</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Clean Server Rack Cable Trimming</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-3xl space-y-4 border border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">On-Site & Remote IT Helpdesk</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instant remote desktop troubleshooting via TeamViewer/AnyDesk for software & network glitches, plus doorstep physical repair pickup for hardware failures.
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 15-Min Remote Ticket Support</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> License & Antivirus Management</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Data Backup & Recovery Policy</li>
            </ul>
          </div>
        </div>

        {/* Interactive B2B Calculator & Consultation Form */}
        <div className="double-bezel">
          <div className="double-bezel-inner grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Interactive Calculator Slider */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Interactive AMC Estimator</span>
                <h3 className="font-display text-2xl font-bold text-white">Customize Corporate Fleet Size</h3>
                <p className="text-xs text-slate-400">Adjust your workstation inventory to view estimated annual maintenance investment.</p>
              </div>

              {/* Range Slider */}
              <div className="space-y-4 p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <div className="flex items-center justify-between text-sm font-bold text-white">
                  <span>Number of PCs / Laptops:</span>
                  <span className="text-cyan-400 font-display text-xl">{pcCount} Workstations</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={pcCount}
                  onChange={(e) => setPcCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>5 PCs (Small Office)</span>
                  <span>50 PCs (Growth Office)</span>
                  <span>100+ PCs (Enterprise)</span>
                </div>
              </div>

              {/* Term Selection */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setContractTerm('1year')}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                    contractTerm === '1year'
                      ? 'bg-cyan-950 border-cyan-400 text-white'
                      : 'bg-slate-900 border-white/5 text-slate-400'
                  }`}
                >
                  1-Year Annual Contract
                </button>
                <button
                  type="button"
                  onClick={() => setContractTerm('3year')}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-between ${
                    contractTerm === '3year'
                      ? 'bg-cyan-950 border-cyan-400 text-white'
                      : 'bg-slate-900 border-white/5 text-slate-400'
                  }`}
                >
                  <span>3-Year Long Term</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">15% OFF</span>
                </button>
              </div>

              {/* Included SLA features list */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-cyan-400" /> Unlimited Break-Fix Visits</div>
                <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-cyan-400" /> Quarterly Deep Cleaning</div>
                <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-cyan-400" /> Free Pickup & Drop</div>
                <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-cyan-400" /> GST Billing Invoice</div>
              </div>
            </div>

            {/* Right Quote Summary & WhatsApp RFP Button */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-cyan-950/60 border border-cyan-500/30 text-center space-y-6">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Estimated AMC Budget</span>
                <div className="font-display text-4xl font-extrabold text-white mt-1">
                  ₹{finalPrice.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ year</span>
                </div>
                <div className="text-[11px] text-cyan-300 mt-1">
                  Approx. ₹{Math.round(finalPrice / pcCount / 12)} / workstation / month
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={handleB2BInquiry}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Official B2B Proposal</span>
                </button>

                <p className="text-[10px] text-slate-400">
                  Or call lead technician <strong>Ramu</strong> directly at <strong>+91 9035359700</strong> for an immediate on-site IT inspection.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
