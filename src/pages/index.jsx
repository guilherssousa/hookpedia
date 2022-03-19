import Head from "next/head";

import { Header } from "components/Header";
import { Presentation } from "components/Presentation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hookpedia</title>
      </Head>

      <>
        <Header />
        <Presentation />
      </>
    </>
  );
}
