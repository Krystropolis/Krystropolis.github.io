'use client';

import { useState, useEffect, useCallback, ChangeEvent, useRef } from 'react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
}

export default function SearchBar({
  searchQuery,
  onSearchChange,
  onClearSearch,
}: SearchBarProps) {
  const [localQuery, setLocalQuery] = useState(searchQuery);

  // Use refs to avoid unnecessary re-renders when callbacks change
  const onSearchChangeRef = useRef(onSearchChange);
  const onClearSearchRef = useRef(onClearSearch);

  // Update refs when callbacks change
  onSearchChangeRef.current = onSearchChange;
  onClearSearchRef.current = onClearSearch;

  // Debounce function to delay search until user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChangeRef.current(localQuery);
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timer);
  }, [localQuery]);

  // Sync local state with prop changes (e.g., when cleared from parent)
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  const handleClear = useCallback(() => {
    setLocalQuery('');
    onClearSearchRef.current();
  }, []);

  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          value={localQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setLocalQuery(e.target.value)}
          placeholder="Search projects..."
          className="w-full px-4 py-3 pl-12 pr-12 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          aria-label="Search projects"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {localQuery && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Clear search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
