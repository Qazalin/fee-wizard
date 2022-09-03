import { JSXElementConstructor } from "react";
import {
  EthGasOracleRes,
  GasOracleResponse,
  NonEthGasOracleRes,
} from "./apiTypes";

// Utility for giving classNames to your components for styling with tailwind
export type PropsWithClassname<P> = P & { className?: string };

export type ChainInfoType = {
  chain: string;
  Icon: JSXElementConstructor<PropsWithClassname<{}>>;
};

export type SupportedChains = "ethereum" | "polygon" | "bsc" | "fantom";

export type ChartData = {
  x: string;
  y: number;
}[];

export type GasOracleData = Record<
  SupportedChains,
  GasOracleResponse<NonEthGasOracleRes | EthGasOracleRes>
>;
