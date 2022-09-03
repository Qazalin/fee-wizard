import {
  ChartData,
  GasOracleData,
  GasOracleResponse,
  NonEthGasOracleRes,
  SupportedChains,
} from "@wiz/types";
import { GradientBarChart } from "./charts/BarChart";
import { GasTable } from "./GasTable";
import { average } from "@wiz/lib/math";
import { BlockNumbers } from "./Blocknumbers";
import { ETH, POLY, BSC, FTM } from "@wiz/lib/fakeData";
import { GroupedLineChart } from "./charts/LineChart";
import { GasPriceChart } from "./charts/GasPriceChart";

export const DashboardLayout: React.FC<{
  data: GasOracleData;
}> = ({ data }) => {
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
    <div className="h-[250vh] lg:h-full w-full grid grid-cols-1 lg:grid-cols-3 gap-2 p-5">
      <div className="col-span-1 bg-zinc-900 w-full h-full  relative rounded-md text-zinc-300">
        <GasPriceChart gasOracleData={data} />
      </div>
      <div className="col-span-1 lg:col-span-2 bg-zinc-900 overflow-x-auto">
        <GasTable
          data={[ETH.result, POLY.result, BSC.result, FTM.result]}
          chains={["ethereum", "polygon", "bsc", "fantom"]}
        />
      </div>
      <div className="col-span-1 bg-zinc-900 w-full h-full  relative rounded-md text-zinc-300">
        <h2 className="capitalize h-10 w-full text-xl ml-5 mt-1">
          gas used ratio
        </h2>
        <GradientBarChart
          data={ratioData}
          color="#22d3ee"
          id="gas-ratio"
          layout="vertical"
        />
      </div>
      <div className="col-span-1 bg-zinc-900">
        <BlockNumbers
          blockNums={[
            ETH.result.LastBlock,
            POLY.result.LastBlock,
            BSC.result.LastBlock,
            FTM.result.LastBlock,
          ]}
          chains={["ethereum", "polygon", "bsc", "fantom"]}
        />
      </div>
      <div className="col-span-1 bg-zinc-900 relative">
        <GroupedLineChart />
      </div>
    </div>
  );
};
