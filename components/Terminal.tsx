import { ChainInfoType } from "@wiz/types";
import { PropsWithChildren, ReactElement, useState } from "react";
import { Code } from "./Code";
import { TerminalDropdown } from "./TerminalDropdown";

export const Terminal = () => {
  const [code, setCode] = useState("hi");
  const [selectedChain, setSelectedChain] = useState<ChainInfoType>();

  return (
    <Terminal.Wrapper>
      <Terminal.Dropdown
        setSelected={setSelectedChain}
        selected={selectedChain}
      />
      <Terminal.Body>
        <Terminal.Header />
        <Code lang="javascript" code={`console.log('${code}')`} />
      </Terminal.Body>
    </Terminal.Wrapper>
  );
};

const Wrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="relative flex flex-col space-y-3 w-full md:max-w-lg lg:max-w-4xl mx-auto">
      {children}
    </div>
  );
};

const Body: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="bg-zinc-900 relative w-full h-96 rounded-md box p-5 font-mono flex flex-col space-y-3 text-md md:text-lg lg:text-xl">
      {children}
    </div>
  );
};

const Header = () => (
  <div className="w-full h-[50px] left-2">
    <div className="bg-rose-500 w-3 h-3 inline-block rounded-full mx-1" />
    <div className="bg-yellow-500 w-3 h-3 inline-block rounded-full mx-1" />
    <div className="bg-green-500 w-3 h-3 inline-block rounded-full mx-1" />
  </div>
);

Terminal.Header = Header;
Terminal.Dropdown = TerminalDropdown;
Terminal.Wrapper = Wrapper;
Terminal.Body = Body;
