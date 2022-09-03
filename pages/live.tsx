import { DashboardLayout } from "@wiz/components/DashboardLayout";
import { Layout } from "@wiz/components/Layout";
import useSWR from "swr";
import { useGasOracleForChain } from "@wiz/lib/blockchainFetcher";
import { GasOracleData } from "@wiz/types";

const Live = () => {
  const { data: ethGasOracle, error } = useGasOracleForChain("ethereum");
  const { data: bscGasOracle } = useGasOracleForChain("bsc");
  const { data: ftmGasOracle } = useGasOracleForChain("fantom");
  const { data: polyGasOracle } = useGasOracleForChain("polygon");

  if (ethGasOracle && bscGasOracle && ftmGasOracle && polyGasOracle) {
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

  return <Layout>loading</Layout>;
};

export default Live;
