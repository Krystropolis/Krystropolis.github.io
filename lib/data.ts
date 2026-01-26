import { ResumeData, PortfolioData, AboutData, ContactData } from '@/types';

/**
 * Format a date string from "YYYY-MM" format to "MMM YYYY" format (e.g., "Feb 2018")
 * @param dateString - Date string in "YYYY-MM" format or null
 * @returns Formatted date string or "Present" if null
 */
export function formatDate(dateString: string | null): string {
  if (!dateString) return 'Present';
  
  const [year, month] = dateString.split('-');
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  const monthIndex = parseInt(month, 10) - 1;
  return `${monthNames[monthIndex]} ${year}`;
}

// Use dynamic imports for JSON files - Next.js handles this automatically
export async function loadResumeData(): Promise<ResumeData> {
  const data = await import('@/data/resume.json');
  return data.default as ResumeData;
}

export async function loadPortfolioData(): Promise<PortfolioData> {
  const data = await import('@/data/portfolio.json');
  return data.default as PortfolioData;
}

export async function loadAboutData(): Promise<AboutData> {
  const data = await import('@/data/about.json');
  return data.default as AboutData;
}

export async function loadContactData(): Promise<ContactData> {
  const data = await import('@/data/contact.json');
  return data.default as ContactData;
}
