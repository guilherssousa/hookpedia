import { Link, GridItem, Heading, Text } from "@chakra-ui/react";

function HookCard() {
  return (
    <Link
      display="block"
      _hover={{
        textDecoratrion: "none",
      }}
      m="2"
    >
      <GridItem
        bgColor="gray.700"
        p="8"
        borderRadius="md"
        transition={["all", "0.2s", "ease-in-out", "0.2s"]}
        _hover={{ bgColor: "gray.600" }}
      >
        <Heading as="h5" size="md">
          useLocalStorage
        </Heading>
        <Text color="gray.400" mt="2">
          Sincronize o estado com usando a localStorage para que os dados
          persistam após o refresh da página.
        </Text>
      </GridItem>
    </Link>
  );
}

export { HookCard };
