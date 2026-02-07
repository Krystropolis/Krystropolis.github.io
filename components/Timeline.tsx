'use client';

import { Milestone } from '@/types';

interface TimelineProps {
  milestones: Milestone[];
}

/**
 * Timeline Component
 * 
 * This component displays a vertical timeline of milestones with years on the left
 * and milestone details on the right. It's currently not used in the About page
 * but is saved here for potential future reimplementation.
 * 
 * @example
 * ```tsx
 * <Timeline milestones={data.story.milestones} />
 * ```
 */
export default function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="space-y-8">
      {milestones.map((milestone: Milestone, index: number) => (
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
  );
}
