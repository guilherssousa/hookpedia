import { getHookBySlug, getAllHooks } from "./api/hooks";

import { Box } from "@chakra-ui/react";

import { Navbar } from "components/Navbar";
import { Header } from "components/Header";
import { SearchPalette } from "components/SearchPalette";
import { Footer } from "components/Footer";

function HookPage(props) {
  return (
    <Box bg="gray.800">
      <Navbar />
      <SearchPalette />
      <Footer />
    </Box>
  );
}

export async function getStaticProps(context) {
  return {
    props: await getHookBySlug(context.params.slug),
  };
}

export async function getStaticPaths() {
  let paths = await getAllHooks();

  paths = paths.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
export default HookPage;
