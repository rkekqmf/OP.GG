import Footer from '../src/components/layout/Footer';
import Header from '../src/components/layout/Header';
import styled from '@emotion/styled';
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Test color="green">app.js</Test>
      <Footer />
    </>
  );
};

const Test = styled.div`
  color: ${(props) => props.color};
`;

export default MyApp;
