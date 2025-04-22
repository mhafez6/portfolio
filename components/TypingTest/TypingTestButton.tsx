"use client";

import { Button } from "@/components/ui/button"


// import { useState } from "react";
// import { tt } from "./useTyping";

export default function TypingTestButton() {
  return (
    <div>
      <Button variant={"outline"} className="">
        Test <span className="italic text-purple-300">your</span> typing speed
      </Button>
    </div>
  );
}
