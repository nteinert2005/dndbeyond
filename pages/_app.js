import "../styles/globals.css";
import "../styles/home.css";
import { SessionProvider } from "next-auth/react";

import Login from "./components/Login";
import { useRouter } from "next/router";
import Register from "./register";
import { useEffect } from "react";
import Layout from "./components/layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  useEffect(() => {
    if (session) {
      console.log("inside session should use layout");
    }
  }, []);

  return (
    <>
      <SessionProvider session={session}>
        {session ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </>
  );
}

export default MyApp;
