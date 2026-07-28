import React, { useState } from 'react';
import { X, Truck, CheckCircle2, ShieldCheck, MapPin, Calendar, Clock, ArrowRight, ArrowLeft, Phone, User, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PickupBookingModal({ isOpen, onClose, preselectedService, preselectedEstimate }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    area: 'HMT Layout',
    pincode: '560073',
    deviceType: preselectedEstimate?.deviceType || 'laptop',
    brand: preselectedEstimate?.brand || 'Dell',
    model: '',
    issue: preselectedEstimate?.issue || 'Motherboard / Power Issue',
    issueDesc: '',
    pickupDate: 'Today',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    wantWarranty: true
  });

  const [submittedTicket, setSubmittedTicket] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit Booking
      const ticketId = `SRIS-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedTicket(ticketId);

      // Trigger Confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `*NEW DOORSTEP PICKUP REQUEST*\n` +
      `---------------------------------\n` +
      `Ticket ID: *${submittedTicket}*\n` +
      `Customer Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Address: ${formData.address}, ${formData.area} (${formData.pincode})\n` +
      `Device: ${formData.brand} ${formData.deviceType} (${formData.model || 'Standard'})\n` +
      `Issue: ${formData.issue} - ${formData.issueDesc || 'General repair'}\n` +
      `Pickup Slot: ${formData.pickupDate} [${formData.timeSlot}]\n` +
      `---------------------------------\n` +
      `Please confirm pickup dispatch.`
    );
    window.open(`https://wa.me/919035359700?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      
      <div className="relative max-w-2xl w-full glass-panel rounded-3xl overflow-hidden border border-white/20 shadow-2xl animate-in zoom-in-95 duration-200 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">Book Doorstep Pickup</h3>
              <p className="text-xs text-cyan-300 font-medium">Bengaluru Free Delivery & Pickup Service</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {!submittedTicket && (
          <div className="px-6 py-3 bg-slate-950/60 border-b border-white/5 flex items-center justify-between text-xs font-semibold">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-cyan-400' : 'text-slate-500'}`}>
              <span className="w-5 h-5 rounded-full bg-slate-800 border flex items-center justify-center text-[10px]">1</span>
              <span>Contact & Address</span>
            </div>
            <span className="text-slate-600">→</span>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-cyan-400' : 'text-slate-500'}`}>
              <span className="w-5 h-5 rounded-full bg-slate-800 border flex items-center justify-center text-[10px]">2</span>
              <span>Device & Fault</span>
            </div>
            <span className="text-slate-600">→</span>
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-cyan-400' : 'text-slate-500'}`}>
              <span className="w-5 h-5 rounded-full bg-slate-800 border flex items-center justify-center text-[10px]">3</span>
              <span>Schedule Slot</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {submittedTicket ? (
            /* Success State */
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Pickup Request Created</span>
                <h4 className="font-display text-3xl font-bold text-white">Job Ticket: #{submittedTicket}</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Our technician Ramu is notified. We will dispatch our pickup executive to your Bengaluru location.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/20 text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Customer:</span>
                  <span className="font-bold text-white">{formData.name} ({formData.phone})</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Pickup Location:</span>
                  <span className="font-bold text-cyan-300">{formData.area}, Pincode: {formData.pincode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Scheduled Time:</span>
                  <span className="font-bold text-emerald-400">{formData.pickupDate} ({formData.timeSlot})</span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Send Booking Ticket to WhatsApp Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          ) : (
            /* Wizard Steps */
            <form onSubmit={handleNext} className="space-y-6">
              
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-cyan-400" /> Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-cyan-400" /> Phone Number (WhatsApp) *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="e.g. 9845012345"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Complete Address *
                    </label>
                    <input 
                      type="text" 
                      name="address"
                      required
                      placeholder="Flat / House No, Building Name, Street"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Bengaluru Area</label>
                      <select
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="HMT Layout">HMT Layout (HQ Base)</option>
                        <option value="Peenya Industrial Area">Peenya Industrial Area</option>
                        <option value="Jalahalli">Jalahalli / BEL Circle</option>
                        <option value="Hebbal">Hebbal / Manyata</option>
                        <option value="Yeshwanthpur">Yeshwanthpur</option>
                        <option value="Rajajinagar">Rajajinagar</option>
                        <option value="Yelahanka">Yelahanka</option>
                        <option value="Other Bengaluru Region">Other Bengaluru Region</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Pincode</label>
                      <input 
                        type="text" 
                        name="pincode"
                        placeholder="560073"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Device Type</label>
                      <select
                        name="deviceType"
                        value={formData.deviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400"
                      >
                        <option value="laptop">Laptop</option>
                        <option value="desktop">Desktop PC</option>
                        <option value="all-in-one">All-in-One PC</option>
                        <option value="b2b-server">B2B Server / Workstation</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Brand</label>
                      <input 
                        type="text"
                        name="brand"
                        placeholder="e.g. Dell Inspiron / HP Pavilion"
                        value={formData.brand}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Primary Fault / Issue</label>
                    <select
                      name="issue"
                      value={formData.issue}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400"
                    >
                      <option value="Motherboard / Power Issue">Motherboard / No Power On</option>
                      <option value="Screen Replacement">Broken Display / Lines on Screen</option>
                      <option value="Battery / Charger">Battery Not Charging / Dead</option>
                      <option value="Liquid Damage">Liquid / Water Damage Clean</option>
                      <option value="Data Recovery">Data Recovery from HDD/SSD</option>
                      <option value="Custom Assembly">Custom Assembly / Performance Upgrade</option>
                      <option value="B2B AMC Inquiry">B2B Fleet Maintenance</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Issue Details (Optional)</label>
                    <textarea
                      name="issueDesc"
                      rows="3"
                      placeholder="Describe what happens when you turn it on..."
                      value={formData.issueDesc}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Pickup Date
                      </label>
                      <select
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400"
                      >
                        <option value="Today">Today (Fast Dispatch)</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="Day After Tomorrow">Day After Tomorrow</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" /> Time Slot
                      </label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
                    <div className="text-xs">
                      <div className="font-bold text-white">30 - 90 Days Service Warranty Included</div>
                      <div className="text-slate-400">All replaced hardware components carry genuine manufacturer & lab warranty.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold flex items-center gap-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-xs shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all flex items-center gap-2"
                >
                  <span>{step === 3 ? 'Confirm & Book Pickup' : 'Continue Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
