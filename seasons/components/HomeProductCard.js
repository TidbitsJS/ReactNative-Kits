import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES } from "../constants";

const HomeProductCard = ({ product }) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        margin: SIZES.small / 2,
        borderRadius: SIZES.small / 2,
      }}
    >
      <View style={{ width: "100%", height: 215 }}>
        <Image
          source={product.imgUrl}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SIZES.small / 2,
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: COLORS.black,
            borderBottomRightRadius: SIZES.small / 2,
            borderTopLeftRadius: SIZES.small / 2,
          }}
        >
          <Text
            style={{
              fontFamily: "AvenirRoman",
              fontSize: 11,
              color: COLORS.white,
              paddingHorizontal: SIZES.base,
              paddingVertical: SIZES.base / 2,
            }}
          >
            {product.tag}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeProductCard;
