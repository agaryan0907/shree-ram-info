import React, { useState } from 'react';
import { Laptop, Monitor, ShieldAlert, Battery, HardDrive, ShieldCheck, Wrench, Building, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export default function ServicesGrid({ onSelectService, onOpenPickup }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 'laptop-repair',
      icon: Laptop,
      title: 'Laptop Repair',
      category: 'hardware',
      subtitle: 'Chip-Level & Structural Repair',
      description: 'Advanced IC & chip-level motherboard servicing, display hinge repairs, keyboard replacements, thermal re-pasting, and liquid damage recovery.',
      time: '24 - 48 Hours',
      warranty: '60 Days Warranty',
      highlights: ['Chip-Level Diagnostics', 'Hinge & Panel Repair', 'Keyboard & Trackpad'],
      popular: true
    },
    {
      id: 'desktop-repair',
      icon: Monitor,
      title: 'Desktop Repair',
      category: 'hardware',
      subtitle: 'Workstation & PC Diagnostics',
      description: 'Complete desktop repair including power supply unit (PSU) testing, GPU diagnostics, motherboard component replacement, and boot loop fixes.',
      time: '12 - 24 Hours',
      warranty: '90 Days Warranty',
      highlights: ['PSU & Power Rail Fix', 'GPU Stress Testing', 'No-Display Recovery']
    },
    {
      id: 'screen-replacement',
      icon: Monitor,
      title: 'Screen Replacement',
      category: 'hardware',
      subtitle: 'Original IPS & OLED Displays',
      description: 'Factory-grade screen replacement for all major brands (Dell, HP, Lenovo, ASUS, Acer, Apple) with zero dead-pixel guarantee and color accuracy.',
      time: '2 - 4 Hours (Express)',
      warranty: '90 Days Warranty',
      highlights: ['FHD & 4K IPS Panels', '144Hz+ Gaming Screens', '100% Original OEM'],
      popular: true
    },
    {
      id: 'battery-replacement',
      icon: Battery,
      title: 'Battery Replacement',
      category: 'hardware',
      subtitle: 'Genuine High-Health Batteries',
      description: 'Original high-capacity batteries with full BMS protection. Restores full battery backup time with safety certification and heat management.',
      time: '1 - 2 Hours',
      warranty: '180 Days Warranty',
      highlights: ['100% Health Guarantee', 'Overcharge Protection', 'Instant On-Site Install']
    },
    {
      id: 'data-recovery',
      icon: HardDrive,
      title: 'Data Recovery',
      category: 'software',
      subtitle: 'HDD / SSD / NVMe Retrieval',
      description: 'Deep sector-by-sector data extraction from dead hard drives, corrupted SSDs, formatted partitions, and OS boot failures with complete confidentiality.',
      time: '24 - 72 Hours',
      warranty: 'Strict Confidentiality',
      highlights: ['Dead HDD Extraction', 'Corrupted Partition Recovery', 'BitLocker Decryption']
    },
    {
      id: 'virus-removal',
      icon: ShieldAlert,
      title: 'Virus Removal',
      category: 'software',
      subtitle: 'Malware & OS Optimization',
      description: 'Eliminates stubborn malware, ransomware, spyware, and unwanted background processes. Includes system speed-up and security hardening.',
      time: '3 - 6 Hours',
      warranty: '30 Days Software Security',
      highlights: ['Ransomware Cleaning', 'OS Registry Repair', 'Antivirus Installation']
    },
    {
      id: 'custom-pc-building',
      icon: Wrench,
      title: 'Custom PC Building',
      category: 'hardware',
      subtitle: 'Gaming & Workstation Rigs',
      description: 'Tailor-made custom PC configurations optimized for video editing, 3D rendering, coding, and high-FPS gaming. Clean cable management guaranteed.',
      time: '24 Hours Assembly',
      warranty: 'Full Component Warranties',
      highlights: ['Precision Cable Management', 'BIOS Tuning & XMP', 'Stress & Thermal Benchmark']
    },
    {
      id: 'annual-maintenance',
      icon: Building,
      title: 'Annual Maintenance (AMC)',
      category: 'b2b',
      subtitle: 'Corporate IT Infrastructure',
      description: 'Comprehensive annual maintenance contracts for B2B clients, office setups, and educational institutions in Bengaluru. Guaranteed SLA and doorstep visits.',
      time: 'Dedicated SLA Support',
      warranty: 'Year-Round Coverage',
      highlights: ['Preventive Maintenance', 'On-Site IT Technician', 'Bulk Hardware Servicing'],
      popular: true
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative bg-slate-950/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE HARDWARE & SOFTWARE EXCELLENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Eight Specialized <span className="glow-text-cyan">Services</span> Engineered for Performance
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              From chip-level motherboard soldering to enterprise corporate IT AMC contracts, Shree Ram Info Systems delivers certified hardware precision with guaranteed warranties.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-white/5">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Services (8)
            </button>

            <button
              onClick={() => setActiveCategory('hardware')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'hardware'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Hardware & Chip-Level
            </button>

            <button
              onClick={() => setActiveCategory('b2b')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'b2b'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              B2B Corporate AMC
            </button>

            <button
              onClick={() => setActiveCategory('software')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'software'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Software & Data
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="double-bezel group relative flex flex-col justify-between"
              >
                <div className="double-bezel-inner h-full flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    {/* Top Icon & Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>

                      {service.popular && (
                        <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold tracking-wider uppercase">
                          Popular Choice
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-cyan-400 font-medium">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Feature bullet list */}
                    <ul className="space-y-1.5 pt-2">
                      {service.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Meta & Action */}
                  <div className="pt-4 border-t border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <div>
                        <span className="text-slate-500">TAT: </span>
                        <span className="text-slate-200 font-semibold">{service.time}</span>
                      </div>
                      <div className="px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-cyan-300 font-mono text-[10px]">
                        {service.warranty}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (onSelectService) onSelectService(service);
                        onOpenPickup();
                      }}
                      className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 font-semibold text-xs border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Book Pickup / Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
