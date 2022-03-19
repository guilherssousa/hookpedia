import {
  chakra,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Stack,
  Link,
  Kbd,
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
          <Heading as="h2" size="4xl" align="center" lineHeight="normal">
            A{" "}
            <chakra.span
              bgGradient="linear(to-l, blue.400, blue.200, blue.300)"
              bgClip="text"
            >
              cola suprema
            </chakra.span>{" "}
            para desenvolvedores React.
          </Heading>
          <Text
            mt="4"
            fontSize="xl"
            color="gray.300"
            noOfLines={2}
            maxW="xl"
            textAlign="center"
          >
            Uma fábrica de receitas de Hooks do React, da comunidade para a
            comunidade. Atualmente temos 39 hooks!
          </Text>

          <Stack mt="4" direction="row">
            <Button colorScheme="blue" size="lg" fontSize={20} p={8}>
              Ver os Hooks
            </Button>

            <Link isExternal href="https://github.com/guilherssousa/hookpedia">
              <Button
                fontSize={20}
                p={8}
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
          <Text mt="2">
            Use <Kbd textColor={"black"}>Ctrl</Kbd> +{" "}
            <Kbd textColor={"black"}>K</Kbd> para usar a função de busca.
          </Text>
        </Flex>
      </Box>
    </chakra.div>
  );
}

export { Header };
