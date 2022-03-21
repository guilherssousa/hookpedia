import Head from "next/head";

import { Image, Box } from "@chakra-ui/react";

import { SEO } from "components/SEO";
import { Navbar } from "components/Navbar";
import { Header } from "components/Header";
import { TypeIntroduction } from "components/TypeIntroduction";
import { Presentation } from "components/Presentation";
import { Highlights } from "components/Highlights";
import { Footer } from "components/Footer";
import { getAllHooks } from "./api/hooks";

export default function Home({ hooks }) {
  return (
    <>
      <Head>
        <title>Hookpedia: A cola definitiva para desenvolvedores React.</title>
        <SEO />
      </Head>

      <Box bg="gray.800">
        <Navbar />
        <Header />
        <Highlights
          title="Os melhores Hooks"
          cards={hooks.slice(0, 3)}
          emoji={
            <Image
              src="/sparkles.webp"
              alt="Brilho!"
              boxSize={{ base: "35px", md: "20px", lg: "40px" }}
              display="inline"
              ml="2"
            ></Image>
          }
        />

        <TypeIntroduction />
        <Presentation />
        <Footer />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const hooks = await getAllHooks();

  return {
    props: {
      hooks: hooks,
    },
  };
}
