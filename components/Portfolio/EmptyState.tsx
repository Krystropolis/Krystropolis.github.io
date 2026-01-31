'use client';

interface EmptyStateProps {
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export default function EmptyState({
  onClearFilters,
  hasActiveFilters,
}: EmptyStateProps) {
  return (
    <div className="text-center py-16 px-4">
      <div className="max-w-md mx-auto">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <svg
            className="w-24 h-24 text-gray-300 dark:text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 018-8 4 4 0 01-8-4-4-4 019.656 9.172 16.172zm5.172 5.172a4 4 0 014 8 4 0 014-8 4-4-4 019.656 5.172 5.172z"
            />
          </svg>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-serif font-bold text-gray-800 dark:text-gray-100 mb-4">
          No projects found
        </h2>
        
        {hasActiveFilters ? (
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Try adjusting your filters or search terms to find what you&apos;re looking for.
          </p>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            There are no projects matching your current criteria.
          </p>
        )}

        {/* Clear Filters Button */}
        <button
          onClick={onClearFilters}
          className="btn btn-primary"
          aria-label="Clear all filters and search"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
