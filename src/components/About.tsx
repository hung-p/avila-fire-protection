import React from 'react';
import { Award, Users, History, Shield, Phone } from 'lucide-react';
import about_img_1 from '../assets/images/gilberto-avila.jpg';
import about_img_2 from '../assets/images/about-2.jpeg';
import about_img_3 from '../assets/images/about-3.jpeg';
import about_img_4 from '../assets/images/about-4.jpeg';

export function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Your Trusted Fire Protection & Plumbing Experts
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            At <strong>Avila Fire Protection & Plumbing</strong>, we bring over 20 years of industry experience, specializing in both residential and commercial fire protection and plumbing services. Our reputation for expertise, reliability, and exceptional customer service has made us a preferred choice for countless clients.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            We are committed to delivering top-tier solutions with attention to detail, whether it's installing fire sprinklers, repairing plumbing issues, or managing complex installations. Our team is driven by a passion for excellence and a commitment to solving your problems efficiently and effectively.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            We ensure every job is completed to the highest standards, focusing on safety, efficiency, and lasting solutions.
                            Since 2002, we’ve earned the trust of homeowners and businesses throughout the Bay Area by consistently exceeding expectations. Whether it’s a simple repair or a large installation, our commitment to quality guarantees peace of mind and reliable results for every client.</p>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                <Stat icon={<Users />} number="3000+" label="Happy Customers" />
                                <Stat icon={<History />} number="20+" label="Years Experience" />
                                <Stat icon={<Award />} number="2002" label="Est. Year" />
                                <Stat icon={<Shield />} number="100%" label="Satisfaction Rate" />
                            </div>
                        </div>
                        <p className="text-lg text-gray-600">
                            Contact us today to experience the difference with a trusted partner in fire protection and plumbing. We're ready to serve you with reliable, high-quality solutions!
                        </p>
                        {/* Call Us Button */}
                        <div className="flex justify-center items-center mt-6">
                            <a href="tel:4087711208" className="w-full sm:max-w-xs">
                                <button className="w-auto bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                                    <div className="flex items-center justify-center">
                                        <Phone size={22} className="mr-2" />
                                        <span className="whitespace-nowrap">Get Expert Service Now</span>
                                    </div>
                                </button>
                            </a>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={about_img_1}
                            alt="Professional plumber"
                            className="rounded-lg w-96 h-64 object-cover"
                        />
                        <img
                            src={about_img_2}
                            alt="Plumbing work"
                            className="rounded-lg w-96 h-64 object-cover mt-8"
                        />
                        <img
                            src={about_img_3}
                            alt="Plumbing tools"
                            className="rounded-lg w-96 h-64 object-cover"
                        />
                        <img
                            src={about_img_4}
                            alt="Modern bathroom installation"
                            className="rounded-lg w-96 h-64 object-cover mt-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Stat({
    icon,
    number,
    label,
}: {
    icon: React.ReactNode;
    number: string;
    label: string;
}) {
    return (
        <div className="flex items-center space-x-3">
            <div className="text-blue-600">{icon}</div>
            <div>
                <div className="text-2xl font-bold text-gray-900">{number}</div>
                <div className="text-sm text-gray-600">{label}</div>
            </div>
        </div>
    );
}