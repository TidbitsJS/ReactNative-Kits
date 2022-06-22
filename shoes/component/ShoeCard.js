import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { SIZES, COLORS, FONT, icons } from "../constants";

const ShoeCard = ({
  item,
  cardRight,
  cardMaxWidth,
  cardRadius,
  companyFontSize,
  nameFontSize,
  priceFontSize,
  imageTop,
  imageWidth,
  imageHeight,
  imageLeft,
  cartDimension,
}) => {
  return (
    <TouchableOpacity
      style={{
        marginRight: cardRight,
      }}
    >
      <View
        style={{
          maxWidth: cardMaxWidth,
          padding: SIZES.large,
          borderRadius: cardRadius,
          backgroundColor: COLORS.white,
        }}
      >
        <Text
          style={{
            fontFamily: FONT.bebasNeue,
            fontSize: companyFontSize,
            color: COLORS.secondary,
            maxWidth: 100,
          }}
          numberOfLines={1}
        >
          {item.company}
        </Text>
        <Text
          style={{
            fontFamily: FONT.bebasNeue,
            fontSize: nameFontSize,
            color: COLORS.secondary,
            maxWidth: 100,
            marginTop: -7,
          }}
          numberOfLines={1}
        >
          {item.name}
        </Text>

        <Text
          style={{
            fontFamily: FONT.bebasNeue,
            fontSize: priceFontSize,
            color: COLORS.primary,
            marginTop: SIZES.medium,
            maxWidth: 100,
          }}
          numberOfLines={1}
        >
          $ {item.price} USD
        </Text>

        <View style={{ marginTop: imageTop }}>
          <Image
            source={item.imgUrl}
            resizeMode="contain"
            style={{
              width: imageWidth,
              height: imageHeight,
              transform: [{ rotate: "-19deg" }],
              zIndex: 1,
              marginLeft: imageLeft,
            }}
          />
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              width: cartDimension,
              height: cartDimension,
              borderRadius: SIZES.small,
              backgroundColor: COLORS.primary,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: COLORS.primary,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.51,
              shadowRadius: 13.16,

              elevation: 20,
            }}
          >
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{ width: "50%", height: "50%" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShoeCard;
