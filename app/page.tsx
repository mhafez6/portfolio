import Image from "next/image";
// import TypingTestButton from "@/components/TypingTest/TypingTestButton";
import TypingTest from "@/components/TypingTest";
import { text } from "@/components/TypingTest/useTyping";
import Projects from "./(projects)/Projects";


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

      <Projects />
    </main>
  );
}
