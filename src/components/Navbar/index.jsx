import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  Button,
  useEventListener,
  useDisclosure,
  Kbd,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import { SearchPalette } from "components/SearchPalette";
import { Link } from "components/Link";

function Navbar() {
  const [scrollOffset, setScrollOffset] = useState(false);
  const modal = useDisclosure();

  useEventListener("scroll", () => {
    setScrollOffset(window.scrollY);
  });

  const glassmorphismStyles = {
    background: "rgba(45, 55, 72, 0.25)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
    backdropFilter: "blur(4px)",
    webkitBackdropFilter: "blur(4px)",
  };

  return (
    <>
      <Box
        w="100%"
        position="sticky"
        top="0"
        bg="gray.800"
        zIndex="20"
        transition={["opacity", "0.2s"]}
        style={scrollOffset > 70 ? glassmorphismStyles : {}}
      >
        <Flex
          maxW="container.xl"
          mx="auto"
          px="8"
          py="4"
          align="center"
          justify="space-between"
        >
          <Link href="/">
            <Image src="/logo.svg" alt="Hookpedia" height="36px"></Image>
          </Link>
          <HStack>
            <Box textColor="white" cursor="default">
              <Kbd
                bg="transparent"
                style={{
                  borderColor: "#ffffff40",
                }}
              >
                Ctrl
              </Kbd>{" "}
              +{" "}
              <Kbd
                bg="transparent"
                style={{
                  borderColor: "#ffffff40",
                }}
              >
                K
              </Kbd>
            </Box>
            <Button
              onClick={modal.onOpen}
              bg="none"
              transition={["filter", "0.2s"]}
              _hover={{
                bg: "none",
                filter: "brightness(70%)",
              }}
            >
              <Search2Icon color="white" w={6} h={6} />
            </Button>

            <Link
              href="https://github.com/guilherssousa/hookpedia"
              isExternal
              hideIcon
              aria-label="Repositório no GitHub"
            >
              <Image
                src="/github.svg"
                alt="Repositório no GitHub"
                w={6}
                h={6}
                color="#fff"
              />
            </Link>
          </HStack>
        </Flex>
      </Box>
      <SearchPalette {...modal} />
    </>
  );
}

export { Navbar };
