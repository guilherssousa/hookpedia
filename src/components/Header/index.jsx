import {
  chakra,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Stack,
  Link,
} from "@chakra-ui/react";

function Header() {
  return (
    <chakra.div
      textColor="white"
      bgColor="gray.800"
      bgImage="url('/pattern.svg'), radial-gradient(#4299E120 10%, #1A202C)"
      position="relative"
      px="8"
    >
      <Box maxW="container.xl" mx="auto" position="relative" zIndex={10}>
        <Flex
          direction="column"
          align="center"
          justifyContent="center"
          py="20"
          maxW="4xl"
          mx="auto"
        >
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "6xl" }}
            align="center"
            lineHeight="normal"
          >
            A{" "}
            <chakra.span
              bgGradient="linear(to-l, blue.400, blue.200, blue.300)"
              bgClip="text"
            >
              cola definitiva
            </chakra.span>{" "}
            para desenvolvedores React.
          </Heading>
          <Text
            mt="4"
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.300"
            maxW="xl"
            textAlign="center"
          >
            Uma fábrica de receitas de Hooks do React, da comunidade para a
            comunidade. Atualmente temos 39 hooks!
          </Text>

          <Stack mt="4" direction="row">
            <Button colorScheme="blue" size="lg" fontSize={20} p={[4, 6, 8]}>
              Ver os Hooks
            </Button>

            <Link
              isExternal
              href="https://github.com/guilherssousa/hookpedia"
              _hover={{ textDecor: "none" }}
            >
              <Button
                fontSize={20}
                p={[4, 6, 8]}
                leftIcon={
                  <img src="/github.svg" alt="GitHub" height={24} width={24} />
                }
                _hover={{
                  bg: "gray.600",
                }}
                _active={{
                  bg: "gray.600",
                }}
                bg="gray.700"
                size="lg"
              >
                Ver repositório
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Box>
    </chakra.div>
  );
}

export { Header };