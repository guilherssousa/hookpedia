import React, { useState, useMemo, useCallback } from "react";
import { getHookBySlug, getAllHooks } from "./api/hooks";
import Head from "next/head";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Box, Heading, Button, Text } from "@chakra-ui/react";

import { Navbar } from "components/Navbar";
import { SearchPalette } from "components/SearchPalette";
import { Footer } from "components/Footer";

import { Code } from "components/Code";

function HookPage(props) {
  const { title, content, isMultilingual } = props;

  const [lang, setLang] = useState("jsx");
  const isCodeSwitchAvailable = useMemo(
    () => Boolean(isMultilingual),
    [isMultilingual]
  );

  const handleSwitchCodeClick = useCallback(() => {
    setLang((value) => (value === "jsx" ? "tsx" : "jsx"));
  }, []);

  return (
    <>
      <Head>
        <title>{title} | Hookpedia</title>
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
          <Box maxW="container.xl" mx="auto">
            <Heading mb="4">{title}</Heading>
            <ReactMarkdown
              children={content}
              components={{
                p: Text,
                div: Box,
                code({ children, className }) {
                  return (
                    <Code lang={lang} expected={className}>
                      {children}
                    </Code>
                  );
                },
              }}
              remarkPlugins={[remarkGfm]}
            ></ReactMarkdown>

            <Box language={lang} />
            {isCodeSwitchAvailable && (
              <Box>
                <Button
                  mt="2"
                  colorScheme={lang === "jsx" ? "blue" : "yellow"}
                  onClick={handleSwitchCodeClick}
                >
                  Veja em {lang === "jsx" ? "TypeScript" : "JavaScript"}
                </Button>
              </Box>
            )}
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
