import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function Link({ children, isExternal, href, hideIcon, ...rest }) {
  if (isExternal)
    return (
      <ChakraLink
        href={href}
        isExternal={isExternal}
        mx="2"
        textColor="blue.400"
        {...rest}
      >
        {children}
        {isExternal && !hideIcon && <ExternalLinkIcon mx="2" />}
      </ChakraLink>
    );

  return (
    <NextLink
      href={href}
      passHref
      style={{
        textDecoration: "none",
        color: "#fff",
      }}
    >
      <ChakraLink mx="2" boxShadow={"none!important"} {...rest}>
        {children}
      </ChakraLink>
    </NextLink>
  );
}

export { Link };
