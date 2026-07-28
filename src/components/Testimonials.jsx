import React from 'react';
import { Star, Building2, Quote, ShieldCheck, ThumbsUp } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Kiran Rao',
      role: 'Operations Director',
      company: 'Apex Precision Tools, Peenya',
      type: 'B2B Corporate Client',
      content: 'Shree Ram Info Systems handles our office AMC of 35 desktops and servers. Ramu and his team provide 2-hour emergency response whenever a system crashes. Saved us thousands in hardware downtime!',
      rating: 5,
      badge: 'Corporate AMC'
    },
    {
      name: 'Dr. Mahesh V.',
      role: 'Professor & Researcher',
      company: 'HMT Layout, Bengaluru',
      type: 'Laptop Repair Client',
      content: 'My Dell XPS motherboard had a severe liquid spill. Official service center asked for ₹38,000 for full board replacement. Ramu diagnosed shorted capacitors and fixed it at chip-level for a fraction of the cost with 60 days warranty!',
      rating: 5,
      badge: 'Motherboard Chip Repair'
    },
    {
      name: 'Priya Sharma',
      role: 'Tech Lead',
      company: 'Fintech Startup, Hebbal',
      type: 'B2B & Custom Rigs',
      content: 'Utilized their doorstep pickup service for 8 office laptops needing screen and battery replacements. Picked up in the morning, repaired, and delivered back next day with official warranty receipts.',
      rating: 5,
      badge: 'Doorstep Pickup & Drop'
    }
  ];

  return (
    <section className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>CLIENT TRUST & REPUTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trusted by Businesses & <span className="glow-text-cyan">Individuals Across Bengaluru</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Read how Shree Ram Info Systems keeps enterprise fleets running smoothly and saves clients time & money.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="double-bezel relative">
              <div className="double-bezel-inner h-full flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Rating & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {r.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "{r.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{r.name}</div>
                    <div className="text-[11px] text-slate-400">{r.role}</div>
                    <div className="text-[10px] text-cyan-400 font-semibold">{r.company}</div>
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
