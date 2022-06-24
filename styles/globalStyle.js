import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jua", sans-serif;
}

html,
body {
  background: ${({ theme }) => theme.bgColor};
  display: flex;
  width: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.fontColor};
  transition: 0.5s;
}

#__next {
  display: flex;
  flex-direction: column;
  padding-top: 3.5em;
  padding-bottom: 15.5em;
  width: 100%;
  min-height: 100vh;
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}`;

export default GlobalStyle;
