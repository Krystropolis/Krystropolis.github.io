import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
            Welcome to <span className="text-primary-600 dark:text-primary-400">Krystropolis</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Software Engineer & Creative Problem Solver
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Link href="/resume" className="card p-8 hover:shadow-soft-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-3">
              Resume
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore my professional experience, education, and technical skills.
            </p>
          </Link>

          <Link href="/portfolio" className="card p-8 hover:shadow-soft-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-3">
              Portfolio
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Check out my projects and development work.
            </p>
          </Link>

          <Link href="/about" className="card p-8 hover:shadow-soft-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-3">
              About
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Learn more about my interests, hobbies, and background.
            </p>
          </Link>

          <Link href="/contact" className="card p-8 hover:shadow-soft-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-3">
              Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Get in touch to discuss opportunities or just say hello.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
