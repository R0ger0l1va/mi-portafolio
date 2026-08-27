// data/portfolio.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category: "frontend" | "backend" | "tools" | "soft";
  iconUrl?: string;
  lucideIcon?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string[];
    bio: string;
    generalBio: string;
    objetive: string;
    avatar: string;
    social: Record<string, string>;
  };
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
}
