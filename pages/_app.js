import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import { media } from "../styles/media";
import GlobalStyle from "../styles/globalStyle";
import Layout from "./layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? { ...darkTheme, ...media } : { ...lightTheme, ...media }}>
        <GlobalStyle />
        <Layout toggleDarkMode={toggleDarkMode}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
