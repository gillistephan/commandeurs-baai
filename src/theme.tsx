import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
  colors: {
    pink: {
      "50": "#FAEBF5",
      "100": "#F0C7E3",
      "200": "#E6A3D1",
      "300": "#DC7FBF",
      "400": "#D25BAD",
      "500": "#C8379A",
      "600": "#A02C7C",
      "700": "#78215D",
      "800": "#50163E",
      "900": "#280B1F",
    },
    green: {
      "50": "#F8FBEA",
      "100": "#EBF3C4",
      "200": "#DDEB9E",
      "300": "#D0E377",
      "400": "#C3DC51",
      "500": "#B6D42B",
      "600": "#91A923",
      "700": "#6D7F1A",
      "800": "#495511",
      "900": "#242A09",
    },
    gray: {
      "50": "#F2F2F2",
      "100": "#DBDBDB",
      "200": "#C4C4C4",
      "300": "#ADADAD",
      "400": "#969696",
      "500": "#808080",
      "600": "#666666",
      "700": "#4D4D4D",
      "800": "#333333",
      "900": "#1A1A1A",
    },
    black: "#16161D",
  },
  fonts,
});

export default theme;
