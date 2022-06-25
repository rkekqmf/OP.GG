const size = {
  mobile: "max-width:600px",
  tablet: "max-width:900px",
  laptop: "max-width:1200px",
  desktop: "max-width:1800px",
};

// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up)
// */
// @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}

const pallete = {
  sexColor: "red",
  mainColor: "#0a4297",
};

export const darkTheme = {
  bgColor: "#333",
  fontColor: "#fff",
  shadowColor: "#282828",
  pallete,
  size,
};

export const lightTheme = {
  bgColor: "#fff",
  fontColor: "#333",
  shadowColor: "#e8e8e8",
  pallete,
  size,
};
