import { Hero } from "@wiz/components/Hero";
import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
