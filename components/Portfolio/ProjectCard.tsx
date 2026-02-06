'use client';

import { useState } from 'react';
import { Project } from '@/types';
import { Star } from 'lucide-react';
import Image from 'next/image';
import ImageLightbox from './ImageLightbox';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    setSelectedImageIndex(prev => {
      if (prev !== null && project.images) {
        return (prev + 1) % project.images.length;
      }
      return prev;
    });
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex(prev => {
      if (prev !== null && project.images) {
        return (prev - 1 + project.images.length) % project.images.length;
      }
      return prev;
    });
  };
  return (
    <article className="card p-6 md:p-8 hover:shadow-soft-lg transition-shadow duration-300">
      {/* Featured Badge */}
      {project.featured && (
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-sm">
            <Star className="w-4 h-4 mr-1" aria-hidden="true" />
            Featured
          </span>
        </div>
      )}

      {/* Project Title */}
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 dark:text-gray-100 mb-4">
        {project.title}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {project.year}
      </p>

      {/* Project Image */}
      {project.images && project.images.length > 0 && (
        <div
          className="mb-6 relative overflow-hidden rounded-lg cursor-pointer group"
          onClick={() => handleImageClick(0)}
          role="button"
          tabIndex={0}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleImageClick(0);
            }
          }}
          aria-label={`Open ${project.title} image in lightbox`}
        >
          <Image
            src={project.images[0]}
            alt={`${project.title} project screenshot`}
            width={800}
            height={600}
            className="w-full h-auto object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
            priority={project.featured}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Project Description */}
      <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h3 className="text-lg font-serif font-semibold text-gray-800 dark:text-gray-100 mb-3">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Additional Images */}
      {project.images && project.images.length > 1 && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {project.images.slice(1).map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => handleImageClick(index + 1)}
              role="button"
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleImageClick(index + 1);
                }
              }}
              aria-label={`Open ${project.title} additional screenshot ${index + 1} in lightbox`}
            >
              <Image
                src={image}
                alt={`${project.title} additional screenshot ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-auto object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Links */}
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label={`${link.label} (opens in new tab)`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Image Lightbox */}
      {project.images && selectedImageIndex !== null && (
        <ImageLightbox
          images={project.images}
          selectedIndex={selectedImageIndex}
          isOpen={isLightboxOpen}
          onClose={handleCloseLightbox}
          onNext={project.images.length > 1 ? handleNextImage : undefined}
          onPrevious={project.images.length > 1 ? handlePreviousImage : undefined}
        />
      )}
    </article>
  );
}
