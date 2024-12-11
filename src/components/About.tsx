import React from 'react';
import { Award, Users, History, Shield } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Your Trusted Fire Protection & Plumbing Expert
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Gilbert Avila is a seasoned professional with over 20 years of experience in the industry. Specializing in residential and commercial fire protection and plumbing services, Gilbert has built a reputation for his expertise, reliability, and commitment to customer satisfaction.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            Driven by a passion for solving problems and helping people, Gilbert approaches every job with dedication and attention to detail. Whether it's installing fire sprinklers, fixing a leaky faucet, or handling complex plumbing installations, he takes pride in delivering high-quality workmanship.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            When he's not on the job, Gilbert enjoys spending time outdoors hiking, swimming, and being an active member of his local community.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <Stat icon={<Users />} number="3000+" label="Happy Customers" />
                            <Stat icon={<History />} number="20+" label="Years Experience" />
                            <Stat icon={<Award />} number="2002" label="Est. Year" />
                            <Stat icon={<Shield />} number="100%" label="Satisfaction Rate" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/src/images/gilberto-avila.jpg"
                            alt="Professional plumber"
                            className="rounded-lg  w-96 h-64  object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1542013936693-884638332954"
                            alt="Plumbing work"
                            className="rounded-lg w-96 h-64 object-cover mt-8"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1564540579594-0930edb6de43"
                            alt="Plumbing tools"
                            className="rounded-lg w-96 h-64 object-cover"
                        />
                        <img
                            src="https://plus.unsplash.com/premium_photo-1664299069577-11579b487e6c"
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