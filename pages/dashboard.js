import { getSession, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import PageHeader from "./components/PageHeader";
import FindGame from "./components/Cards/FindGame";
import TokenCard from "./components/Cards/TokenCard";
import CharacterBlock from "./components/Cards/CharacterBlock";

export default function Dashboard() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log({ session });
  });

  return (
    <>
      <PageHeader
        title="Dashboard"
        gameName={`Evening, ${session.user.name}!`}
      />
      <div className="flex flex-row w-full">
        <div className="mt-4 w-7/12 mr-4 ">
          <FindGame myGames={session.user.data.user.savedGames} />
          <CharacterBlock dndcharacters={session.user.data.dndcharacters} />
        </div>
        <div className="mt-4 w-5/12 ml-4">
          <TokenCard />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return {
    props: {
      session: await getSession(context),
    },
  };
}
