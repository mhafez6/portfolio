"use client";

import { Button } from "@/components/ui/button";

// import { useState } from "react";
// import { tt } from "./useTyping";

export default function TypingTestButton() {
  return (
    <Button variant="outline" className="mt-4 px-4 py-2 text-sm">
      Test <span className="italic text-purple-300">your</span> typing speed
    </Button>
  );
}
