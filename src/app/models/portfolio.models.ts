export interface NavLink {
  label: string;
  path: string;
  id: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: 'government' | 'enterprise' | 'startup' | 'freelance';
}

export interface Project {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  problem: string;
  features: string[];
  category: ProjectCategory;
  techStack: string[];
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year?: string;
  role?: string;
  platform?: string;
  accent?: string;
  status?: 'live' | 'in-development' | 'case-study';
  metrics?: { label: string; value: string }[];
}

export type ProjectCategory =
  | 'all'
  | 'flutter'
  | 'angular'
  | 'admin'
  | 'saas'
  | 'fintech'
  | 'mobile'
  | 'fullstack';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  url?: string;
  icon: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  location?: string;
  featured?: boolean;
}
