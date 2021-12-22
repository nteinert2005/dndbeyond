import Hero from "./components/Hero";
import PublisherHero from "./components/PublisherHero";
import HomeNav from "./components/HomeNav";
import Head from "next/head";

const Publishers = () => {
  return (
    <>
      <Head>
        <title> Publishers - Epic Table TTRPG </title>
      </Head>
      <HomeNav />
      <PublisherHero />
    </>
  );
};

export default Publishers;
