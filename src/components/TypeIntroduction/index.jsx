import { useState } from "react";

import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Code } from "components/Code";

function TypeIntroduction() {
  const [showTypes, setShowTypes] = useState(false);

  return (
    <Box
      bg="gray.800"
      textColor="white"
      px="8"
      py="16"
      borderTop="1px"
      borderTopColor="gray.600"
    >
      <Box maxW="container.xl" mx="auto">
        <Flex direction={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "50%" }}>
            <Heading>Está precisando de tipagem? Vamos te ajudar.</Heading>
            <Text mt={[1, 2, 4]} fontSize="xl" color="gray.300" maxW="xl">
              Boa parte de nossos hooks podem ser achados tanto em Javascript,
              quanto em Typescript. Para checar se um hook possui tipagem,
              procure por esse botão:
              <Button
                mt="4"
                colorScheme={!showTypes ? "blue" : "yellow"}
                onClick={() => setShowTypes(!showTypes)}
                display="block"
              >
                Veja em {!showTypes ? "TypeScript" : "JavaScript"}
              </Button>
            </Text>
            <Text mt={[1, 2, 4]} fontSize="xl" color="gray.300" maxW="xl">
              Caso você não consiga achar, você mesmo pode enviar uma tipagem
              manualmente e submeter a revisão para ser adicionada ao site.
            </Text>
          </Box>
          <Flex
            w={{ base: "100%", md: "50%" }}
            mt={{ base: 4, md: 0 }}
            justify="center"
          >
            <Box w={"95%"} borderRadius={10} h={400} overflowY="scroll">
              {showTypes ? (
                <Code lang={"tsx"} expected={"language-tsx"}>
                  {`function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}`}
                </Code>
              ) : (
                <Code lang={"jsx"} expected={"language-jsx"}>
                  {`function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}`}
                </Code>
              )}
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export { TypeIntroduction };
