'use client';

import { Category } from '@/types';

interface FilterBarProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryToggle: (categoryId: string) => void;
  onClearFilters: () => void;
}

export default function FilterBar({
  categories,
  selectedCategories,
  onCategoryToggle,
  onClearFilters,
}: FilterBarProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h2 className="text-lg font-serif font-semibold text-gray-800 dark:text-gray-100 mr-4">
          Filter by Category
        </h2>
        <button
          onClick={onClearFilters}
          className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="Clear all filters"
        >
          Clear Filters
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryToggle(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategories.includes(category.id)
                ? 'bg-primary-600 text-white shadow-md hover:bg-primary-700'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-label={`Filter by ${category.name}`}
            aria-pressed={selectedCategories.includes(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
