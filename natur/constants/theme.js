const COLORS = {
  primary: "#E1A067",
  secondary: "#633820",
  tertiary: "#6A9347",

  white: "#FFFFFF",
  lightWhite: "#F7F1EA",
  brownWhite: "#CAACAC",
};

const SIZES = {
  small: 10,
  base: 14,
  medium: 18,
  large: 22,
  xlarge: 26,
};

const FONTS = {
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: SIZES.medium + 3,
    lineHeight: 27.3,
  },
  subHeading: {
    fontFamily: "Poppins-Medium",
    fontSize: SIZES.medium,
    lineHeight: 27,
  },
  regular: {
    fontFamily: "Poppins-Light",
    fontSize: SIZES.base,
    lineHeight: 21,
  },
  body: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.small + 2,
    lineHeight: 18,
  },
  smallText: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.small,
    lineHeight: 16,
  },
};

export { COLORS, SIZES, FONTS };
