import { ChartData, GasOracleResponse, NonEthGasOracleRes } from "types";
import { ETH, POLY, BSC, FTM } from "lib/fakeData";

export function getGasPriceChartData(
  data: GasOracleResponse<NonEthGasOracleRes>
): ChartData {
  return [
    {
      x: "Safe",
      y: parseInt(data.result.SafeGasPrice),
    },
    {
      x: "Fast",
      y: parseInt(data.result.FastGasPrice),
    },
    {
      x: "Propose",
      y: parseInt(data.result.ProposeGasPrice),
    },
  ];
}
