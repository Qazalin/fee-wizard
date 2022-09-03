import { average } from "@wiz/lib/math";
import { ChartData, GasOracleData } from "@wiz/types";
import { GradientBarChart } from "./BarChart";

export const GasUsedRatio: React.FC<{ data: GasOracleData }> = ({ data }) => {
  const ethRatio = data.ethereum.result.gasUsedRatio;
  const maticRatio = data.polygon.result.gasUsedRatio;
  let ratioData: ChartData = [];
  if (ethRatio && maticRatio) {
    ratioData = [
      {
        x: "ETH",
        y: average(ethRatio.split(",").map((i) => parseFloat(i))),
      },
      {
        x: "MATIC",
        y: average(maticRatio.split(",").map((i) => parseFloat(i))),
      },
    ];
  }

  return (
    <>
      <h2 className="capitalize h-10 w-full text-xl ml-5 mt-1">
        gas used ratio
      </h2>
      <GradientBarChart
        data={ratioData}
        color="#22d3ee"
        id="gas-ratio"
        layout="vertical"
      />
    </>
  );
};
