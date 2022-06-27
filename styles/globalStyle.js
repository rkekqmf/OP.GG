import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
#__next {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15.5rem;
  background: ${({ theme }) => theme.bgColor};
  min-width: 100vw;
  min-height: 100vh;
  font-family: "Jua", sans-serif;
  font-size: 62.5%;
  color: ${({ theme }) => theme.fontColor};
  transition: 0.5s;
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
}
`;

export default GlobalStyle;
