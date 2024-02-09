import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          icon: {
            fill: "black",
          },
          appbar: {
            border: "#ccc",
            searchIconBackground: "#ccc",
            background: "#fff",
            inputBackground: "#fff",
            inputColor: "#111111",
          },
          youtubeTabs: {
            background: "white",
          },
        }
      : {
          icon: {
            fill: "white",
          },
          appbar: {
            border: "#303030",
            searchIconBackground: "#303030",
            background: "#121212",
            inputBackground: "#121212",
            inputColor: "#ffffffe0",
          },
          youtubeTabs: {
            background: "#121212",
          },
        }),
  },
});
