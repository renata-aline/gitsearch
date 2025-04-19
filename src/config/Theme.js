import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    palette: {
      primary: {
        600: "#333333",
        900: "#000",
      },
      secondary: {
        100: "#fff",
      },
      thirdy: {
        400: "#00bfff",
        500: "#005cff",
      },
      fourthy: {
        300: "#dddddd",
      },
      fifth: {
        400: "#ff0000",
      },
    },
  },
  typography: {
    h1: {
      fontSize: "60px",
      fontWeight: "600",
    },
    h2: {
      fontSize: "20px",
      fontWeight: "700",
    },
    h3: {
      fontSize: "30px",
      fontWeight: "300",
    },
    body1: {
      fontSize: "20px",
      fontWeight: "600",
    },
    body2: {
      fontSize: "15px",
      fontWeight: "300",
    },
  },
};
const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
