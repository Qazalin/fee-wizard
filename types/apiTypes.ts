// Interface used for both OK and Error responses
export interface GasTrackerGeneralRes {
  status: "1" | "0";
  message: "OK" | "NOTOK";
  result: any; // The result is extended in the following interfaces
}

// When the status is 1, the result is an array of GasTrackerRes
export interface GasOracleResponse<R> extends GasTrackerGeneralRes {
  result: R;
}

export interface GasEstimateResponse extends GasTrackerGeneralRes {
  result: string;
}

export type NonEthGasOracleRes = {
  LastBlock: string;
  SafeGasPrice: string;
  ProposeGasPrice: string;
  FastGasPrice: string;
  UsdPrice?: string; // ETH doesn't have it
};

export interface EthGasOracleRes extends NonEthGasOracleRes {
  suggestBaseFee: string;
  gasUsedRatio: string;
}

export interface GasTrackerPararms extends Record<string, string> {
  module: "gastracker";
  action: "gasestimate" | "gasoracle";
  apiKey: string;
}

export interface EtherscanGasEtimateParams extends GasTrackerPararms {
  gasPrice: string;
}
