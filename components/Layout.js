import styled from "styled-components";
import Footer from "./Footer";
import HeadInfo from "./HeadInfo";

const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
