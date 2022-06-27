import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

html {
  font-family: "Jua", sans-serif;
  font-size: 62.5%;
}

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
  color: ${({ theme }) => theme.fontColor};
  transition: 0.5s;
  }
  
a {
    color:inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
