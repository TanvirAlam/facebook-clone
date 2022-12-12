import Head from "next/head";
import type { GetSessionParams } from "next-auth/react";
import { getSession, useSession } from "next-auth/react";

import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import SideBar from "../components/SideBar/SideBar";
import Feeds from "../components/Feeds/Feeds";
import Widgets from "../components/Widgets/Widgets";

const Home = () => {
  const { data: session, status } = useSession();

  if (status !== "authenticated") return <Login />;

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Facebook-Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <SideBar />
        <Feeds />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);

  /* const posts = await db.collection("posts".orderBy("timestamp", "dexc").get())

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  })) */

  return {
    props: {
      session,
    },
  };
}
