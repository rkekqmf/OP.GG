import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import SvgController from "../common/svgController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCopyright, faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { MENU_DATA, CONTACT_DATA } from "../../data/layoutData";

const Footer = () => {
  return (
    <Container>
      <Wave1></Wave1>
      <Wave2></Wave2>
      <Wave3></Wave3>
      <Wave4></Wave4>
      <Menu>
        {MENU_DATA.map((menu) => (
          <li key={Object.values(menu)}>
            <Link href={"/" + Object.keys(menu)}>
              <a>
                {Object.values(menu)[0] === "홈" ? (
                  <FontAwesomeIcon icon={faHouse} />
                ) : (
                  <span>{Object.values(menu)}</span>
                )}
              </a>
            </Link>
          </li>
        ))}
      </Menu>
      <Contact>
        {CONTACT_DATA.map((contact) => (
          <li key={Object.keys(contact)}>
            <a href={Object.values(contact)} target="_blank" rel="noreferrer">
              <SvgController name={Object.keys(contact)[0]} width={27} height={27} fill="#fff" />
            </a>
          </li>
        ))}
      </Contact>
      <Info>
        <li>
          <FontAwesomeIcon icon={faCircleNodes} />
          <span>포트폴리오</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCopyright} />
          <span>가장따뜻한색블루</span>
        </li>
      </Info>
    </Container>
  );
};

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 1.5em 0;
  width: 100vw;
  background: #3586ff;
`;

const Menu = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3.5em;
  margin-top: 1em;
  margin-bottom: 2em;
  transform: translateX(1.2em);
  a {
    display: inline-block;
    font-size: 3rem;
    color: #fff;
    transition: 0.5s;
    &:hover {
      transform: translateY(-1rem);
    }
  }
`;

const Contact = styled(Menu)`
  margin: 0;
  column-gap: 3em;
  transform: translateX(0);
  a {
    font-size: 1rem;
    opacity: 0.6;
    &:hover {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Info = styled.ul`
  position: fixed;
  top: 1.5em;
  left: 1.5em;
  display: flex;
  column-gap: 1em;
  font-size: 1.4rem;
  font-weight: 100;
  color: ${({ theme }) => theme.fontColor};
  letter-spacing: 0.1em;
  opacity: 0.3;
  z-index: 2;
  span {
    margin-left: 0.5em;
  }
  ${({ theme }) => theme.lg`
    top:auto;
    bottom: 1.5em;
    color: #fff;
    font-size: 1.5rem;
  `}
`;

const WaveKeyframes1 = keyframes`
0% {
  background-position-x: 100rem;
}
100% {
  background-position-x: 0;
}`;
const WaveKeyframes2 = keyframes`
0% {
  background-position-x: 0;
}
100% {
  background-position-x: 100rem;
}`;

const Wave1 = styled.div`
  position: absolute;
  top: -3em;
  left: 0;
  width: 100%;
  height: 3em;
  background: url(wave.png);
  background-size: 100rem 3em;
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  ${css`
    animation: ${WaveKeyframes1} 4s linear infinite;
  `};
`;
const Wave2 = styled(Wave1)`
  z-index: 999;
  opacity: 0.5;
  bottom: 1em;
  ${css`
    animation: ${WaveKeyframes2} 4s linear infinite;
  `};
`;
const Wave3 = styled(Wave1)`
  z-index: 998;
  opacity: 0.2;
  bottom: 1.5em;
  ${css`
    animation: ${WaveKeyframes1} 3s linear infinite;
  `};
`;
const Wave4 = styled(Wave1)`
  z-index: 997;
  opacity: 0.7;
  bottom: 2em;
  ${css`
    animation: ${WaveKeyframes2} 3s linear infinite;
  `};
`;
export default Footer;
