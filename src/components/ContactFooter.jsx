import React from 'react';
import { Phone, Mail, MapPin, Clock, Truck, ShieldCheck, ArrowUpRight, MessageSquare, Cpu, CheckCircle } from 'lucide-react';

export default function ContactFooter({ onOpenPickup, onOpenTracker }) {
  return (
    <footer id="contact" className="relative bg-slate-950 pt-20 pb-12 border-t border-white/10 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Top Contact Hub Card */}
        <div className="double-bezel">
          <div className="double-bezel-inner grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>HQ WORKSHOP & DIAGNOSTIC LAB</span>
                </div>
                <h3 className="font-display text-3xl font-extrabold text-white">
                  Visit Us in <span className="glow-text-cyan">HMT Layout, Bengaluru</span>
                </h3>
                <p className="text-xs text-slate-300">
                  Drop by our bench or request immediate doorstep pickup across Bengaluru.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Address Card */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Workshop Address</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Ground Floor, 178, 1st Main,<br />
                    HMT Layout, Bengaluru - 560073,<br />
                    Karnataka, India.
                  </p>
                </div>

                {/* Phone & Email */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Direct Phone & WhatsApp</div>
                  <a 
                    href="tel:+919035359700" 
                    className="block text-sm font-extrabold text-cyan-400 hover:underline"
                  >
                    +91 9035359700
                  </a>
                  <a 
                    href="mailto:shreeraminfosystems17@gmail.com" 
                    className="block text-[11px] text-slate-400 hover:text-white truncate"
                  >
                    shreeraminfosystems17@gmail.com
                  </a>
                </div>

              </div>

              {/* Hours & Owner */}
              <div className="flex flex-wrap items-center justify-between p-4 rounded-2xl bg-slate-900/50 border border-white/5 text-xs text-slate-300 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Mon - Sat: 9:30 AM - 9:00 PM | Sun: On-Call</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-cyan-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Lead Engineer: Ramu</span>
                </div>
              </div>

            </div>

            {/* Right Map Preview & Quick Actions */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 bg-slate-900">
                <img 
                  src="/assets/card.jpg" 
                  alt="Shree Ram Info Systems Official Business Card with contact details"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">Shree Ram Info Systems</div>
                    <div className="text-[10px] text-slate-400">Pincode: 560073 • Est. 2022</div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=HMT+Layout+Bengaluru+560073"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-[11px] flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/919035359700"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-xs border border-emerald-500/30 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Ramu</span>
                </a>

                <button
                  onClick={onOpenPickup}
                  className="py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold text-xs border border-cyan-500/30 flex items-center justify-center gap-2 transition-colors"
                >
                  <Truck className="w-4 h-4" />
                  <span>Book Free Pickup</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Cpu className="w-4 h-4" />
            </div>
            <span>© 2022 - 2026 Shree Ram Info Systems. All Rights Reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#services" className="hover:text-slate-300 transition-colors">Services</a>
            <a href="#estimator" className="hover:text-slate-300 transition-colors">Cost Estimator</a>
            <a href="#b2b" className="hover:text-slate-300 transition-colors">B2B Corporate AMC</a>
            <a href="#workshop" className="hover:text-slate-300 transition-colors">Lab Setup</a>
            <button onClick={onOpenTracker} className="hover:text-cyan-400 transition-colors">Track Ticket</button>
          </div>
        </div>

      </div>

    </footer>
  );
}
