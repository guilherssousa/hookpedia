import { Box } from "@chakra-ui/react";

import { Navbar } from "components/Navbar";
import { SearchPalette } from "components/SearchPalette";
import { Footer } from "components/Footer";

function ListPage({ pages }) {
  return (
    <Box bg="gray.800">
      <Navbar />
      <SearchPalette />
      <Footer />
    </Box>
  );
}

export default ListPage;

export async function getStaticProps() {
  const hooks = await getAllHooks();

  return {
    props: {
      hooks: hooks,
    },
  };
}
