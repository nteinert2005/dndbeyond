import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import HomeNav from "./components/HomeNav";
import Hero from "./components/Hero";
import styled from "styled-components";

export default function Home() {
  const [token, setToken] = useState();
  const { data: session, loading } = useSession();

  useEffect(() => {
    console.log(session);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Epic Table - Premium TTRPG Resources</title>
        <meta name="description" content="SkyKey - Premium TTRPG Resources" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomeNav />
      <Hero />
    </div>
  );
}
