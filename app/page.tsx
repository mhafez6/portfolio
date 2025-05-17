"use client";

import Image from "next/image";
import TypingTest from "@/components/TypingTest";
import { text } from "@/components/TypingTest/useTyping";
import { WorkCard } from "@/components/WorkCard";
import { ProjectCard } from "@/components/ProjectCard";
import { AwardCard } from "@/components/AwardCard";
import { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Loomi",
    shortDescription:
      "A full-stack Loom clone for screen recording and workflow sharing",
    period: "2024",
    description:
      "Built a full stack Loom clone that allows users to record their screens, upload workflows, and share custom links. Integrated Bunny CDN for secure, low-latency video storage & streaming, with Xata as a serverless datastore and Drizzle ORM for lightning-fast metadata queries. Implemented tokenized access control via BetterAuth and Arcjet edge security for protected link sharing.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Bunny CDN",
      "Xata",
      "Drizzle ORM",
      "BetterAuth",
      "Arcjet",
    ],
  },
  {
    title: "Brmj",
    shortDescription: "A browser-based code editor with real-time execution",
    period: "2024",
    description:
      "Built a fully type-safe, browser-based editor using the Monaco Editor, with LocalStorage persistence for drafts and user preferences. Integrated Clerk for auth and Convex as a serverless backend to securely store, sync, and version user snippets. Powered live, isolated multi-language code execution via the Piston API, ensuring safe sandboxing of user runs.",
    technologies: [
      "Monaco Editor",
      "TypeScript",
      "Clerk",
      "Convex",
      "Piston API",
      "Next.js",
    ],
  },
  {
    title: "MNIST Classifier",
    shortDescription:
      "Neural network implementation from scratch achieving 93% accuracy",
    period: "2024",
    description:
      "Implemented a type-agnostic neural network from scratch in Python (NumPy and Pandas), designing feedforward layers, ReLU activation, and full backpropagation. Optimized training with vectorized operations, L2 regularization, and learning-rate decay—achieved 93% test accuracy on MNIST.",
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Neural Networks",
      "Machine Learning",
    ],
  },
];

const awardsData = [
  {
    organization: "International Mathematical Olympiad",
    title: "Bronze Medal",
    date: "2024",
    type: "International Competition",
    description:
      "Earned a bronze medal representing Saudi Arabia at IMO, the world's most prestigious mathematics competition for pre-university students.",
  },
  {
    organization: "Mawhoob National Informatics Olympiad",
    title: "First Place",
    date: "2024",
    type: "National Competition",
    description:
      "Secured first place in Saudi Arabia's premier competitive programming competition for high school students, demonstrating exceptional algorithmic problem-solving skills.",
  },
  {
    organization: "Gulf Mathematical Olympiad",
    title: "Gold Medal",
    date: "2023",
    type: "Regional Competition",
    description:
      "Won gold medal competing against top mathematical talent from across the Gulf Cooperation Council countries.",
  },
  {
    organization: "Ibdaa National Research",
    title: "Finalist",
    date: "2023",
    type: "Research Competition",
    description:
      "Selected as a finalist in Saudi Arabia's national research competition for innovative student research projects.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"projects" | "awards">("projects");

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <main className="flex-1 mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="py-16 space-y-16">
        {/* Header Section - PFP removed */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="flex flex-row gap-8"
        >
          <section className="flex flex-col items-center md:items-start text-center md:text-left gap-4 flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-excali">
              Hala Walla <span className="text-purple-300">( hey )</span>,<br />
              I&apos;m Mohammad
            </h1>
            <TypingTest text={text} />
          </section>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Experience Section */}
          <motion.section
            custom={1}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
            <div className="space-y-1">
              <WorkCard
                company="KAUST"
                title="Researcher"
                period="2023"
                description="Optimzed a novel non-linear opinion dynamic model to be used in human-aware path planning. Basically a lot of calculus, linear algebra, python and c++"
                positionType="Full-time"
              />
              <WorkCard
                company="Valorant"
                title="MENA Player"
                period="2022 - 2024"
                description="Reached Immortal 3 as a one-trick Jett main. top 800 (17 Million players worlwide)"
                positionType="most school nights"
              />
            </div>
          </motion.section>

          {/* New Tabbed Section for Projects and Awards */}
          <motion.section
            custom={2}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <div className="flex mb-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("projects")}
                className={`py-3 px-6 text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none 
                            ${
                              activeTab === "projects"
                                ? "border-b-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400"
                                : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-600"
                            }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("awards")}
                className={`py-3 px-6 text-base font-semibold transition-all duration-200 ease-in-out focus:outline-none 
                            ${
                              activeTab === "awards"
                                ? "border-b-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400"
                                : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-600"
                            }`}
              >
                Awards
              </button>
            </div>

            {activeTab === "projects" && (
              <motion.div
                key="projects-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-1"
              >
                {projectsData.map((project, idx) => (
                  <ProjectCard
                    key={project.title || idx}
                    title={project.title}
                    shortDescription={project.shortDescription}
                    period={project.period}
                    description={project.description}
                    technologies={project.technologies}
                  />
                ))}
              </motion.div>
            )}

            {activeTab === "awards" && (
              <motion.div
                key="awards-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-1"
              >
                {awardsData.map((award, idx) => (
                  <AwardCard
                    key={award.title || idx}
                    organization={award.organization}
                    title={award.title}
                    date={award.date}
                    type={award.type}
                    description={award.description}
                  />
                ))}
              </motion.div>
            )}
          </motion.section>
        </div>
      </div>
    </main>
  );
}
