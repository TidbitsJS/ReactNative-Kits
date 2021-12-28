export const COLORS = {
  primary: "#23262F",
  secondary: "#444752",
  tertiary: "#ADB7D0",

  white: "#FFFFFF",
  black: "#000000",
  red: "#EB4A52",
  blue: "#1D8FE1",
  green: "#D4FC79",
  orange: "#FDA085",
  lightGray: "#D8D8D8",
};

export const SIZES = {
  small: 11,
  base: 12,
  font: 14,
  font2: 25,
  font3: 70,
};

export const FONTS = {
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: SIZES.font3,
  },
  heading: {
    fontFamily: "OpenSans-Bold",
    fontSize: SIZES.font2,
    lineHeight: 34,
  },
  subHeading: {
    fontFamily: "OpenSans-Medium",
    fontSize: SIZES.font,
    lineHeight: 20,
  },
  headText: {
    fontFamily: "OpenSans-Regular",
    fontSize: SIZES.base,
    lineHeight: 16,
  },
  bodyText: {
    fontFamily: "OpenSans-Regular",
    fontSize: SIZES.small,
    lineHeight: 14,
  },
};

export const SHADOW = {
  darkShadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  mediumShadow: {
    shadowColor: COLORS.primary,
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
    shadowColor: COLORS.lightGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 1,
  },
};

export default {
  COLORS,
  SIZES,
  FONTS,
  SHADOW,
};
