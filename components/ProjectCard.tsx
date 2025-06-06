"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
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
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="block w-full cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="w-full py-4"
      >
        <div className="w-full flex flex-col space-y-2">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-2">
              <h3 className="inline-flex items-center group font-medium">
                {title}
                <motion.div
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRightIcon
                    className={cn(
                      "ml-1 size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                    )}
                  />
                </motion.div>
              </h3>
              <p className="text-sm text-muted-foreground">
                {shortDescription}
              </p>
            </div>
            <span className="text-sm tabular-nums text-muted-foreground">
              {period}
            </span>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-sm overflow-hidden text-muted-foreground"
              >
                <p className="mb-4">{description}</p>
                <div className="flex justify-end">
                  <div className="flex flex-wrap gap-1.5">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-0.5 border border-dashed border-muted-foreground/40"
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
    </div>
  );
};
