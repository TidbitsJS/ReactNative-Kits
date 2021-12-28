import React from "react";
import { View, Text } from "react-native";
import { SIZES, COLORS, FONTS } from "../constants";

const Price = ({ amount, title }) => {
  return (
    <View
      style={{
        flex: 1,
        maxWidth: 276,
        justifyContent: "flex-end",
        paddingHorizontal: SIZES.font * 2,
      }}
    >
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <View
          style={{
            paddingVertical: SIZES.small / 2,
            paddingHorizontal: SIZES.small,
            backgroundColor: COLORS.secondary,
            borderRadius: 2,
          }}
        >
          <Text
            style={{
              ...FONTS.headText,
              color: COLORS.white,
              textTransform: "uppercase",
              fontFamily: "OpenSans-Bold",
            }}
          >
            {title ? title : "In Stock"}
          </Text>
        </View>
      </View>

      <Text
        style={{
          ...FONTS.title,
          textAlign: "left",
          color: COLORS.white,
          marginTop: -SIZES.font,
        }}
        numberOfLines={1}
      >
        €{amount}
      </Text>
    </View>
  );
};

export default Price;
