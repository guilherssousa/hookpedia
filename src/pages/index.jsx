import Head from "next/head";

import { Image, Box, useDisclosure } from "@chakra-ui/react";

import { Navbar } from "components/Navbar";
import { Header } from "components/Header";
import { Presentation } from "components/Presentation";
import { Highlights } from "components/Highlights";
import { Footer } from "components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hookpedia | Repositório de React Hooks</title>
      </Head>

      <Box bg="gray.800">
        <Navbar />
        <Header />
        <Highlights
          title="Os melhores Hooks"
          emoji={
            <Image
              src="/sparkles.png"
              boxSize={{ base: "35px", md: "20px", lg: "40px" }}
              display="inline"
              ml="2"
            ></Image>
          }
        />
        <Highlights
          title="Recém adicionados "
          emoji={
            <Image
              src="/shortcake.png"
              boxSize={{ base: "35px", md: "20px", lg: "40px" }}
              display="inline"
              ml="2"
            ></Image>
          }
        />
        <Presentation />
        <Footer />
      </Box>
    </>
  );
}
