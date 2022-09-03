import { ChartData, GasOracleResponse } from "types";

export function getGasPriceChartData(data: GasOracleResponse): ChartData {
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
