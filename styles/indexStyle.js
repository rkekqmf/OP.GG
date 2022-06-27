import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.xl`
    flex-direction:row;
  `};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;

  p {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.3em;
    white-space: pre-line;
    text-align: center;
    ${({ theme }) => theme.xl`
      text-align: start;
    `};
  }

  div {
    display: grid;
    justify-content: center;
    ${({ theme }) => theme.xl`
      display: flex;
      justify-content: flex-start;
      column-gap: 1.5em;
    `};
  }

  a {
    display: block;
    margin-top: 1em;
    padding: 0.7em 1em;
    border-radius: 0.5rem;
    width: fit-content;
    font-size: 1.5rem;
    box-shadow: 0 0 0.3em 0.2em ${({ theme }) => theme.shadowColor};
  }
`;
