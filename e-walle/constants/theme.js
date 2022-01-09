const COLORS = {
  primary: "#3A4276",
  secondary: "#171822",
  tertiary: "#FFAC30",

  white: "#FFFFFF",
  black: "#1B1D28",

  lightWhite: "#F1F3F6",
  lightGray: "#7B7F9E",
};

const SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 32,
};

const FONTS = {
  h1: {
    fontSize: SIZES.xlarge,
    lineHeight: 37.03,
    fontFamily: "AvenirBlack",
  },
  h2: {
    fontSize: SIZES.medium,
    lineHeight: 24.69,
    fontFamily: "AvenirBook",
  },
  p: {
    fontSize: SIZES.small - 2,
    lineHeight: 15.43,
    fontFamily: "AvenirRoman",
  },
};

export { COLORS, SIZES, FONTS };
