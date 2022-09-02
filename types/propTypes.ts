import { JSXElementConstructor } from "react";

// Utility for giving classNames to your components for styling with tailwind
export type PropsWithClassname<P> = P & { className?: string };

export type ChainInfoType = {
  chain: string;
  Icon: JSXElementConstructor<PropsWithClassname<{}>>;
};

export type SupportedChains = "ethereum" | "polygon" | "bsc" | "fantom";
