'use client';

import { useEffect, KeyboardEvent, MouseEvent, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type ButtonMouseEvent = MouseEvent<HTMLButtonElement>;

interface ImageLightboxProps {
  images: string[];
  selectedIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function ImageLightbox({
  images,
  selectedIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: ImageLightboxProps) {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrevious) {
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen) return null;

  const hasMultipleImages = images.length > 1;
  const currentImage = images[selectedIndex];

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:text-gray-200 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Previous button */}
      {hasMultipleImages && onPrevious && (
        <button
          onClick={(e: ButtonMouseEvent) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-200 transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={48} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
      >
        <Image
          src={currentImage}
          alt={`Enlarged view ${selectedIndex + 1} of ${images.length}`}
          width={1200}
          height={900}
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
          priority
        />
        {/* Image counter */}
        {hasMultipleImages && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 text-white text-sm rounded-full backdrop-blur-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Next button */}
      {hasMultipleImages && onNext && (
        <button
          onClick={(e: ButtonMouseEvent) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-200 transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight size={48} />
        </button>
      )}
    </div>
  );
}
