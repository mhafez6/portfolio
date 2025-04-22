// import { tt } from "./useTyping";


export default function TypingTest({text} : {text: string}) {

  return (
    <div className="relative">
      <div className="prompt font-mono">{text}</div>
      
    </div>
  );
}
