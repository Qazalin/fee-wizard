import { DashboardLayout } from "@wiz/components/DashboardLayout";
import { Layout } from "@wiz/components/Layout";
import { useGasOracleForChain } from "@wiz/lib/blockchainFetcher";
import { GasOracleData } from "@wiz/types";
import { useEthExchangeRate } from "@wiz/lib/exchangeRate";
import { DashboardSkeleton } from "@wiz/components/DashboardSkeleton";

const Live = () => {
  const { data: ethGasOracle, error } = useGasOracleForChain("ethereum");
  const { data: bscGasOracle } = useGasOracleForChain("bsc");
  const { data: ftmGasOracle } = useGasOracleForChain("fantom");
  const { data: polyGasOracle } = useGasOracleForChain("polygon");
  const rate = useEthExchangeRate()?.toString();

  if (ethGasOracle && bscGasOracle && ftmGasOracle && polyGasOracle) {
    if (rate) {
      ethGasOracle.result.UsdPrice = rate;
      const gasOracleData: GasOracleData = {
        ethereum: ethGasOracle,
        bsc: bscGasOracle,
        fantom: ftmGasOracle,
        polygon: polyGasOracle,
      };
      return (
        <Layout>
          <DashboardLayout data={gasOracleData} />
        </Layout>
      );
    }
  }
  return (
    <Layout>
      <DashboardSkeleton />
    </Layout>
  );
};

export default Live;

/* 

  */
