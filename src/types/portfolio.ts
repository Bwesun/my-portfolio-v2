export interface NavItem {
  label: string;
  href: string;
}

export type SocialIconKey = 'github' | 'linkedin' | 'email' | 'portfolio';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconKey;
}

export interface Skill {
  name: string;
  level: number;
}

export type SkillIconKey = 'code' | 'server' | 'smartphone' | 'sparkles' | 'wrench';

export interface SkillCategory {
  id: string;
  title: string;
  icon: SkillIconKey;
  skills: Skill[];
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarInitials: string;
}