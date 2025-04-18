import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    textPrimary: "#000",
    textOnPrimary: "#fff",
    backgroundPrimary: "#fff",
    backgroundDark: "#000",

    brandPrimary: "#005cff",
    brandSecondary: "#00bfff",

    buttonPrimary: "#005cff",
    buttonHover: "#00bfff",
  },
  fontSize: {
    small: "12px",
  },
};
const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
