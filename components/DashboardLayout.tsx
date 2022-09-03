import { PropsWithChildren } from "react";
import { ChartData } from "@wiz/types";
import { ETH, POLY, BSC, FTM } from "@wiz/lib/fakeData";
import { GradientBarChart } from "./charts/BarChart";
import { GasTable } from "./GasTable";
import { average } from "@wiz/lib/math";
import { parse } from "path";

export const DashboardLayout: React.FC<{}> = () => {
  const barChartData: ChartData = [
    {
      x: "ETH",
      y: parseInt(ETH.result.SafeGasPrice),
    },
    {
      x: "POLY",
      y: parseInt(POLY.result.SafeGasPrice),
    },
    {
      x: "BSC",
      y: parseInt(BSC.result.SafeGasPrice),
    },
    {
      x: "FTM",
      y: parseInt(FTM.result.SafeGasPrice),
    },
  ];

  const ratioData: ChartData = [
    {
      x: "ETH",
      y: average(ETH.result.gasUsedRatio.split(",").map((i) => parseFloat(i))),
    },
    {
      x: "MATIC",
      y: average(POLY.result.gasUsedRatio.split(",").map((i) => parseFloat(i))),
    },
  ];

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-2 p-5 grid-rows-2">
      <div className="col-span-1 bg-zinc-900 w-full h-full">
        <GradientBarChart
          data={barChartData}
          color="#818cf8"
          id="gas-compre"
          layout="horizontal"
        />
      </div>
      <div className="col-span-1 lg:col-span-2 bg-zinc-900">
        <GasTable
          data={[ETH.result, POLY.result, BSC.result, FTM.result]}
          chains={["ethereum", "polygon", "bsc", "fantom"]}
        />
      </div>
      <div className="col-span-1 bg-zinc-900">
        <GradientBarChart
          data={ratioData}
          color="#22d3ee"
          id="gas-ratio"
          layout="vertical"
        />
      </div>
      <div className="col-span-1 bg-zinc-900" />
      <div className="col-span-1 bg-zinc-900" />
    </div>
  );
};
