const deviceSizes = {
  xs: "375px",
  s: "600px",
  m: "768px",
  l: "992px",
  xl: "1200px",
  xxl: "1800px",
};

const device = {
  xxs: `(max-width: ${deviceSizes.xs})`,
  xs: `(min-width: ${deviceSizes.xs})`,
  s: `(min-width: ${deviceSizes.s})`,
  m: `(min-width: ${deviceSizes.m})`,
  l: `(min-width: ${deviceSizes.l})`,
  xl: `(min-width: ${deviceSizes.xl})`,
  xxl: `(min-width: ${deviceSizes.xxl})`,
};

const pallete = {
  mainColor: "#0a4297",
};

export const darkTheme = {
  bgColor: "#333",
  fontColor: "#fff",
  shadowColor: "#282828",
  pallete,
  device,
};

export const lightTheme = {
  bgColor: "#fff",
  fontColor: "#333",
  shadowColor: "#e8e8e8",
  pallete,
  device,
};
