import React from 'react';
import { Wrench, Home, Building2, Flame, AlertTriangle, ShieldCheck } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive fire protection and plumbing solutions for residential and commercial properties.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Flame className="text-red-500" />}
            title="Fire Protection"
            description="Complete fire protection systems including design, installation, and maintenance of fire sprinklers."
          />
          <ServiceCard
            icon={<Wrench className="text-green-500" />}
            title="Plumbing Services"
            description="Professional plumbing solutions including repairs, installations, and preventive maintenance."
          />
          <ServiceCard
            icon={<ShieldCheck className="text-blue-500" />}
            title="Maintenance"
            description="Regular maintenance and inspection services."
          />
          <ServiceCard
            icon={<Home className="text-sky-500" />}
            title="Residential Services"
            description="Specialized fire protection and plumbing services for homes and residential properties."
          />
          <ServiceCard
            icon={<Building2 className="text-purple-500" />}
            title="Commercial Services"
            description="Comprehensive solutions for businesses, including code compliance and safety inspections."
          />
          <ServiceCard
            icon={<AlertTriangle className="text-yellow-500" />}
            title="Emergency Services"
            description="Reliable emergency response for urgent plumbing needs."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}