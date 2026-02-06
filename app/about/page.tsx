'use client';

import { useState, useEffect, useRef } from 'react';
import { loadAboutData } from '@/lib/data';
import { AboutData, Milestone } from '@/types';
import { Quote } from 'lucide-react';
import InterestCard from '@/components/InterestCard';

export default function AboutPage() {
  const [data, setData] = useState<AboutData | null>(null);
  const [textCardHeights, setTextCardHeights] = useState<number[]>([]);
  const [imageCardHeight, setImageCardHeight] = useState<number>(0);
  const textCardRef0 = useRef<HTMLDivElement>(null);
  const textCardRef1 = useRef<HTMLDivElement>(null);
  const textCardRef2 = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadAboutData().then(setData);
  }, []);

  useEffect(() => {
    if (data) {
      // Measure heights of all text cards
      const heights = [
        textCardRef0.current?.offsetHeight || 0,
        textCardRef1.current?.offsetHeight || 0,
        textCardRef2.current?.offsetHeight || 0,
      ].filter(h => h > 0);

      // Measure image card height (art card)
      const imgHeight = imageCardRef.current?.offsetHeight || 0;

      setTextCardHeights(heights);
      setImageCardHeight(imgHeight);
    }
  }, [data]);

  // Calculate the target height for text cards: tallest text card + image card height
  const targetTextCardHeight = textCardHeights.length > 0
    ? Math.max(...textCardHeights) + imageCardHeight
    : 0;

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

        {/* Quote Section - Large centered with decorative marks */}
        <section className="relative py-12 md:py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-10 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
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

        {/* My Story */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }} aria-labelledby="story-heading">
          <h2 id="story-heading" className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-6">
            My Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
            {data.story.journey}
          </p>

          {/* Timeline */}
          <div className="space-y-8">
            {data.story.milestones.map((milestone: Milestone, index: number) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1 pb-6 border-l-2 border-gray-200 dark:border-gray-700 pl-4 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Beyond Code */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }} aria-labelledby="interests-heading">
          <h2 id="interests-heading" className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-8">
            Beyond Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <InterestCard 
                interest={data.interests[0]} 
                index={0} 
                ref={textCardRef0}
                minHeight={targetTextCardHeight}
              />
              <InterestCard 
                interest={data.interests[3]} 
                index={3} 
                ref={imageCardRef}
              />
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <InterestCard interest={data.interests[4]} index={4} />
              <InterestCard 
                interest={data.interests[1]} 
                index={1} 
                ref={textCardRef1}
                minHeight={targetTextCardHeight}
              />
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <InterestCard 
                interest={data.interests[2]} 
                index={2} 
                ref={textCardRef2}
                minHeight={targetTextCardHeight}
              />
              <InterestCard interest={data.interests[5]} index={5} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
