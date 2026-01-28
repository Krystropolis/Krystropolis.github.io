export default function Footer({ className = '' }: { className?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 mt-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            © {currentYear} Krystal Elliott. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
