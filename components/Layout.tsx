import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";
export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="w-[100vw] h-[100vh]">
    <div className="transition-all duration-500 transform absolute top-0 w-full z-30 translate-y-0 px-2">
      <Navbar />
      <div className="text-white pt-32 xl:pt-large pb-medium md:pb-large px-4 lg:px-0 space-y-12">
        {children}
      </div>
    </div>
  </div>
);
