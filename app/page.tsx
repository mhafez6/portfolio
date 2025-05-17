import Image from "next/image";
// import TypingTestButton from "@/components/TypingTest/TypingTestButton";
import TypingTest from "@/components/TypingTest";
import { text } from "@/components/TypingTest/useTyping";
import { WorkCard } from "@/components/WorkCard";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main
      className="
      flex-1
      mx-auto
      w-full
      max-w-2xl
      px-4 sm:px-6 lg:px-8
      py-12
      flex flex-col 
      items-center
      gap-8
      "
    >
      <div className="flex flex-row gap-8 pt-[20vh] ">
        {/* Profile image */}
        <section className="flex-shrink-0 ">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
            <Image
              src="/globe.svg"
              alt="PFP image"
              fill
              className="object-cover"
            />
          </div>
        </section>
        <section
          className="
        flex flex-col
        items-center md:items-start
        text-center md:text-left
        gap-4
        "
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-excali">
            Hala Walla <span className="text-purple-300">( hey )</span>,<br />
            I&apos;m Mohammad
          </h1>
          <TypingTest text={text} />
          {/* <TypingTestButton /> */}
        </section>
      </div>
      <section className="work w-full">
        <h1 className="text-2xl font-bold pb-1">Experience</h1>
        <div className="projects-wrapper w-full flex flex-col gap-8 ">
          <WorkCard
            logoUrl="/kaust.png"
            company="KAUST"
            title="Researcher"
            period="2023"
            description="Optimzed a novel non-linear opinion dynamic model to be used in human-aware path planning. Basically a lot of calculus, linear algebra, python and c++"
            positionType="Full-time"
            href="https://ats.kaust.edu.sa/risclab"
          />
          <WorkCard
            logoUrl="/company-logo.png"
            company="Valorant"
            title="MENA Player"
            period="2022 - 2024"
            description="Reached Immortal 3 as a one-trick Jett main. top 800 (17 Million players worlwide)"
            positionType="most school nights"
            href="https://koalaware.com"
          />
        </div>
      </section>
      <section className="projects w-full">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="projects-wrapper w-full flex flex-col gap-8 border border-red-100">
          <ProjectCard
            title="Loomi"
            period="2025"
            description="Your project description here"
            technologies={["Next.js", "TypeScript", "TailwindCSS"]}
            githubUrl="https://github.com/your-repo"
            demoUrl="https://your-demo.com"
          />
          <ProjectCard
            title="Loomi"
            period="2025"
            description="Your project description here"
            technologies={["Next.js", "TypeScript", "TailwindCSS"]}
            githubUrl="https://github.com/your-repo"
            demoUrl="https://your-demo.com"
          />
        </div>
      </section>
    </main>
  );
}
