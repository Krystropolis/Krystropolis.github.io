import { loadPortfolioData } from '@/lib/data';
import { Project } from '@/types';

export default async function PortfolioPage() {
  const data = await loadPortfolioData();

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Various development projects and endeavors.{' '}
            <a
              href="mailto:e.krystal@gmail.com"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Contact me
            </a>
            {' '}
            to learn more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {data.projects.map((project: Project, index: number) => (
            <article
              key={index}
              className="card p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                {project.title}
              </h2>

              {/* Project Image */}
              {project.images && project.images.length > 0 && (
                <div className="mb-6">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              )}

              {/* Project Description */}
              <div className="prose prose prose-gray dark:prose-invert max-w-none mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Images */}
              {project.images && project.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.images.slice(1).map((image: string, i: number) => (
                    <img
                      key={i}
                      src={image}
                      alt={`${project.title} additional screenshot ${i + 1}`}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  ))}
                </div>
              )}

              {/* Project Links */}
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link: { label: string; url: string }, i: number) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      aria-label={`View ${link.label} (opens in new tab)`}
                    >
                      {link.label}
                      <svg
                        className="w-4 h-4 ml-2 inline-block"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2h-4m-4 4h.01M5 5H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-1m-7 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
