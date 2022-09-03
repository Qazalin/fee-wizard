import { roundToDecimals } from "@wiz/lib/math";
import { SupportedChains, NonEthGasOracleRes } from "@wiz/types";
export const GasTable: React.FC<{
  data: NonEthGasOracleRes[];
  chains: SupportedChains[];
}> = ({ data, chains }) => {
  type TableDataType = NonEthGasOracleRes & { chain: SupportedChains };
  const tableData: TableDataType[] = data.map((d, i) => {
    return { ...d, chain: chains[i] };
  });
  return (
    <table className="w-full h-full overflow-auto">
      <thead className="bg-zinc-800">
        <tr>
          <th className="sticky top-0 z-10 border-b border-zinc-400 capitalize text-zinc-400 mx-2">
            chain
          </th>
          <th className="sticky top-0 z-10 border-b border-zinc-400 capitalize text-zinc-400 mx-2">
            safe
          </th>
          <th className="sticky top-0 z-10 border-b border-zinc-400 capitalize text-zinc-400 mx-2">
            propose
          </th>
          <th className="sticky top-0 z-10 border-b border-zinc-400 capitalize text-zinc-400 mx-2">
            fast
          </th>
          <th className="sticky top-0 z-10 border-b border-zinc-400 capitalize text-zinc-400 mx-2">
            token price
          </th>
        </tr>
      </thead>
      <tbody className="text-center capitalize">
        {tableData.map((d, i) => (
          <tr key={`gas-table-${i}`}>
            <td className="border-b-2 border-zinc-500">{d.chain}</td>
            <td className="border-b-2 border-zinc-500">
              {roundToDecimals(parseInt(d.SafeGasPrice))}
            </td>
            <td className="border-b-2 border-zinc-500">
              {" "}
              {roundToDecimals(parseInt(d.ProposeGasPrice))}
            </td>
            <td className="border-b-2 border-zinc-500">
              {roundToDecimals(parseInt(d.FastGasPrice))}
            </td>
            <td className="border-b-2 border-zinc-500">
              {roundToDecimals(parseInt(d.UsdPrice))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
