import { useState } from "react";
import { Code } from "./Code";
import { TerminalDropdown } from "./TerminalDropdown";

export const Terminal = () => {
  const greets = ["hi", "hello", "hey", "heyyoo"];
  const [code, setCode] = useState(greets[0]);

  return (
    <div className="relative flex flex-col space-y-3 w-full md:max-w-lg lg:max-w-4xl mx-auto">
      <TerminalDropdown />
      <div className="bg-zinc-900 relative w-full h-96 rounded-md box">
        <TerminalHeader />
        <div className="p-5 font-mono w-full flex flex-col space-y-3 text-md md:text-lg lg:text-xl h-full">
          <Code lang="javascript" code={`console.log('${code}')`} />
        </div>
      </div>
    </div>
  );
};
const TerminalHeader = () => (
  <div className="w-full h-[50px] left-2">
    <div className="bg-rose-500 w-3 h-3 inline-block rounded-full mx-1" />
    <div className="bg-yellow-500 w-3 h-3 inline-block rounded-full mx-1" />
    <div className="bg-green-500 w-3 h-3 inline-block rounded-full mx-1" />
  </div>
);
