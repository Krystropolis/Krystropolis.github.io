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

export interface Internship {
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

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  expert?: Skill[];
  advanced?: Skill[];
  intermediate?: Skill[];
  novice?: Skill[];
}

export interface Skills {
  programming: SkillCategory;
  databases: Skill[];
  tools: Skill[];
  languages: Skill[];
}

export interface ResumeData {
  contact: Contact;
  experience: Experience[];
  internships: Internship[];
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
  image?: string | null;
  category?: 'professional' | 'personal' | 'community';
}

export interface Hero {
  name: string;
  title: string;
  tagline: string;
}

export interface About {
  summary: string;
  values: string[];
  unique: string;
}

export interface CurrentFocus {
  role: string;
  learning: string[];
  technologies: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Story {
  journey: string;
  milestones: Milestone[];
}

export interface LookingFor {
  opportunities: string[];
  collaboration: string;
}

export interface AboutData {
  hero: Hero;
  about: About;
  currentFocus: CurrentFocus;
  story: Story;
  interests: Interest[];
  lookingFor: LookingFor;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface FormField {
  label: string;
  placeholder: string;
  required: boolean;
  type?: string;
  rows?: number;
}

export interface FormConfig {
  fields: {
    name: FormField;
    email: FormField;
    subject: FormField;
    message: FormField;
  };
  honeypot: {
    name: string;
    label: string;
  };
  submit: {
    label: string;
    successMessage: string;
    errorMessage: string;
  };
}

export interface ContactData {
  title: string;
  subtitle: string;
  email: string;
  location: string;
  socialLinks: SocialLink[];
  form: FormConfig;
  emailFallback: {
    label: string;
    linkText: string;
  };
}
