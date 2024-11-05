import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      700: "#303030", // Color para el modo oscuro
      50: "#e8e8e8",  // Color para el modo claro
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#212121" : "#ffffff",
      },
      "tbody tr:nth-of-type(odd)": {
        bg: props.colorMode === "dark" ? "gray.700" : "gray.50",
      },
    }),
  },
});

export default theme;