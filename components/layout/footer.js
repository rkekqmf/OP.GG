import Link from "next/link";
import styled, { keyframes } from "styled-components";
import SvgController from "../common/svgController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCopyright, faCircleNodes } from "@fortawesome/free-solid-svg-icons";

const MENU_DATA = [{ profile: "프로필" }, { "": "홈" }, { project: "프로젝트" }];

const CONTACT_DATA = [
  { github: "https://github.com/rkekqmf" },
  { notion: "https://rkekqmf.notion.site/d86c741ccc92419585ce85bc22ca8b87" },
  { blogger: "https://rkekqmf.tistory.com" },
  { instagram: "https://www.instagram.com/rkekqmf" },
  {
    riotgames:
      "https://www.op.gg/summoners/kr/%EA%B0%80%EC%9E%A5%EB%94%B0%EB%9C%BB%ED%95%9C%EC%83%89%EB%B8%94%EB%A3%A8",
  },
];

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
          포트폴리오
        </li>
        <li>
          <FontAwesomeIcon icon={faCopyright} />
          가장따뜻한색블루
        </li>
      </Info>
    </Container>
  );
};
const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 130px;
  padding: 15px 50px;
  width: 100%;
  min-height: 100px;
  background: #3586ff;
`;

const Menu = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  margin: 10px 0;
  a {
    display: inline-block;
    font-size: 1.9em;
    color: #fff;
    transition: 0.5s;
    &:hover {
      transform: translateY(-10px);
    }
  }
`;

const Contact = styled(Menu)`
  a {
    font-size: 1em;
    opacity: 0.6;
    &:hover {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Info = styled.ul`
  position: absolute;
  bottom: 10px;
  left: 20px;
  display: flex;
  column-gap: 10px;
  margin-top: 15px;
  margin-bottom: 10px;
  text-align: center;
  letter-spacing: 2px;
  font-size: 1.1em;
  font-weight: 100;
  color: #fff;
  opacity: 0.6;

  li {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
`;
const WaveKeyframes1 = keyframes`
0% {
  background-position-x: 1000px;
}
100% {
  background-position-x: 0px;
}`;
const WaveKeyframes2 = keyframes`
0% {
  background-position-x: 0;
}
100% {
  background-position-x: 1000px;
}`;

const Wave1 = styled.div`
  position: absolute;
  top: -3em;
  left: 0;
  width: 100%;
  height: 3em;
  background: url(wave.png);
  background-size: 1000px 3em;
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: ${WaveKeyframes1} 4s linear infinite;
`;
const Wave2 = styled(Wave1)`
  z-index: 999;
  opacity: 0.5;
  bottom: 1em;
  animation: ${WaveKeyframes2} 4s linear infinite;
`;
const Wave3 = styled(Wave1)`
  z-index: 998;
  opacity: 0.2;
  bottom: 1.5em;
  animation: ${WaveKeyframes1} 3s linear infinite;
`;
const Wave4 = styled(Wave1)`
  z-index: 997;
  opacity: 0.7;
  bottom: 2em;
  animation: ${WaveKeyframes2} 3s linear infinite;
`;
export default Footer;
