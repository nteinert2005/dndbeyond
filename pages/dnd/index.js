import { getSession, useSession } from "next-auth/react";
import CharacterBlock from "../components/CharacterBlock";
import PageHeader from "../components/PageHeader";

export default function Index() {
  const { data: session } = useSession();

  console.log({ session });

  return (
    <>
      <PageHeader title={"DND"} gameName={"Dungeons and Dragons"} />
      <CharacterBlock dndcharacters={session.user.data.dndcharacters} />
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
