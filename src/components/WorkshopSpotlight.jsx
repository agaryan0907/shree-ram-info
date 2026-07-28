import React, { useState } from 'react';
import { Camera, Cpu, Activity, CheckCircle, Zap, Shield, Sparkles, ZoomIn, X } from 'lucide-react';

export default function WorkshopSpotlight() {
  const [selectedImage, setSelectedImage] = useState(null);

  const labSteps = [
    {
      title: 'Live Software Diagnostics',
      desc: 'Technician runs live component stress tests and system diagnostic software on an HP laptop to trace thermal & RAM memory faults.',
      tag: 'Bench Diagnostic'
    },
    {
      title: 'Chip-Level Multimeter Testing',
      desc: 'Using precision digital multimeter probes to trace 19V power rails, short circuits, and faulty MOSFETs directly on laptop motherboards.',
      tag: 'Hardware IC Repair'
    },
    {
      title: 'Regulated DC Power Testing',
      desc: 'Controlled power supply injection to verify board power consumption safely before final device reassembly.',
      tag: 'Quality Control'
    },
    {
      title: 'Organized Spare & RAM Trays',
      desc: 'Clean, ESD-safe workspace with dedicated component trays for RAM modules, SSDs, screws, and replacement chips.',
      tag: 'Lab Standards'
    }
  ];

  const galleryItems = [
    {
      src: '/assets/motherboard-repair.jpg',
      title: 'Motherboard Chip-Level Repair',
      caption: 'Technician Ramu using multimeter probe for precision short-circuit diagnostic on green laptop motherboard.',
      badge: 'Live Repair Bench'
    },
    {
      src: '/assets/workshop-setup.png',
      title: 'Inside the Workshop Setup',
      caption: 'Comprehensive view of diagnostic workstation, multimeter, soldering station, regulated power supply, and open laptops.',
      badge: 'HMT Layout Lab'
    },
    {
      src: '/assets/card.jpg',
      title: 'Official Business Card & Location',
      caption: 'Ground Floor, 178, 1st Main, HMT Layout, Bengaluru-560073. Contact Ramu: +91 9035359700.',
      badge: 'Official Credentials'
    },
    {
      src: '/assets/services-slide.png',
      title: 'Core Business Services Slate',
      caption: 'Eight core services forming the backbone of Shree Ram Info Systems since 2022.',
      badge: 'Service Portfolio'
    }
  ];

  return (
    <section id="workshop" className="py-24 relative bg-slate-950/80 overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
              <Camera className="w-3.5 h-3.5" />
              <span>REAL WORKSHOP & LAB TRANSPARENCY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Inside the <span className="glow-text-cyan">Hardware Workshop</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Take a closer look at our daily repair setup in HMT Layout, Bengaluru. We don't outsource — every laptop and desktop is serviced in-house with professional equipment.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>100% In-House Board Level Repair</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(item)}
              className="double-bezel group cursor-pointer relative overflow-hidden"
            >
              <div className="double-bezel-inner space-y-3 p-3">
                
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-white/10">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Badge */}
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-slate-900/90 text-cyan-300 text-[10px] font-bold border border-cyan-500/30 backdrop-blur-md">
                    {item.badge}
                  </span>

                  {/* Hover Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/80 text-white flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Diagnostic Workflow Steps Banner */}
        <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Master Hardware Protocol</span>
              <h3 className="font-display text-2xl font-bold text-white">How We Diagnose & Repair Your Devices</h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Tested & Verified Setup</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {labSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {step.tag}
                  </span>
                </div>
                
                <h4 className="font-display font-bold text-slate-100 text-base">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-white/20 p-4 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="font-display text-lg font-bold text-white">{selectedImage.title}</h3>
                <p className="text-xs text-cyan-300">{selectedImage.badge}</p>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-black">
              <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-full object-contain" />
            </div>

            <p className="text-xs text-slate-300 text-center">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
