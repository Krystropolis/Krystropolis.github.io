'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

interface ResumeNavigationProps {
  sections: NavItem[];
  activeSection: string;
}

export default function ResumeNavigation({ sections, activeSection }: ResumeNavigationProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (isMobile) {
    return (
      <nav className="sticky top-16 z-40 bg-surface-light dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm no-print">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-4 whitespace-nowrap">
            {sections.map((section: NavItem) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="hidden md:block sticky top-20 z-40 w-64 flex-shrink-0 no-print">
      <div className="bg-surface-light dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        <h3 className="text-lg font-serif font-bold text-gray-800 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Quick Navigation
        </h3>
        <ul className="space-y-2">
          {sections.map((section: NavItem) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeSection === section.id
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeSection === section.id ? 'rotate-0' : '-rotate-90'
                  }`}
                />
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
