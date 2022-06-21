import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { SIZES, COLORS, FONT, icons } from "../constants";

const ShoeCard = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        marginRight: SIZES.xxlarge * 2,
      }}
    >
      <View
        style={{
          maxWidth: 237,
          padding: SIZES.large,
          borderRadius: 36,
          backgroundColor: COLORS.white,
        }}
      >
        <Text
          style={{
            fontFamily: FONT.bebasNeue,
            fontSize: 30,
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
            fontSize: 43,
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
            fontSize: 30,
            color: COLORS.primary,
            marginTop: SIZES.medium,
            maxWidth: 100,
          }}
          numberOfLines={1}
        >
          $ {item.price} USD
        </Text>

        <View style={{ marginTop: -70 }}>
          <Image
            source={item.imgUrl}
            resizeMode="contain"
            style={{
              width: 288,
              height: 192,
              transform: [{ rotate: "-19deg" }],
              zIndex: 1,
              marginLeft: -30,
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
              width: 60,
              height: 60,
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
