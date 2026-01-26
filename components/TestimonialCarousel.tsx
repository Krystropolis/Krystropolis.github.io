'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Krystal is driven, curious, organized and a pleasure to work with. She always ensures she fully understands a problem before implementing. She also asks great questions and has great insights into solving problems and implementing features in code.',
    author: 'Mindy Engelberg',
    title: 'Senior Staff Software Engineer',
    company: 'Disney'
  },
  {
    quote: 'As an intern with GE Digital, Krystal was adaptive, fast paced and easy to work with. Exceptionally receptive to business needs, Krystal was leaps and bounds beyond her peers in digesting project requirements and delivering outcomes. I would recommend Krystal to any software engineering or project management position.',
    author: 'Stephen Pfister',
    title: 'Staff Technical Product Manager',
    company: 'GE'
  },
  {
    quote: 'Krystal is hardworking, driven, and dedicated. She never backs down from anything and never settles for anything less than perfection. There are very few people that I can say challenge themselves the way Krystal does. She is highly confident in her abilities while being open and receptive to new ideas. Krystal has an incredible work ethic and a fantastic personality, making her a perfect team member. My only regret while attending Penn State is that I wasn\'t able to work with Krystal for our capstone projects.',
    author: 'Caleb Rush',
    title: 'Student',
    company: 'Penn State University'
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const testimonial = testimonials[currentIndex];

  return (
    <div
      className="p-8 md:p-12 bg-gradient-to-br from-primary-50/50 to-accent-50/50 dark:from-primary-900/10 dark:to-accent-900/10 rounded-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background quote icon */}
      <div className="absolute top-4 right-4 opacity-5 dark:opacity-10">
        <Quote className="w-32 h-32 text-primary-200 dark:text-primary-800" />
      </div>

      <div className="relative z-10">
        {/* Quote icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
            <Quote className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Testimonial quote */}
        <blockquote className="text-center mb-8">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>

        {/* Author info */}
        <div className="text-center">
          <p className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-1">
            {testimonial.author}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.title}
            {testimonial.company && <span className="mx-2">•</span>}
            {testimonial.company}
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                  index === currentIndex
                    ? 'w-8 bg-primary-500'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
