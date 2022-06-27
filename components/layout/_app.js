import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import media from "../styles/media";
import Layout from "../components/layout/layout";
import GlobalStyle from "../styles/globalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={{ ...theme, ...media }}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
