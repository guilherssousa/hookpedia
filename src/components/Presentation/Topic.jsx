import { GridItem, Heading, Text } from "@chakra-ui/react";

function Topic({ title, children }) {
  return (
    <GridItem>
      <Heading as="h3" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
        {title}
      </Heading>
      <Text mt={[1, 2, 4]} fontSize="xl" color="gray.300" maxW="xl">
        {children}
      </Text>
    </GridItem>
  );
}

export { Topic };
