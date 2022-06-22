import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faCircleNodes,
  faEnvelope,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <Container>
      <div>
        <Wave1></Wave1>
        <Wave2></Wave2>
        <Wave3></Wave3>
        <Wave4></Wave4>
      </div>
      <Menu>
        <li>
          <Link href={"/"}>
            <a>
              <span>홈</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/resume"}>
            <a>
              <span>이력서</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/coverLetter"}>
            <a>
              <span>자기소개서</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/projects"}>
            <a>
              <span>프로젝트</span>
            </a>
          </Link>
        </li>
      </Menu>
      <Contact>
        <li>
          <a href="https://github.com/rkekqmf" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="mailto:rkekqmf@gmail.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/rkekqmf/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            href="https://www.op.gg/summoners/kr/%EA%B0%80%EC%9E%A5%EB%94%B0%EB%9C%BB%ED%95%9C%EC%83%89%EB%B8%94%EB%A3%A8"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGamepad} />
          </a>
        </li>
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
  padding: 20px 50px;
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
    font-size: 2em;
    color: #fff;
    transition: 0.5s;
    &:hover {
      transform: translateY(-10px);
    }
  }
`;

const Contact = styled(Menu)`
  a {
    font-size: 1.5em;
    opacity: 0.6;
    &:hover {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Info = styled.ul`
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
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(wave.png);
  background-size: 1000px 100px;
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: ${WaveKeyframes1} 4s linear infinite;
`;
const Wave2 = styled(Wave1)`
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: ${WaveKeyframes2} 4s linear infinite;
`;
const Wave3 = styled(Wave1)`
  z-index: 998;
  opacity: 0.2;
  bottom: 15px;
  animation: ${WaveKeyframes1} 3s linear infinite;
`;
const Wave4 = styled(Wave1)`
  z-index: 997;
  opacity: 0.7;
  bottom: 20px;
  animation: ${WaveKeyframes2} 3s linear infinite;
`;
export default Footer;
