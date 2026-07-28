import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, Wrench, ShieldCheck, Truck, Cpu, AlertCircle } from 'lucide-react';

export default function RepairTrackerModal({ isOpen, onClose }) {
  const [ticketInput, setTicketInput] = useState('SRIS-8842');
  const [searchedTicket, setSearchedTicket] = useState({
    id: 'SRIS-8842',
    customerName: 'Suresh Kumar (Peenya Industrial Area)',
    device: 'Dell Latitude 3420 Laptop',
    issue: 'No Power On - 19V Motherboard Short Circuit',
    receivedDate: '28 July 2026',
    statusStep: 3, // 1 to 4
    estimatedDelivery: 'Tomorrow, 2:00 PM',
    technician: 'Ramu (Lead Chip Engineer)',
    notes: 'Power rail MOSFET replaced. Tested voltage line on multimeter. Thermal repasting complete. Under stress benchmark.',
    warrantyCode: 'WR-8842-90D'
  });

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    const clean = ticketInput.trim().toUpperCase() || 'SRIS-8842';
    setSearchedTicket({
      id: clean,
      customerName: 'Bengaluru Client',
      device: 'HP Pavilion 15 / Gaming Desktop',
      issue: 'Chip-Level Motherboard & Screen Repair',
      receivedDate: 'Current Service Cycle',
      statusStep: 3,
      estimatedDelivery: '24 Hours',
      technician: 'Ramu',
      notes: `Ticket #${clean} retrieved from Shree Ram Info Systems database. Diagnostics active on workbench.`,
      warrantyCode: `WR-${clean}-60D`
    });
  };

  const steps = [
    { title: 'Item Received at Lab', desc: 'Logged in HMT Layout Bench', icon: Truck },
    { title: 'Multimeter & Software Audit', desc: 'Short circuit & RAM check', icon: Cpu },
    { title: 'Board Servicing & Soldering', desc: 'MOSFET/IC replacement', icon: Wrench },
    { title: 'Bench Quality Test & Dispatch', desc: 'Ready for doorstep drop', icon: ShieldCheck }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4">
      
      <div className="relative max-w-xl w-full glass-panel rounded-3xl overflow-hidden border border-white/20 shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">Live Job Sheet Tracker</h3>
              <p className="text-xs text-cyan-300">Shree Ram Info Systems Diagnostics Portal</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Ticket Input Form */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <input 
              type="text" 
              value={ticketInput}
              onChange={(e) => setTicketInput(e.target.value)}
              placeholder="Enter Ticket ID (e.g. SRIS-8842)"
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono uppercase focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs flex items-center gap-1.5"
            >
              <Search className="w-4 h-4" />
              <span>Track</span>
            </button>
          </form>

          {/* Ticket Card Details */}
          {searchedTicket && (
            <div className="space-y-6 pt-2">
              
              <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-cyan-400 font-mono font-bold uppercase">Ticket ID: #{searchedTicket.id}</span>
                  <div className="font-display font-bold text-lg text-white">{searchedTicket.device}</div>
                  <div className="text-xs text-slate-400">{searchedTicket.issue}</div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
                    IN BENCH SERVICING
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1">Lead Tech: {searchedTicket.technician}</div>
                </div>
              </div>

              {/* Step Progress Tracker */}
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Repair Progress Stages</div>

                <div className="space-y-3">
                  {steps.map((step, idx) => {
                    const isDone = idx + 1 <= searchedTicket.statusStep;
                    const isCurrent = idx + 1 === searchedTicket.statusStep;
                    const Icon = step.icon;

                    return (
                      <div 
                        key={idx}
                        className={`p-3 rounded-xl border flex items-center gap-3.5 transition-all ${
                          isCurrent 
                            ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-md'
                            : isDone
                            ? 'bg-slate-900/60 border-emerald-500/30 text-slate-300'
                            : 'bg-slate-900/20 border-white/5 text-slate-500 opacity-60'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isCurrent ? 'bg-cyan-500 text-slate-950 font-bold' : isDone ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>

                        <div className="flex-1">
                          <div className="text-xs font-bold flex items-center justify-between">
                            <span>{step.title}</span>
                            {isCurrent && <span className="text-[10px] text-cyan-300 animate-pulse font-mono">ACTIVE STEP</span>}
                          </div>
                          <div className="text-[10px] text-slate-400">{step.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tech Notes */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-cyan-400" /> Technician Bench Log:
                </div>
                <p className="text-[11px] text-slate-400">{searchedTicket.notes}</p>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
