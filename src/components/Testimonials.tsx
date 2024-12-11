import React, { useState, useEffect } from 'react';
import { TestimonialCard } from './testimonials/TestimonialCard';
import { CarouselControls } from './testimonials/CarouselControls';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const handlePrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? totalPages - 1 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((current) => (current + 1) % totalPages);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    const visible = testimonials.slice(start, end);

    // If we don't have enough testimonials to fill the last page,
    // wrap around to the beginning
    if (visible.length < itemsPerPage) {
      const remaining = itemsPerPage - visible.length;
      return [...visible, ...testimonials.slice(0, remaining)];
    }

    return visible;
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${currentIndex}-${index}`}
              testimonial={testimonial}
              className="transform transition-all duration-500 shadow-lg hover:shadow-xl"
            />
          ))}
        </div>
        <CarouselControls
          onPrevious={handlePrevious}
          onNext={handleNext}
          currentIndex={currentIndex}
          total={totalPages}
        />
      </div>
    </section>
  );
}