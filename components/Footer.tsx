import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Krystal Elliott. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <nav aria-label="Social media links">
            <ul className="flex items-center justify-center md:justify-end space-x-3">
              <li>
                <a
                  href="https://krystropolis.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Visit my blog (opens in new tab)"
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5 4.364 5 2.457 6.477 2 9c0 2.578 1.715 4.866 4.247 6.39C3.902 16.423 2.5 18.5 2.5 21c0 2.478 1.377 4.577 3.419 5.914.523.523.023 1.008.542 1.49.058.498.143-.745-.235-1.423-.417-2.075-.292-.564-.497-1.054-.617-1.485-.083-.486-.056-1.01.172-1.535-.245-.525-.427-1.112-.612-1.745-.082-.479-.007-1.013.138-1.493.277-.532.427-1.088.617-1.652.09-.487.057-.985-.174-1.446-.272-.532-.426-1.132-.597-1.725.083-.479.072-.98.174-1.497.342-.532.426-1.132.597-1.725.093-.487.073-.987.176-1.447.342-.532.426-1.132.597-1.725.093-.487.072-.987.176-1.447.342-.532.426-1.132.597-1.725z"
                    />
                  </svg>
                  <span className="sr-only">Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:e.krystal@gmail.com"
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Send me an email"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="sr-only">Email</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <nav aria-label="Additional links">
            <ul className="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                >
                  Résumé
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
