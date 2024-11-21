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
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
  colorSchemes: {
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#89b4fa",
          contrastText: "#1e1e2e",
        },
        secondary: {
          main: "#cba6f7",
          contrastText: "#1e1e2e",
        },
        text: {
          primary: "#cdd6f4",
          secondary: "#bac2de",
        },
        error: {
          main: "#f38ba8",
          contrastText: "#1E1E2E",
        },
        warning: {
          main: "#fab387",
          contrastText: "#1E1E2E",
        },
        info: {
          main: "#74c7ec",
          contrastText: "#1E1E2E",
        },
        success: {
          main: "#a6e3a1",
          contrastText: "#1E1E2E",
        },
        background: {
          default: "#1e1e2e",
          paper: "#181825",
        },
      },
    },
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#1e66f5",
          contrastText: "#EFF1F5",
        },
        secondary: {
          main: "rgb(136, 57, 239)",
          contrastText: "#EFF1F5",
        },
        background: {
          default: "#eff1f5",
          paper: "#e6e9ef",
        },
        text: {
          primary: "#4c4f69",
          secondary: "#5c5f77",
          disabled: "#6c6f85",
        },
        error: {
          main: "#e64553",
          contrastText: "#eff1f5",
        },
        warning: {
          main: "#fe640b",
          contrastText: "#eff1f5",
        },
        info: {
          main: "#04a5e5",
          contrastText: "#eff1f5",
        },
        success: {
          main: "#40a02b",
          contrastText: "#eff1f5",
        },
      },
    },
  },
});

export default theme;
