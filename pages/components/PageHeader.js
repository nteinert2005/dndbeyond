import { useSession } from "next-auth/react";
import Head from "next/head";
import TokenCard from "./TokenCard";

const PageHeader = ({ title, gameName }) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        {title ? (
          <title> {title} - Epic Table TTRPG Collections </title>
        ) : (
          <title> Epic Table - TTRPG Collections </title>
        )}
      </Head>
      <div className="page-header flex flex-row w-full justify-center items-center">
        <h1
          className="inline-block float-left"
          style={{ width: "95%", color: "white", marginLeft: "-20px" }}
          id="header"
        >
          {gameName}
        </h1>
        {/* <TokenCard tokens={session.user.data.tokens} />  */}
      </div>
    </>
  );
};

export default PageHeader;
