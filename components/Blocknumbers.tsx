import { SUPPORTED_CHAINS } from "@wiz/lib/constants";
import { numberFormatter } from "@wiz/lib/math";
import { GasOracleData } from "types";
import { Blockchain } from "./icons/Blockchain";

export const BlockNumbers: React.FC<{
  data: GasOracleData;
}> = ({ data }) => {
  const blockNums = SUPPORTED_CHAINS.map((c) => data[c].result.LastBlock);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-3 p-5">
      {blockNums.map((b, i) => (
        <div
          className="mx-auto lg:flex col-span-1 text-center justify-center items-center space-x-2 space-y-2"
          key={`block-${i}`}
        >
          <Blockchain className="w-12 h-12 mx-auto" />
          <div className="flex lg:flex-col space-x-2">
            <p>{numberFormatter(parseInt(b))}</p>
            <p className="capitalize">{SUPPORTED_CHAINS[i]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
