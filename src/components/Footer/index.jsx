import { Link, Box, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";

function Footer() {
  const [contributors, setContributors] = useState(1);

  useEffect(() => {
    async function loadContributors() {
      const axios = (await import("axios")).default;

      const { data } = await axios.get(
        "https://api.github.com/repos/guilherssousa/hookpedia/contributors"
      );

      setContributors(data.length);
    }

    loadContributors();
  }, []);

  return (
    <Box
      bg="gray.800"
      textColor="white"
      px="8"
      py="6"
      borderTop="1px"
      borderTopColor="gray.600"
    >
      <Box maxW="container.xl" mx="auto">
        <Text color="gray.400" fontSize={18}>
          Criado por{" "}
          <Link
            isExternal
            href="https://guilherssousa.github.io/"
            fontWeight={"bold"}
          >
            @guilherssousa
          </Link>
          , mantido por{" "}
          <Link
            isExternal
            href="https://github.com/guilherssousa/hookpedia/contributors"
            fontWeight={"bold"}
          >
            {contributors} pessoas
          </Link>{" "}
          💗
        </Text>
      </Box>
    </Box>
  );
}

// TODO: Adicionar o número de contribuidores puxando pela API do Github.
// https://api.github.com/repos/guilherssousa/hookpedia/contributors

export { Footer };
