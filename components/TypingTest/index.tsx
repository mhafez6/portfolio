// import { tt } from "./useTyping";

export default function TypingTest({ text }: { text: string }) {
  return (
    <p
      className="
      font-mono
      text-sm
      leading-relaxed
      whitespace-pre-wrap
      break-words
    "
    >
      {text}
    </p>
  );
}
