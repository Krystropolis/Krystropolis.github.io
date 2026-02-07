'use client';

import { useState, useEffect } from 'react';
import { loadAboutData } from '@/lib/data';
import { AboutData } from '@/types';
import { Quote, Mountain } from 'lucide-react';
import Image from 'next/image';
import InterestCard from '@/components/InterestCard';

export default function AboutPage() {
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    loadAboutData().then(setData);
  }, []);

  if (!data) return null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Professional background, interests, and journey
            </p>
          </div>
        </div>

        {/* My Story */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.15s' }} aria-labelledby="story-heading">
          <h2 id="story-heading" className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-6">
            My Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {data.story.journey}
          </p>
        </section>

        {/* Quote Section - Large centered with decorative marks */}
        <section className="relative py-12 md:py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* Large decorative quote mark */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-primary-300 dark:text-primary-800">
            <Quote className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          <div className="text-center relative z-10">
            <blockquote className="text-2xl md:text-4xl font-serif text-gray-800 dark:text-gray-100 leading-relaxed font-medium px-8 md:px-12">
              {data.about.unique}
            </blockquote>
          </div>
        </section>

        {/* Beyond Code - Featured Spotlight Layout */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }} aria-labelledby="interests-heading">
          <h2 id="interests-heading" className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-8">
            Beyond Code
          </h2>

          {/* Featured Interest Card - Nature */}
          <div className="mb-8 relative rounded-2xl overflow-hidden shadow-soft-lg group">
            <Image
              src={data.interests[5].image!}
              alt={data.interests[5].title}
              width={1200}
              height={500}
              className="w-full h-[400px] md:h-[500px] object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Mountain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white drop-shadow-lg">
                  {data.interests[5].title}
                </h3>
              </div>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl">
                {data.interests[5].description}
              </p>
            </div>
          </div>

          {/* Supporting Cards - Row 1: Three Text Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <InterestCard interest={data.interests[0]} index={0} />
            <InterestCard interest={data.interests[1]} index={1} />
            <InterestCard interest={data.interests[2]} index={2} />
          </div>

          {/* Supporting Cards - Row 2: Two Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InterestCard interest={data.interests[3]} index={3} />
            <InterestCard interest={data.interests[4]} index={4} />
          </div>
        </section>
      </div>
    </div>
  );
}
