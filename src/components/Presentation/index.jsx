import dynamic from "next/dynamic";
import { Box, Grid, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Topic = dynamic(() => import("./Topic"));

function Presentation() {
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
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          align="center"
          justifyContent="space-between"
          gap="8"
          textAlign="left"
        >
          <Topic title="O que são Hooks?">
            Hooks são uma função adicionada na versão 16.8. Elas permitem que
            você use o state e outros recursos do React sem escrever uma classe.
            <Link
              isExternal
              href="https://pt-br.reactjs.org/docs/hooks-intro.html"
              mx="2"
              textColor="blue.400"
            >
              Leia mais sobre os Hooks
              <ExternalLinkIcon mx="2" />
            </Link>
          </Topic>
          <Topic title="Por que usar Hooks?">
            O uso dos Hooks te permite escrever código mais refatorado, além de
            deixar que você crie recursos complexos que podem ser compartilhados
            com toda a aplicação.
          </Topic>
          <Topic title="Quem escreve os Hooks da Hookpedia?">
            A Hookpedia é um repositório público, ou seja, qualquer pessoa pode
            adicionar, revisar e modificar os Hooks que estão fornecidos aqui.
          </Topic>
          <Topic title="Como adicionar meus próprios Hooks?">
            Seguimos alguns padrões para ter uma organização melhor de
            submissões de Hooks.{" "}
            {/* <Link textColor="blue.400">
              Clique aqui para entender o processo de aprovação de Hooks.
            </Link> */}
          </Topic>
        </Grid>
      </Box>
    </Box>
  );
}

export { Presentation };
