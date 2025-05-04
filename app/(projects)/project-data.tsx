export interface Project {
  title: string;
  year: number;
  description: string;
  github_url: string;
  live_demo: string;
  technologies: string[];
  // image_path: string;
}

export const projects: Project[] = [
  {
    title: "Brmj",
    year: 2025,
    description: "Online code edtior",
    github_url: "https://github.com/mithrilai",
    live_demo: "google.com",
    technologies: ["Typescript", "Convex", "Clerk", "Next"],
  },
  {
    title: "Portoflio",
    year: 2025,
    description: "This very website",
    github_url: "https://opendeeplearning.xyz/",
    live_demo: "google.com",
    technologies: ["Next", "Typescript"],
  },
];
