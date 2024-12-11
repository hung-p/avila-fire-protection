import React from 'react';
import { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
    testimonial: Testimonial;
    className?: string;
}

export function TestimonialCard({ testimonial, className = '' }: TestimonialCardProps) {
    return (
        <div className={`bg-white rounded-xl shadow-lg p-8 h-full flex flex-col ${className}`}>
            <blockquote className="text-gray-700 text-lg italic mb-8 flex-grow">
                "{testimonial.content}"
            </blockquote>
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                /> */}
                <div className='flex'>
                    <h4 className="font-semibold mr-2">{testimonial.name}</h4> | 
                    <p className="text-gray-600 ml-2">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
}