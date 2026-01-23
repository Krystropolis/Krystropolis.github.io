import { ResumeData, PortfolioData, AboutData } from '@/types';

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
