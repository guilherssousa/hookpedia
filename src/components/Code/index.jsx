import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);

function Code({ children, lang, expected }) {
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
    <SyntaxHighlighter
      language={lang}
      style={atomDark}
      customStyle={{
        marginTop: "1.5em",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export { Code };
