"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
interface WorkCardProps {
  company: string;
  title: string;
  period: string;
  description?: string;
  positionType?: string;
}

export const WorkCard = ({
  company,
  title,
  period,
  description,
  positionType,
}: WorkCardProps) => {
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
        <div className="w-full flex flex-col">
          <div className="flex items-start gap-4 w-full">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between w-full">
                  <h3 className="inline-flex items-center group font-medium">
                    {company}
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
                  <div className="text-sm tabular-nums text-muted-foreground">
                    {period}
                  </div>
                </div>

                <div className="flex items-start justify-between w-full">
                  <div className="text-sm">{title}</div>
                  {positionType && (
                    <div className="text-xs text-muted-foreground ml-2">
                      {positionType}
                    </div>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {description && isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm overflow-hidden text-muted-foreground"
                  >
                    {description}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
