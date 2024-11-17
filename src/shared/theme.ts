"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-inter)",
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
  colorSchemes: {
    dark: {
      palette: {
        background: {
          paper: "#313244",
          default: "#1e1e2e",
        },
        primary: {
          main: "#89b4fa",
          light: "#89b4fa",
          dark: "#89b4fa",
          contrastText: "#fff",
        },
        secondary: {
          light: "#cba6f7",
          main: "#cba6f7",
          dark: "#cba6f7",
          contrastText: "#fff",
        },
        text: {
          primary: "#fff",
          secondary: " #cdd6f4",
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: "#1e66f5",
          light: "#1e66f5",
          dark: "#1e66f5",
          contrastText: "#000",
        },
        secondary: {
          light: "#ff7961",
          main: "#f44336",
          dark: "#ba000d",
          contrastText: "#000",
        },
      },
    },
  },
});

export default theme;
