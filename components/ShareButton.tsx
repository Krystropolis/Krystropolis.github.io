'use client';

import { useState, useRef, useEffect } from 'react';
import { Share, Copy, Mail, Download } from 'lucide-react';

interface ShareButtonProps {
  className?: string;
}

export default function ShareButton({ className = '' }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  const handleOptionKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  // Copy link to clipboard
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setIsOpen(false);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Share via email
  const shareViaEmail = () => {
    const subject = encodeURIComponent('Check out this resume');
    const body = encodeURIComponent(`I wanted to share this resume with you:\n\n${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setIsOpen(false);
  };

  // Download/Print PDF
  const downloadPDF = () => {
    setIsOpen(false);
    // Small delay to ensure dropdown is closed before print dialog opens
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
          }
        }}
        className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors ${className}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Share options"
      >
        <Share className="w-4 h-4" />
        <span>Share</span>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          role="menu"
          aria-labelledby="share-button"
          aria-orientation="vertical"
          tabIndex={-1}
          className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
          onKeyDown={handleKeyDown}
        >
          {/* Copy Link */}
          <button
            onClick={copyLink}
            onKeyDown={(e) => handleOptionKeyDown(e, copyLink)}
            role="menuitem"
            className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 transition-colors"
          >
            <Copy className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>

          {/* Share via Email */}
          <button
            onClick={shareViaEmail}
            onKeyDown={(e) => handleOptionKeyDown(e, shareViaEmail)}
            role="menuitem"
            className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 transition-colors"
          >
            <Mail className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span>Share via Email</span>
          </button>

          {/* Download PDF */}
          <button
            onClick={downloadPDF}
            onKeyDown={(e) => handleOptionKeyDown(e, downloadPDF)}
            role="menuitem"
            className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 transition-colors"
          >
            <Download className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span>Download PDF</span>
          </button>
        </div>
      )}
    </div>
  );
}
