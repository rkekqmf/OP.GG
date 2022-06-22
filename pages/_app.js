import Layout from "../components/layout/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
          <Component
            theme={isDarkMode ? darkTheme : lightTheme}
            {...pageProps}
          />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
