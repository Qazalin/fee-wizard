import { Footer } from "@wiz/components/Footer";
import { Hero } from "@wiz/components/Hero";
import { Terminal } from "@wiz/components/Terminal";
import { useGasOracleForChain } from "@wiz/lib/blockchainFetcher";
import type { NextPage } from "next";
import useSWR from "swr";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Terminal />
      <Footer />
    </Layout>
  );
};

export default Home;
