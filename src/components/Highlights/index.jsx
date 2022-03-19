import { Box, Heading, Flex, Grid } from "@chakra-ui/react";

import { HookCard } from "./HookCard";

function Highlights({ title, emoji, cards }) {
  return (
    <Box
      bg="gray.800"
      textColor="white"
      p="8"
      borderTop="1px"
      borderTopColor="gray.600"
    >
      <Box maxW="container.xl" mx="auto">
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}>
          <Flex alignItems="center" flexDirection={"row"}>
            {title}
            {emoji}
          </Flex>
        </Heading>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          mt="6"
          direction="row"
          wrap="wrap"
        >
          {cards.map((hook, index) => {
            return <HookCard hook={hook} key={index} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export { Highlights };
