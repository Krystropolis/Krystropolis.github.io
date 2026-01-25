import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 animate-fade-in-up py-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
            Welcome to <span className="text-primary-600 dark:text-primary-400">Krystropolis</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Software Engineer & Creative Problem Solver
          </p>
        </div>

        {/* Cards Section - Staggered Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Resume - Full width */}
          <Link href="/resume" className="md:col-span-2 card p-10 hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-800">
            <h2 className="text-3xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-3">
              Resume
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore my professional experience, education, and technical skills.
            </p>
          </Link>

          {/* Portfolio - Full width */}
          <Link href="/portfolio" className="md:col-span-2 card p-10 hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-gradient-to-br from-accent-50 to-white dark:from-accent-900/20 dark:to-gray-800">
            <h2 className="text-3xl font-serif font-bold text-accent-600 dark:text-accent-400 mb-3">
              Portfolio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Check out my projects and development work.
            </p>
          </Link>

          {/* About - Half width */}
          <Link href="/about" className="card p-8 hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <h2 className="text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-3">
              About
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Learn more about my interests, hobbies, and background.
            </p>
          </Link>

          {/* Contact - Half width */}
          <Link href="/contact" className="card p-8 hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
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
