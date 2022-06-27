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
