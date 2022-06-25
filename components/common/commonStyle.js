import styled, { css } from "styled-components";

// css Mixin
const cc = css`
  display: flex;
  justify-content: center;
`;
const zz = styled.div`
  background-color: black;
  color: yellow;
  padding: 20px;
  ${cc}
`;
// attrs
const xx = styled.input.attrs({ type: "checkbox" })``;
// style objects
const Ez = styled.div((props) => ({ display: "zz", color: "zz", borderRadius: "zz" }));

export const Container = styled.main`
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  column-gap: ${({ columnGap }) => columnGap};
  transition: ${({ transition }) => transition};
  color: ${({ color }) => color};
  margin-top: 4rem;
  @media only screen and (min-width: 992px) {
    flex-direction: ${({ media }) => media.flexDirection};
    row-gap: ${({ media }) => media.rowGap};
  }
`;

Container.defaultProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "10rem",
  transition: "0.5s",
  media: {
    flexDirection: "row",
    rowGap: "2rem",
  },
};
