import { GridItem, Heading, Text } from "@chakra-ui/react";

import { Link } from "components/Link";

function HookCard({ hook }) {
  return (
    <Link
      display="block"
      _hover={{
        textDecoratrion: "none",
      }}
      href={`/${hook.slug}`}
      m="2"
    >
      <GridItem
        bgColor="gray.700"
        p="8"
        borderRadius="md"
        transition={["all", "0.2s", "ease-in-out", "0.2s"]}
        _hover={{ bgColor: "gray.600" }}
        h="100%"
      >
        <Heading as="h3" size="md">
          {hook.title}
        </Heading>
        <Text color="gray.400" mt="2">
          {hook.description.split(" ").slice(0, 20).join(" ")}...
        </Text>
      </GridItem>
    </Link>
  );
}

export { HookCard };
