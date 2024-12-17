import React, { useState } from 'react';
import { Phone, Clock } from 'lucide-react';
import NavLink from './NavLink';
import logo from '../assets/images/avila-logo.png';

export function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        {/* Contact info section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 text-sm space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span><a href="tel:4087711208">(408) 771-1208</a></span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>Mon-Sat: 8AM-6PM</span>
            </div>
          </div>
        </div>

        {/* Main navigation section */}
        <nav className="flex flex-col sm:flex-row justify-between items-center py-4">
          <img
            src={logo}
            alt="Gilberto Avila - Fire Protection and Plumbing Services"
            className="rounded-lg object-cover h-20 mb-4 sm:mb-0"
          />
          <div className="flex space-x-6 sm:space-x-10">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
