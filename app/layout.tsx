import type { Metadata } from 'next';
import { Inter, Playfair_Display, Press_Start_2P } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const pressStart2P = Press_Start_2P({ subsets: ['latin'], variable: '--font-press-start-2p', weight: '400' });

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
      <body className={`${inter.variable} ${playfair.variable} ${pressStart2P.variable} font-sans bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-200 min-h-screen grid grid-rows-[auto_1fr_auto]`}>
        <div className="topography-background" aria-hidden="true" />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header className="no-print" />
        <main id="main-content">
          {children}
        </main>
        <Footer className="no-print" />
      </body>
    </html>
  );
}
