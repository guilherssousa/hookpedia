import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { Box, Button } from "@chakra-ui/react";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);

function Code({
  children,
  lang,
  expected,
  isCodeSwitchAvailable,
  handleSwitchCodeClick,
  customStyle,
}) {
  if (!expected) {
    return <code>{children}</code>;
  }

  const expectedLanguage = {
    "language-tsx": "tsx",
    "language-typescript": "tsx",
    "language-jsx": "jsx",
    "language-javascript": "jsx",
  };

  if (expectedLanguage[expected] != lang) return null;

  return (
    <>
      {isCodeSwitchAvailable && (
        <Box>
          <Button
            mt="4"
            colorScheme={lang === "jsx" ? "blue" : "yellow"}
            onClick={handleSwitchCodeClick}
          >
            Veja em {lang === "jsx" ? "TypeScript" : "JavaScript"}
          </Button>
        </Box>
      )}
      <>
        <SyntaxHighlighter
          language={lang}
          style={atomDark}
          customStyle={customStyle}
        >
          {children}
        </SyntaxHighlighter>
      </>
    </>
  );
}

export { Code };
