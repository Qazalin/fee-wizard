import { ChartData } from "types";
import { ETH, POLY, BSC, FTM } from "lib/fakeData";

export function getSafeUSDGasPrice(): ChartData {
  return [
    {
      x: "ETH",
      y:
        (parseInt(ETH.result.SafeGasPrice) * parseInt(ETH.result.UsdPrice)) /
        1e18,
    },
    {
      x: "POLY",
      y:
        (parseInt(POLY.result.SafeGasPrice) * parseInt(POLY.result.UsdPrice)) /
        1e18,
    },
    {
      x: "BSC",
      y:
        (parseInt(BSC.result.SafeGasPrice) * parseInt(BSC.result.UsdPrice)) /
        1e18,
    },
    {
      x: "FTM",
      y:
        (parseInt(FTM.result.SafeGasPrice) * parseInt(FTM.result.UsdPrice)) /
        1e18,
    },
  ];
}
