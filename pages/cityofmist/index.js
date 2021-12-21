import { getSession, signOut, useSession } from "next-auth/react";
import TokenCard from "../components/TokenCard";
import PageHeader from "../components/PageHeader";

export default function Index() {
  return (
    <>
      <PageHeader title={"City of Mist"} gameName={"City of Mist"} />
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
