import Head from "next/head";

import { Header } from "components/Header";
import { Presentation } from "components/Presentation";
import { SearchPalette } from "components/SearchPalette";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hookpedia | Repositório de React Hooks</title>
      </Head>

      <>
        <SearchPalette />
        <Header />
        <Presentation />
      </>
    </>
  );
}
