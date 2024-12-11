import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Information */}
            <div className="flex flex-col justify-between bg-white border rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-6">
                <ContactInfo
                  icon={<Phone />}
                  title="Phone"
                  content="(408) 771-1208"
                  link="tel:4087711208"
                />
                <ContactInfo
                  icon={<Mail />}
                  title="Email"
                  content="info@avilafireprotection.com"
                  link="mailto:info@avilafireprotection.com"
                />
                <ContactInfo
                  icon={<MapPin />}
                  title="Address"
                  content="P.O BOX 1862 San Jose CA 95109"
                />
              </div>
            </div>

            {/* Google Form Button */}
            <div className="flex flex-col justify-start bg-blue-50 p-10 rounded-lg shadow-md">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  Quick Inquiry
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Fill out our Google Form, and we’ll get back to you!
                </p>
              </div>
              <div className="text-center">
                <a
                  href="https://forms.gle/fxJJw6RJS3uUptXP6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-xs mx-auto bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Open Google Form
                </a>
              </div>
            </div>
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
  link,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-blue-600 text-xl">{icon}</div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        {link ? (
          <a href={link} className="text-gray-600 hover:underline">
            {content}
          </a>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </div>
  );
}
