import { SupportedChains } from "@wiz/types";

export function getGasOracleUrl(chain: SupportedChains): string | undefined {
  switch (chain) {
    case "ethereum":
      return "https://api.etherscan.io/api";
    case "polygon":
      return "https://api.polygonscan.com/api";
    case "bsc":
      return "https://api.bscscan.com/api";
    case "fantom":
      return "https://api.ftmscan.com/api";
  }
}

export function getEnv(chain: SupportedChains) {
  switch (chain) {
    case "ethereum":
      return process.env.NEXT_PUBLIC_ETH;
    case "polygon":
      return process.env.NEXT_PUBLIC_POLY;
    case "bsc":
      return process.env.NEXT_PUBLIC_BSC;
    case "fantom":
      return process.env.NEXT_PUBLIC_FTM;
  }
}
