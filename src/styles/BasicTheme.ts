import { createMuiTheme } from "@material-ui/core/styles";

const BasicTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#A17C6B",
    },
    secondary: {
      main: "#218380",
    },
    highlight: {
      main: "#2ebc4f",
    },
    type: "dark",
  },
  typography: {
    fontSize: 15,
    fontFamily: "'Baloo Tamma 2', cursive;",
    h1: { fontFamily: "'Fredoka One', cursive;" },
    h2: { fontFamily: "'Fredoka One', cursive;" },
    h3: { fontFamily: "'Fredoka One', cursive;" },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 10,
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      sizeLarge: {
        padding: "16px 22px",
      },
    },
    MuiCardContent: {
      root: {
        padding: "24px",
      },
    },
    MuiInputLabel: {
      root: {
        fontWeight: "bold",
        color: "#020202",
      },
    },
  },
});

export const LightBasicTheme = createMuiTheme({
  ...BasicTheme,
  palette: {
    primary: {
      main: "#A17C6B",
    },
    secondary: {
      main: "#218380",
    },
    highlight: {
      main: "#2ebc4f",
    },
    type: "light",
  },
});

export default BasicTheme;
