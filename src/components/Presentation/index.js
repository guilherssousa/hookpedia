import { Box, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function Presentation() {
  return (
    <Box
      bg="gray.800"
      textColor="white"
      p="8"
      borderTop="1px"
      borderTopColor="gray.600"
    >
      <Box maxW="container.xl" mx="auto">
        <Grid
          templateColumns="repeat(2, 1fr)"
          align="center"
          justifyContent="space-between"
          gap="8"
          textAlign="left"
        >
          <GridItem mt="8">
            <Heading as="h3" size="xl">
              O que são Hooks?
            </Heading>
            <Text mt="4" fontSize="xl" color="gray.300" maxW="xl">
              Hooks são uma função adicionada na versão 16.8. Elas permitem que
              você use o state e outros recursos do React sem escrever uma
              classe.
              <Link
                isExternal
                href="https://pt-br.reactjs.org/docs/hooks-intro.html"
                mx="2"
                textColor="blue.400"
              >
                Leia mais sobre os Hooks
                <ExternalLinkIcon mx="2" />
              </Link>
            </Text>
          </GridItem>
          <GridItem mt="8">
            <Heading as="h3" size="xl">
              Por que usar Hooks?
            </Heading>
            <Text mt="4" fontSize="xl" color="gray.300" maxW="xl">
              O uso dos Hooks te permite escrever código mais refatorado, além
              de deixar que você crie recursos complexos que podem ser
              compartilhados com toda a aplicação.
            </Text>
          </GridItem>
          <GridItem mt="8">
            <Heading as="h3" size="xl">
              Quem escreve os Hooks da Hookpedia?
            </Heading>
            <Text mt="4" fontSize="xl" color="gray.300" maxW="xl">
              A Hookpedia é um repositório público, ou seja, qualquer pessoa
              pode adicionar, revisar e modificar os Hooks que estão fornecidos
              aqui.
            </Text>
          </GridItem>
          <GridItem mt="8">
            <Heading as="h3" size="xl">
              Como adicionar meus próprios Hooks?
            </Heading>
            <Text mt="4" fontSize="xl" color="gray.300" maxW="xl">
              Seguimos alguns padrões para ter uma organização melhor de
              submissões de Hooks.{" "}
              <Link textColor="blue.400">
                Clique aqui para entender o processo de aprovação de Hooks.
              </Link>
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export { Presentation };
