import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            Welcome to Krystropolis!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Software Engineer & Creative Problem Solver
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/resume"
              className="btn btn-primary"
            >
              View Résumé
            </Link>
            <Link
              href="/portfolio"
              className="btn btn-secondary"
            >
              View Portfolio
            </Link>
            <Link
              href="/about"
              className="btn btn-secondary"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 animate-slide-up">
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-3">
              Résumé
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore my professional experience, education, and technical skills.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-3">
              Portfolio
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Check out my projects and development work.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-3">
              About
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Learn more about my interests, hobbies, and background.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
