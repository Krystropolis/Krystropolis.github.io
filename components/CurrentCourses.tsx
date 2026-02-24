                            import { Course } from '@/types';
import { ExternalLink } from 'lucide-react';

interface CurrentCoursesProps {
  courses: Course[];
}

function getStatusColor(status: Course['status']): string {
  switch (status) {
    case 'In Progress':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    case 'Completed':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
    case 'Upcoming':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
  }
}

export default function CurrentCourses({ courses }: CurrentCoursesProps) {
  if (!courses || courses.length === 0) {
    return null;
  }

  return (
    <section className="mb-10" aria-labelledby="courses-heading">
      <h2
        id="courses-heading"
        className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700"
      >
        Current Courses
      </h2>
      <div className="space-y-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800 last:border-0"
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-primary-600 dark:text-primary-400 text-lg">
                {course.name}
              </h3>
              {course.link ? (
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 underline transition-colors"
                >
                  {course.platform}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {course.platform}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 ml-4 justify-end">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}
              >
                {course.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
