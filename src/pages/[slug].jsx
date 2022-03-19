import React, { useState, useMemo, useCallback } from "react";
import { getHookBySlug, getAllHooks } from "./api/hooks";
import Head from "next/head";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import moment from "moment";

import { Box, Heading, Text, Stack } from "@chakra-ui/react";

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
            <Heading mb="4">{title}</Heading>

            <Stack
              direction={{ base: "column", md: "row" }}
              align="left"
              mb="4"
            >
              <Text>{moment(date).format("LL")}</Text>
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
              children={content}
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
                    >
                      {children}
                    </Code>
                  );
                },
              }}
              remarkPlugins={[remarkGfm]}
            ></ReactMarkdown>
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
