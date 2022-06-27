import { css } from "styled-components";

const sizes = {
  XS: 375,
  S: 600,
  M: 768,
  L: 992,
  XL: 1200,
  XXL: 1800,
};

export default Object.entries(sizes).reduce((acc, [key, value]) => {
  acc[key] = (...args) => css`
    @media screen and (min-width: ${value}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
