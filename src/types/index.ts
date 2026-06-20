export interface Project {
    slug: string;
    title: string;
    tagline?: string;
    description: string;
    longDescription?: string;
    image: string;
    technologies: string[];
    features?: { title: string; description: string }[];
    challenges?: { problem: string; solution: string }[];
    role?: string;
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface Metadata {
    title: string;
    description: string;
    keywords?: string[];
    author?: string;
    ogImage?: string;
}