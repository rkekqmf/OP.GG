import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 7em;
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
      font-size: 4rem;
      text-align: start;
    `};
  }

  div {
    display: grid;
    justify-content: center;
    justify-items: center;
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
    border-radius: 5px;
    width: fit-content;
    font-size: 1.8rem;
    box-shadow: 0 0 3px 2px ${({ theme }) => theme.shadowColor};
    ${({ theme }) => theme.xl`
      font-size: 2.2rem;
    `};
  }
`;
