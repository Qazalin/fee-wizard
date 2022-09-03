import { GasOracleData } from "@wiz/types";
import { GasTable } from "./GasTable";
import { BlockNumbers } from "./Blocknumbers";
import { GasPriceChart } from "./charts/GasPriceChart";
import { GasUsedRatio } from "./charts/GasUsedRatio";

export const DashboardLayout: React.FC<{
  data: GasOracleData;
}> = ({ data }) => {
  return (
    <div className="h-[250vh] lg:h-full w-full grid grid-cols-1 lg:grid-cols-3 gap-2 p-5">
      <div className="col-span-1 bg-zinc-900 w-full h-full  relative rounded-md text-zinc-300">
        <GasPriceChart gasOracleData={data} />
      </div>
      <div className="col-span-1 lg:col-span-2 bg-zinc-900 overflow-x-auto">
        <GasTable data={data} />
      </div>
      <div className="col-span-1 bg-zinc-900 w-full h-full  relative rounded-md text-zinc-300">
        <GasUsedRatio data={data} />
      </div>
      <div className="col-span-1 bg-zinc-900">
        <BlockNumbers data={data} />
      </div>
      <div className="col-span-1 bg-zinc-900 relative"></div>
    </div>
  );
};
