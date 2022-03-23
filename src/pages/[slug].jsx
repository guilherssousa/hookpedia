import React, { useState, useMemo, useCallback } from "react";
import { getHookBySlug, getAllHooks } from "./api/hooks";
import Head from "next/head";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Box, Heading, Text, Stack, Flex, Image } from "@chakra-ui/react";

import { SEO } from "components/SEO";
import { Navbar } from "components/Navbar";
import { SearchPalette } from "components/SearchPalette";
import { Footer } from "components/Footer";
import { Link } from "components/Link";

import { Code } from "components/Code";

function HookPage(props) {
  const { title, date, content, isMultilingual, gist, sandbox } = props;

  const [lang, setLang] = useState("jsx");
  const isCodeSwitchAvailable = useMemo(
    () => Boolean(isMultilingual),
    [isMultilingual]
  );

  const handleSwitchCodeClick = useCallback(() => {
    setLang((value) => (value === "jsx" ? "tsx" : "jsx"));
  }, []);

  const Bull = () => (
    <Box mx="2" display={{ base: "none", md: "block" }}>
      &bull;
    </Box>
  );

  return (
    <>
      <Head>
        <title>{title} | Hookpedia</title>
        <SEO title={`${title} | Hookpedia`} />
      </Head>
      <Box bg="gray.800">
        <Navbar />
        <Box
          bg="gray.800"
          textColor="white"
          minH="90vh"
          px="16"
          py="16"
          borderTop="1px"
          borderTopColor="gray.600"
        >
          <Box maxW="container.lg" mx="auto">
            <Flex align="center" justify="space-between">
              <Heading mb="4">{title}</Heading>
              <Link
                isExternal
                hideIcon
                href={`https://twitter.com/intent/tweet?text=Confira "${title}" na Hookpedia! https://hookpedia.now.sh/${title}`}
              >
                <Image
                  src="/twitter.svg"
                  alt="Compartilhar no Twitter"
                  w={8}
                  h={8}
                ></Image>
              </Link>
            </Flex>

            <Stack
              direction={{ base: "column", md: "row" }}
              align="left"
              mb="4"
            >
              <Text>
                {new Date(date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </Text>
              {gist && (
                <>
                  <Bull />
                  <Link href={gist} isExternal>
                    Gist
                  </Link>
                </>
              )}
              {sandbox && (
                <>
                  <Bull />
                  <Link href={sandbox} isExternal>
                    Sandbox
                  </Link>
                </>
              )}
            </Stack>

            <ReactMarkdown
              components={{
                p: Text,
                div: Box,
                code({ children, className }) {
                  return (
                    <Code
                      lang={lang}
                      isCodeSwitchAvailable={isCodeSwitchAvailable}
                      handleSwitchCodeClick={handleSwitchCodeClick}
                      expected={className}
                      customStyle={{
                        marginTop: "1.5em",
                      }}
                    >
                      {children}
                    </Code>
                  );
                },
              }}
              remarkPlugins={[remarkGfm]}
            >
              {content}
            </ReactMarkdown>
          </Box>
        </Box>
        <SearchPalette />
        <Footer />
      </Box>
    </>
  );
}

export async function getStaticProps(context) {
  const hook = await getHookBySlug(context.params.slug);

  return {
    props: hook,
  };
}

export async function getStaticPaths() {
  let paths = await getAllHooks();

  paths = paths.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
export default HookPage;
