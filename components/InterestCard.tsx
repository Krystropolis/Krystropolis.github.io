'use client';

import { forwardRef } from 'react';
import Image from 'next/image';
import { Interest } from '@/types';
import { Cpu, Book, Dumbbell, Heart, Palette, Mountain } from 'lucide-react';

interface InterestCardProps {
  interest: Interest;
  index: number;
  minHeight?: number;
}

export interface InterestCardRef {
  minHeight?: number;
}

const InterestCard = forwardRef<HTMLDivElement, InterestCardProps>(({ interest, index, minHeight }, ref) => {
  const getIcon = (isImageCard: boolean = false) => {
    const iconColor = isImageCard ? 'text-white' : 'text-primary-600 dark:text-primary-400';
    switch (interest.title) {
      case 'Creative Coding': return <Cpu className={`w-5 h-5 ${iconColor}`} />;
      case 'Continuous Learning': return <Book className={`w-5 h-5 ${iconColor}`} />;
      case 'Fitness': return <Dumbbell className={`w-5 h-5 ${iconColor}`} />;
      case 'Philanthropy': return <Heart className={`w-5 h-5 ${iconColor}`} />;
      case 'Art': return <Palette className={`w-5 h-5 ${iconColor}`} />;
      case 'Nature': return <Mountain className={`w-5 h-5 ${iconColor}`} />;
      default: return null;
    }
  };

  const isImageCard = interest.cardType === 'image' && interest.image;
  const cardContent = isImageCard ? (
    <>
      {/* Image Background */}
      <Image
        src={interest.image!}
        alt={interest.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Title and Icon Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
            {getIcon(true)}
          </div>
          <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg">
            {interest.title}
          </h3>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
          {getIcon(false)}
        </div>
        <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-gray-100">
          {interest.title}
        </h3>
      </div>
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        {interest.description}
      </p>
    </>
  );

  const cardElement = (
    <article
      ref={ref}
      className={`${isImageCard
        ? 'relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 aspect-square'
        : 'p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col'
      } ${interest.url ? 'cursor-pointer' : ''}`}
      style={{
        animationDelay: `${0.5 + index * 0.1}s`,
        minHeight: minHeight ? `${minHeight}px` : undefined
      }}
    >
      {cardContent}
    </article>
  );

  // Wrap in link if URL is provided
  if (interest.url) {
    return (
      <a
        href={interest.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Learn more about ${interest.title}`}
      >
        {cardElement}
      </a>
    );
  }

  return cardElement;
});

InterestCard.displayName = 'InterestCard';

export default InterestCard;
