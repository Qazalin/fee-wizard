import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";
export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="w-[100vw] h-[100vh]">
    <div className="transition-all duration-500 transform absolute top-0 w-full z-30 translate-y-0 px-2 h-16">
      <Navbar />
    </div>
    <div className="w-full h-[calc(100vh-4rem)] mt-16">{children}</div>
  </div>
);
