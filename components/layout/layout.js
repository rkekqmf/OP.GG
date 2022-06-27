import styled from "styled-components";
import Footer from "./footer";
import HeadInfo from "./headInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ toggleDarkMode, children }) => {
  return (
    <>
      <HeadInfo />
      <Icon>
        <FontAwesomeIcon icon={faLightbulb} onClick={toggleDarkMode} />
      </Icon>
      {children}
      <Footer />
    </>
  );
};

const Icon = styled.i`
  position: absolute;
  top: 20px;
  right: 20px;
  svg {
    transition: 0.1s;
    font-size: 2em;
    filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff) drop-shadow(0 0 15px #fff);
    &:hover {
      cursor: pointer;
    }
  }
`;
export default Layout;
