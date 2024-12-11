import React from 'react';
import { ShieldCheck, Clock, Wrench, Phone, CalendarCheck } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-blue-700 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1"
          alt="Plumber working"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Professional Fire Protection & Plumbing Services
          </h1>
          <p className="text-xl mb-8">
            Expert fire protection and plumbing solutions for your home or business. Available for
            emergencies with guaranteed satisfaction.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              <div className="flex items-center">
                <Phone size={22} className="mr-2" />
                <span><a href="tel:4087711208">Call Us Now</a></span>
              </div>
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              <div className="flex items-center">
                <CalendarCheck size={22} className="mr-2" />
                <span><a href="https://calendar.app.google/4Tcx7b8zQVPV6ija7" target='_blank'>Schedule Service</a></span>
              </div>
            </button>
          </div>
          <div className="flex items-center mt-8 space-x-8">
            <Feature icon={<ShieldCheck />} text="Licensed & Insured" />
            <Feature icon={<Clock />} text="Mon-Sat: 8AM-6PM" />
            <Feature icon={<Wrench />} text="100% Satisfaction" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center">
      <div className="mr-2">{icon}</div>
      <span>{text}</span>
    </div>
  );
}