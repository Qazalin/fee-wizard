import {
  GasOracleResponse,
  NonEthGasOracleRes,
  EthGasOracleRes,
} from "@wiz/types";

export const BSC: GasOracleResponse<NonEthGasOracleRes> = {
  status: "1",
  message: "OK",
  result: {
    LastBlock: "20979189",
    SafeGasPrice: "5",
    ProposeGasPrice: "5",
    FastGasPrice: "5",
    UsdPrice: "278.01",
  },
};

export const FTM: GasOracleResponse<NonEthGasOracleRes> = {
  status: "1",
  message: "OK",
  result: {
    LastBlock: "46199724",
    SafeGasPrice: "1.8855",
    ProposeGasPrice: "1.8855",
    FastGasPrice: "2",
    UsdPrice: "0.269591",
  },
};

export const ETH: GasOracleResponse<EthGasOracleRes> = {
  status: "1",
  message: "OK",
  result: {
    LastBlock: "15458889",
    SafeGasPrice: "9",
    ProposeGasPrice: "9",
    FastGasPrice: "10",
    suggestBaseFee: "8.098270933",
    gasUsedRatio:
      "0.443006659893007,0.999560421941758,0.375518650043251,0.259143314126479,0.541957867938603",
    UsdPrice: "2100",
  },
};

export const POLY: GasOracleResponse<EthGasOracleRes> = {
  status: "1",
  message: "OK",
  result: {
    LastBlock: "32595455",
    SafeGasPrice: "36.9",
    ProposeGasPrice: "45.1",
    FastGasPrice: "45.6",
    suggestBaseFee: "0.000000012",
    gasUsedRatio:
      "0.690827880464848,0.37989455911392,0.177577254328076,0.31292066074614,0.236511941103483",
    UsdPrice: "0.890395",
  },
};
