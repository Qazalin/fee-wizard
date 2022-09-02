import useSWR from "swr";
import { GasOracleResponse, GasTrackerGeneralRes } from "@wiz/types";
import { GasTrackerPararms, SupportedChains } from "@wiz/types";
import { getGasOracleUrl, getEnv } from "./utils";

/**
 * Fetch the gas oracle for a given chain
 * @param chain The chain to fetch the gas oracle for (ethereum, polygon, bsc, fantom)
 * @returns The gas oracle data, error and loading states
 */
export function useGasOracleForChain(chain: SupportedChains): {
  data?: GasOracleResponse;
  error: unknown;
  loading: boolean;
} {
  const url = getGasOracleUrl(chain);
  const env = getEnv(chain);

  // typegaurd to make sure we have an API key and a correct url
  if (!url || !env) {
    throw new Error("Invalid chain");
  }

  const params: GasTrackerPararms = {
    module: "gastracker",
    action: "gasoracle",
    apiKey: env,
  };

  const { data, error, isValidating } = useSWR<GasOracleResponse>(
    `${url}?${new URLSearchParams(params).toString()}`,
    blockscanFetcher
  );
  return {
    data,
    error,
    loading: isValidating,
  };
}

/**
 * utility function designed to handle blockscan-specific messages in the result object that are error-like but aren't thrown by their API
 * @param args The arguments passed by the useSWR hook
 */
export const blockscanFetcher = async (args: any) => {
  const res = await fetch(args);
  const data: GasTrackerGeneralRes = await res.json();
  /* handle max rate limit */
  if (data?.result === "Max rate limit reached") {
    throw new Error("Max rate limit reached");
  }
  return data;
};
