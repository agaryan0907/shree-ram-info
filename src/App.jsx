import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Estimator from './components/Estimator';
import B2BSection from './components/B2BSection';
import WorkshopSpotlight from './components/WorkshopSpotlight';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';
import PickupBookingModal from './components/PickupBookingModal';
import RepairTrackerModal from './components/RepairTrackerModal';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [pickupModalOpen, setPickupModalOpen] = useState(false);
  const [trackerModalOpen, setTrackerModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedEstimate, setSelectedEstimate] = useState(null);

  const handleOpenPickup = () => {
    setPickupModalOpen(true);
  };

  const handleClosePickup = () => {
    setPickupModalOpen(false);
    setSelectedService(null);
    setSelectedEstimate(null);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleBookWithEstimate = (estimateData) => {
    setSelectedEstimate(estimateData);
    setPickupModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative">
      
      {/* Top Floating Navbar */}
      <Navbar 
        onOpenPickup={handleOpenPickup}
        onOpenTracker={() => setTrackerModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenPickup={handleOpenPickup}
          onOpenTracker={() => setTrackerModalOpen(true)}
        />

        <ServicesGrid 
          onSelectService={handleSelectService}
          onOpenPickup={handleOpenPickup}
        />

        <Estimator 
          onBookWithEstimate={handleBookWithEstimate}
        />

        <B2BSection 
          onOpenPickup={handleOpenPickup}
        />

        <WorkshopSpotlight />

        <Testimonials />
      </main>

      {/* Footer */}
      <ContactFooter 
        onOpenPickup={handleOpenPickup}
        onOpenTracker={() => setTrackerModalOpen(true)}
      />

      {/* Floating Quick Action Sticky Bar (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="tel:+919035359700"
          className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 text-cyan-400 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
          title="Call Ramu"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href="https://wa.me/919035359700?text=Hello%20Shree%20Ram%20Info%20Systems,%20I%20need%20computer%20service%20/%20pickup"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform animate-pulse"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-slate-950" />
        </a>
      </div>

      {/* Modals */}
      <PickupBookingModal 
        isOpen={pickupModalOpen}
        onClose={handleClosePickup}
        preselectedService={selectedService}
        preselectedEstimate={selectedEstimate}
      />

      <RepairTrackerModal 
        isOpen={trackerModalOpen}
        onClose={() => setTrackerModalOpen(false)}
      />

    </div>
  );
}
