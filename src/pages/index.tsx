import Head from "next/head";
import type { GetSessionParams } from "next-auth/react";
import { getSession, useSession } from "next-auth/react";

import Header from "../components/Header/Header";
import Login from "../components/Login/Login";

const Home = () => {
  const { data: session, status } = useSession();

  if (status !== "authenticated") return <Login />;

  return (
    <>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Facebook-Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
    </>
  );
};

export default Home;

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
