export interface Contact {
  email: string;
  location?: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  graduationDate: string;
  gpa?: string;
}

export interface SkillCategory {
  intermediate?: string[];
  novice?: string[];
}

export interface Skills {
  programming: SkillCategory;
  databases: string[];
  tools: string[];
  languages: string[];
}

export interface ResumeData {
  contact: Contact;
  experience: Experience[];
  education: Education[];
  skills: Skills;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export interface PortfolioData {
  projects: Project[];
}

export interface Interest {
  title: string;
  description: string;
  image?: string;
}

export interface AboutData {
  intro: string;
  interests: Interest[];
}
