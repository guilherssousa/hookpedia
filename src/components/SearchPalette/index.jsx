import { useState, useMemo, useEffect } from "react";
import {
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  useEventListener,
  Flex,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

import { api } from "services/api";
import { Link } from "components/Link";

function SearchPalette({ isOpen, onClose, onOpen }) {
  const [query, setQuery] = useState("");
  const [hooks, setHooks] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchHooks() {
      const { data } = await api.get("/hooks");
      setHooks(data);
    }

    fetchHooks();
  }, []);

  function customOnClose() {
    onClose();
    setQuery("");
  }

  useEventListener("keydown", (event) => {
    if (!onClose || !onOpen) return;

    if (event.code === "KeyK" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      isOpen ? customOnClose() : onOpen();
    }
  });

  useMemo(() => {
    const _results = hooks.filter((hook) => {
      return hook.title.toLowerCase().includes(query.toLowerCase());
    });

    setResults(_results);
  }, [query, hooks]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Modal isOpen={isOpen} scrollBehavior="inside" onClose={customOnClose}>
      <ModalOverlay />
      <ModalContent
        bgColor="gray.700"
        role="combobox"
        aria-expanded="true"
        aria-haspopup="listbox"
        rounded="lg"
        overflow="hidden"
        top="4vh"
        shadow="lg"
        maxW="600px"
      >
        <Flex pos="relative" align="stretch">
          <chakra.input
            aria-autocomplete="list"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            maxLength={64}
            value={query}
            onChange={handleChange}
            textColor="white"
            bg="gray.700"
            borderBottom="1px solid"
            borderBottomColor="gray.600"
            sx={{
              w: "100%",
              h: "68px",
              pl: "68px",
              fontWeight: "medium",
              outline: 0,
            }}
            placeholder="Procure por um Hook... (ex.: useLocalStorage)"
          />
          <Center pos="absolute" left={7} h="68px">
            <Search2Icon color="teal.500" boxSize="20px" />
          </Center>
        </Flex>
        <Box py="4">
          {query.length > 1 ? (
            results.slice(0, 10).map((result) => (
              <Link
                px="8"
                py="2"
                color="#FFF"
                fontWeight={"bold"}
                fontSize="md"
                key={`query-result-${result.title}`}
                href={`/${result.slug}`}
                display="block"
                style={{
                  textDecoration: "none",
                  boxShadow: "none",
                  margin: 0,
                }}
                onClick={customOnClose}
                _hover={{
                  bg: "blue.600",
                }}
              >
                {result.title}
              </Link>
            ))
          ) : (
            <Text>Não há hooks com esse nome :&#40;</Text>
          )}
        </Box>
      </ModalContent>
    </Modal>
  );
}

export { SearchPalette };
