import { getGasPriceChartData } from "@wiz/lib/data";
import { ETH, POLY, BSC, FTM } from "@wiz/lib/fakeData";
import { GradientBarChart } from "./BarChart";
import {
  ChainInfoType,
  ChartData,
  GasOracleResponse,
  NonEthGasOracleRes,
  SupportedChains,
} from "@wiz/types";
import { useEffect, useState } from "react";
import { ChainsDropdown } from "../TerminalDropdown";

export const GasPriceChart: React.FC<{
  gasOracleData: Record<SupportedChains, GasOracleResponse<NonEthGasOracleRes>>;
}> = ({ gasOracleData }) => {
  const [selectedChain, setSelectedChain] =
    useState<SupportedChains>("ethereum");
  const [data, setData] = useState<ChartData>(
    getGasPriceChartData(gasOracleData["ethereum"])
  );

  useEffect(() => {
    setData(getGasPriceChartData(gasOracleData[selectedChain]));
    console.log("hi");
  }, [selectedChain]);

  return (
    <>
      <div className="h-10 w-full flex">
        <h2 className="capitalize  text-xl ml-5 mt-1">Gas Price</h2>
        <div className="absolute right-1 top-2">
          <ChainsDropdown
            setSelected={setSelectedChain}
            selected={selectedChain}
          />
        </div>
      </div>
      <GradientBarChart
        data={data}
        color="#818cf8"
        id="gas-compre"
        layout="horizontal"
      />
    </>
  );
};
