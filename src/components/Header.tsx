import { Phone, Clock } from 'lucide-react';
import NavLink from './NavLink';
import logo from '../assets/images/avila-logo.png'; 
export function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-sm">
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
        <nav className="flex justify-between items-center py-4">
          {/* <div className="flex items-center">
            <Wrench size={32} className="mr-2" />
            <span className="text-2xl font-bold">Avila - Fire protection and Plumbing</span>
          </div> */}
          <img
            src={logo}
            alt="Gilberto Avila - Fire Protection and Plumbing Services"
            className="rounded-lg  object-cover h-20"
          />

          <div className="space-x-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            {/* <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get Estimate
            </button> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

