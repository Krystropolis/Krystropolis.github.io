'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function HomePage() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'await hireMe();';

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100; // ms per character

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Hide cursor after typing completes
        setTimeout(() => setShowCursor(false), 500);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 animate-fade-in-up py-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
            Welcome to <span className="text-primary-600 dark:text-primary-400">Krystropolis</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Software Engineer & Creative Problem Solver
          </p>
        </div>

        {/* Cards Section with Floating Image */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Left Column - Resume and Portfolio */}
          <div className="flex flex-col space-y-6 order-2 lg:order-1">
            {/* Resume */}
            <Link href="/resume" className="card p-10 hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-gradient-to-br from-primary-50 to-surface-light dark:from-primary-900/20 dark:to-gray-800 shine-effect">
              <h2 className="text-3xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-3">
                Resume
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Explore my professional experience, education, and technical skills.
              </p>
            </Link>

            {/* Portfolio */}
            <Link href="/portfolio" className="card p-10 hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-gradient-to-br from-accent-50 to-surface-light dark:from-accent-900/20 dark:to-gray-800 shine-effect">
              <h2 className="text-3xl font-serif font-bold text-accent-600 dark:text-accent-400 mb-3">
                Portfolio
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Check out my projects and development work.
              </p>
            </Link>
          </div>

          {/* Right Column - Floating Image */}
          <div className="flex items-center justify-center relative order-1 lg:order-2">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400/30 to-primary-400/30 blur-2xl rounded-full" />
              {/* Image with glasses in light mode, without glasses in dark mode */}
              <Image
                 src="/images/glasses-positioned.png"
                 alt="Krystal Elliott"
                 width={320}
                 height={320}
                 className="relative w-64 h-64 md:w-80 md:h-80 object-contain rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out dark:hidden"
                 priority
              />
              <Image
                 src="/images/krystalelliott-nobg.png"
                 alt="Krystal Elliott"
                 width={320}
                 height={320}
                 className="relative w-64 h-64 md:w-80 md:h-80 object-contain rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out hidden dark:block"
                 priority
              />
              <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 text-center rotate-3">
                <div className="inline-block relative">
                  <span 
                    className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 dark:from-accent-400 dark:to-primary-400 bg-clip-text text-transparent"
                    style={{ fontFamily: 'var(--font-press-start-2p)' }}
                  >
                    {typedText}
                  </span>
                  {showCursor && (
                    <span className="inline-block w-0.5 h-6 md:h-8 bg-accent-600 dark:bg-accent-400 animate-blink ml-1 align-middle" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="mb-8 animate-fade-in-up">
          <TestimonialCarousel />
        </div>

        {/* Smaller Cards Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* About - Half width */}
          <Link href="/about" className="card p-8 hover:shadow-soft-lg hover:scale-[1.05] transition-all duration-300 cursor-pointer shine-effect">
            <h2 className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-3">
              About
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Learn more about my interests, hobbies, and background.
            </p>
          </Link>

          {/* Contact - Half width */}
          <Link href="/contact" className="card p-8 hover:shadow-soft-lg hover:scale-[1.05] transition-all duration-300 cursor-pointer shine-effect">
            <h2 className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-3">
              Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Get in touch to discuss opportunities or just say hello.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
