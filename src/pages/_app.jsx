import { ChakraProvider } from "@chakra-ui/react";
import "moment/locale/pt-br";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
