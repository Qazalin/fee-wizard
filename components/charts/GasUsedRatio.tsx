import { average } from "@wiz/lib/math";
import { ChartData, GasOracleData } from "@wiz/types";
import { GradientBarChart } from "./BarChart";

export const GasUsedRatio: React.FC<{ data: GasOracleData }> = ({ data }) => {
  const ratioData: ChartData = [
    {
      x: "ETH",
      y: average(
        data.ethereum.result.gasUsedRatio.split(",").map((i) => parseFloat(i))
      ),
    },
    {
      x: "MATIC",
      y: average(
        data.polygon.result.gasUsedRatio.split(",").map((i) => parseFloat(i))
      ),
    },
  ];
  console.log(ratioData);
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
