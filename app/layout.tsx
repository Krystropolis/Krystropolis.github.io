import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Krystropolis - Krystal Elliott',
  description: 'Software Engineer portfolio and resume for Krystal Elliott',
  keywords: ['Software Engineer', 'Web Developer', 'Portfolio', 'Resume'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header className="no-print" />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer className="no-print" />
      </body>
    </html>
  );
}
