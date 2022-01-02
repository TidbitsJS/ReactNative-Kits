const COLORS = {
  primary: "#E1A067",
  secondary: "#633820",
  tertiary: "#6A9347",

  white: "#FFFFFF",
  lightWhite: "#F7F1EA",
  brownWhite: "#CAACAC",

  brownBG: "rgba(247, 241, 234, 0.35);",
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

export const SHADOW = {
  darkShadow: {
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  mediumShadow: {
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  lightShadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  dimShadow: {
    shadowColor: COLORS.brownBG,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 1,
  },
};

export { COLORS, SIZES, FONTS };
