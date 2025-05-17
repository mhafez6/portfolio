"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  description: string;
  period: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const ProjectCard = ({
  title,
  shortDescription,
  description,
  period,
  technologies,
  githubUrl,
  demoUrl,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="w-full flex flex-col p-4">
        {/* Header */}
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-1">
            <h3 className="inline-flex items-center font-bold">
              {title}
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="ml-1"
              >
                <ChevronRightIcon className="h-4 w-4 text-muted-foreground transform transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </motion.div>
            </h3>
            <p className="text-sm text-muted-foreground">
              {shortDescription}
            </p>
          </div>
          {/* Icons and period */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {githubUrl && (
                <Link
                  href={githubUrl}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  className="text-muted-foreground/60 hover:text-foreground transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                </Link>
              )}
              {demoUrl && (
                <Link
                  href={demoUrl}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  className="text-muted-foreground/60 hover:text-foreground transition-colors"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                </Link>
              )}
              <span className="text-sm tabular-nums text-muted-foreground">
                {period}
              </span>
            </div>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-4 space-y-4"
            >
              <p className="text-sm text-muted-foreground">{description}</p>
              <div className="flex justify-end">
                <div className="flex flex-wrap gap-1">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-0.5 border border-dashed border-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
