import { css } from "styled-components";

const REM = 0.625;
const BREAK_POINT = {
  sm: 57.7 * REM,
  md: 76.9 * REM,
  lg: 99.3 * REM,
  xl: 140.1 * REM,
  xxl: 180.1 * REM,
};

export const media = Object.entries(BREAK_POINT).reduce((acc, [key, value]) => {
  acc[key] = (...args) => css`
    @media screen and (min-width: ${value}rem) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
