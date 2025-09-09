export interface Project {
  title: string;
  description: string[];
  links?: {
    live?: string;
    github?: string;
  };
  technologies?: string;
}