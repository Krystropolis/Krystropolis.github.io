'use client';

import { useState } from 'react';
import { Project } from '@/types';
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
    if (selectedImageIndex !== null && project.images) {
      setSelectedImageIndex((selectedImageIndex + 1) % project.images.length);
    }
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex !== null && project.images) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + project.images.length) % project.images.length
      );
    }
  };
  return (
    <article className="card p-6 md:p-8 hover:shadow-soft-lg transition-shadow duration-300">
      {/* Featured Badge */}
      {project.featured && (
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-sm">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M11.049 2.927c.3-.921-.752-1.604-1.604C9.283 2.7 8.714 4.008 8.714s-1.717 1.304-2.447 2.008c-.727.705-1.604 1.008-2.447 1.008-.921-.752-1.604-1.604C3.717 2.7 3.148 4.008 3.148s-1.717 1.304-2.447 2.008c-.727.704-1.604 1.008-2.447 1.008-.921-.752-1.604-1.604C4.717 2.7 5.148 4.008 5.148s-1.717 1.304-2.447 2.008c-.727.704-1.604 1.008-2.447 1.008-.921-.752-1.604-1.604zm4.903 10.925l-1.604 1.604 1.604 1.604c.921 0 1.604-.752 1.604-1.604.921 0 1.604.752 1.604 1.604 1.604-.921 0-1.604.752-1.604-1.604-.921 0-1.604-.752-1.604-1.604zm-4.903 8.925l1.604-1.604c-.921 0-1.604.752-1.604 1.604-.921 0-1.604-.752-1.604-1.604-.921 0-1.604.752-1.604 1.604-1.604.921 0 1.604-.752 1.604-1.604-.921 0-1.604-.752-1.604-1.604z" />
            </svg>
            Featured
          </span>
        </div>
      )}

      {/* Project Title */}
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 dark:text-gray-100 mb-4">
        {project.title}
      </h2>

      {/* Project Image */}
      {project.images && project.images.length > 0 && (
        <div
          className="mb-6 relative overflow-hidden rounded-lg cursor-pointer group"
          onClick={() => handleImageClick(0)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
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
              onKeyDown={(e) => {
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
