import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">
              Get in touch with us for all your plumbing needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <a href="tel:4087711208">
                    <ContactInfo
                      icon={<Phone />}
                      title="Phone"
                      content="(408) 771-1208"
                    />
                  </a>
                </div>
                <div className="flex items-start">
                  <a href="mailto:info@avilafireprotection.com">
                    <ContactInfo
                      icon={<Mail />}
                      title="Email"
                      content="info@avilafireprotection.com"
                    />
                  </a>
                </div>
                <div className="flex items-start">
                  <ContactInfo
                    icon={<MapPin />}
                    title="Address"
                    content="P.O BOX 1862 San Jose CA 95109"
                  />
                </div>
              </div>
            </div>
            <form className="space-y-4" action='tel:4087711208'>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-start">
      <div className="text-blue-600 mr-4">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}