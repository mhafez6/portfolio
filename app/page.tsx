import Image from "next/image";
import TypingTestButton from "@/components/TypingTest/TypingTestButton";
import TypingTest from "@/components/TypingTest";
import { text } from "@/components/TypingTest/useTyping";

export default function Home() {
  return (
    <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20 border border-amber-300">
      <header>
        <div className="flex max-md:flex-col items-start gap-4 justify-between">
          <div className="relative w-42 max-w-xs h-42 my-auto">
            <Image
              src="/globe.svg"
              alt="PFP image"
              fill
              className="border border-amber-100 object-contain"
            />
          </div>
          <div className="flex flex-col gap-0.5 my-auto border border-blue-200 items-start">
            <h1 className="text-5xl font-excali">
              Hala Walla <span className="text-purple-300">( hey )</span>,{" "}
              <br /> Im Mohammad
            </h1>
            <TypingTest text={text} />
            <div className="w-full flex justify-center">
              <TypingTestButton />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
