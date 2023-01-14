import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AnvilProvider } from "@vvv-interactive/nftanvil-react";

const container = document.getElementById("app");
const root = createRoot(container);

// Wrap ChakraProvider and AnvilProvider at the root of the app to give access to the libraries components

root.render(
  <AnvilProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </AnvilProvider>
);
