"use client"
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, GithubIcon } from "lucide-react";
import type { Metadata } from "next";
import { projects } from "./project-data";



export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (

    <section className="w-full">
      <h1 className="mb-6 text-2xl font-bold">Projects</h1>

      {/* Reduced gap and subtle gray hover, clickable anywhere */}
      <div className="space-y-2">
        {projects.map((project, index) => {
          const isExpanded = index === expandedIndex;

          return (
            <article
              key={index}
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              className="p-4 rounded-lg transition-colors cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>

                {/* Chevron purely visual; toggle handled by article click */}
                <div className="p-2 text-neutral-500">
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="mt-2 text-black dark:text-white">
                  {project.long_description}
                </p>

                <div className="mt-3">
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    Technologies:
                  </span>
                  <ul className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-neutral-700 dark:text-neutral-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex space-x-4">
                  <Link
                    href={project.live_demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-neutral-500 hover:text-neutral-600 no-underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                    <span className="sr-only">Live Demo</span>
                  </Link>

                  <Link
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-neutral-500 hover:text-neutral-600 no-underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={20} />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </motion.div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
