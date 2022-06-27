import styled from "styled-components";
import Footer from "../components/layout/footer";
import HeadInfo from "../components/layout/headInfo";
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
  top: 2em;
  right: 2em;
  svg {
    font-size: 3rem;
    opacity: 0.9;
    filter: drop-shadow(0 0 0.5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 1.5rem #fff);
    &:hover {
      cursor: pointer;
    }
  }
`;
export default Layout;
