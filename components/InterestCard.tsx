'use client';

import { Interest } from '@/types';
import { Cpu, Book, Dumbbell, Heart, Palette, Mountain, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface InterestCardProps {
  interest: Interest;
  index: number;
}

export default function InterestCard({ interest, index }: InterestCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    switch (interest.title) {
      case 'Creative Coding': return <Cpu className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
      case 'Continuous Learning': return <Book className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
      case 'Fitness': return <Dumbbell className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
      case 'Philanthropy': return <Heart className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
      case 'Art': return <Palette className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
      case 'Nature': return <Mountain className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
      default: return null;
    }
  };

  return (
    <article
      onClick={() => setIsExpanded(!isExpanded)}
      className="card p-4 cursor-pointer hover:shadow-soft-lg transition-shadow duration-300"
      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {getIcon()}
          <h3 className="text-lg font-serif font-semibold text-gray-900 dark:text-gray-100">
            {interest.title}
          </h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300" />
        )}
      </div>
      <p
        className={`text-sm text-gray-700 dark:text-gray-300 transition-all duration-300 ${
          isExpanded ? 'max-h-none line-clamp-none' : 'line-clamp-2 max-h-10'
        }`}
      >
        {interest.description}
      </p>
      {isExpanded && interest.image && (
        <div className="mt-4 animate-fade-in">
          <img
            src={interest.image}
            alt={interest.title}
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      )}
    </article>
  );
}
