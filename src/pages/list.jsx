import Head from "next/head";
import { chakra, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { SEO } from "components/SEO";
import { Navbar } from "components/Navbar";
import { SearchPalette } from "components/SearchPalette";
import { Footer } from "components/Footer";

import { Link } from "components/Link";

import { getAllHooks } from "./api/hooks";

function ListPage({ hooks }) {
  return (
    <>
      <Head>
        <title>Lista de Hooks | Hookpedia</title>
        <SEO title="Lista de Hooks | Hookpedia" />
      </Head>
      <Box bg="gray.800">
        <Navbar />
        <Box bg="gray.800" textColor="white" minH="85vh" px="16" py="16">
          <Box maxW="container.lg" mx="auto">
            <Box minH="70vh">
              <Heading as="h2">Todos os Hooks</Heading>
              <Box mt={2}>
                {hooks.map((hook) => (
                  <Link
                    href={`/${hook.title}`}
                    key={hook.title}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Flex
                      p={6}
                      justify={"space-between"}
                      borderRadius="md"
                      bg="gray.700"
                      _hover={{
                        bg: "gray.600",
                      }}
                    >
                      <Box>
                        <Heading as="h3" fontSize="2xl">
                          {hook.title}
                          <chakra.span
                            ml={{ base: 0, md: 2 }}
                            display={{ base: "block", md: "inline" }}
                          >
                            <chakra.span
                              fontSize="sm"
                              px={2}
                              py={1}
                              borderRadius={"md"}
                              bg="yellow.400"
                              color="black"
                            >
                              Javascript
                            </chakra.span>
                            {hook?.isMultilingual && (
                              <chakra.span
                                fontSize="sm"
                                px={2}
                                py={1}
                                borderRadius={"md"}
                                bg="blue.400"
                                color="white"
                                ml="2"
                              >
                                TypeScript
                              </chakra.span>
                            )}
                          </chakra.span>
                        </Heading>

                        <Text mt="4">
                          {hook.description.split(" ").slice(0, 20).join(" ")}
                          ...
                        </Text>
                      </Box>
                      <ChevronRightIcon width={8} height={8} />
                    </Flex>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <SearchPalette />
        <Footer />
      </Box>
    </>
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
