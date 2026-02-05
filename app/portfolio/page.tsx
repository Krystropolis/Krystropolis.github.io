'use client';

import { useState, useEffect, useMemo } from 'react';
import { loadPortfolioData } from '@/lib/data';
import { Project } from '@/types';
import FilterBar from '@/components/Portfolio/FilterBar';
import SearchBar from '@/components/Portfolio/SearchBar';
import ProjectCard from '@/components/Portfolio/ProjectCard';
import EmptyState from '@/components/Portfolio/EmptyState';

export default function PortfolioPage() {
  const [data, setData] = useState<any>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Load portfolio data on mount
  useEffect(() => {
    loadPortfolioData().then(setData);
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    if (!data) return [];

    let projects = [...data.projects];

    // Filter by categories (OR logic - project matches if it has ANY selected category)
    if (selectedCategories.length > 0) {
      projects = projects.filter((project: Project) =>
        project.categories.some((category: string) => selectedCategories.includes(category))
      );
    }

    // Filter by search query (checks title, description, and technologies)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      projects = projects.filter(
        (project: Project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some((tech: string) => tech.toLowerCase().includes(query))
      );
    }

    // Sort by year in reverse chronological order (newest first)
    return projects.toSorted((a, b) => b.year - a.year);
  }, [data, selectedCategories, searchQuery]);

  // Handle category toggle
  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev: string[]) =>
      prev.includes(categoryId)
        ? prev.filter((id: string) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Handle search change
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery('');
  };

  // Clear search only
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  // Check if any filters are active
  const hasActiveFilters = selectedCategories.length > 0 || searchQuery.trim() !== '';

  if (!data) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 dark:border-gray-700 border-t-primary-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 dark:text-gray-100 mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Various development projects and endeavors.{' '}
            <a
              href="mailto:e.krystal@gmail.com"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Contact me
            </a>
            {' '}
            to learn more.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          categories={data.categories}
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
          onClearFilters={handleClearFilters}
        />

        {/* Search Bar */}
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onClearSearch={handleClearSearch}
        />

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            onClearFilters={handleClearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        )}
      </div>
    </div>
  );
}
