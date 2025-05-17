"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface WorkCardProps {
  logoUrl: string;
  company: string;
  title: string;
  period: string;
  description?: string;
  href?: string;
  positionType?: string;
}

export const WorkCard = ({
  logoUrl,
  company,
  title,
  period,
  description,
  href = "#",
  positionType,
}: WorkCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link href={href} className="block w-full" onClick={handleClick}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="w-full"
      >
        <div className="w-full flex flex-col">
          <div className="flex items-start gap-4 w-full">
            <div className="flex-none">
              <Avatar className="border size-12 bg-background">
                <AvatarImage src={logoUrl} alt={company} className="object-contain" />
                <AvatarFallback>{company[0]}</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center justify-between w-full">
                  <h3 className="inline-flex items-center group font-bold text-sm">
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
                  <div className="font-sans text-sm ">{title}</div>
                  {positionType && (
                    <div className="text-sm text-muted-foreground ">
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
    </Link>
  );
};