import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Facebook-Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col text-white items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        Facebook-clone
      </main>
    </>
  );
};

export default Home;
