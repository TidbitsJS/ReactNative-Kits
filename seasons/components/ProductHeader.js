import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, icons, SIZES } from "../constants";

const ProductHeader = ({ navigation, name }) => {
  return (
    <View
      style={{
        width: "100%",
        padding: SIZES.base,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              style={{ width: 17, height: 14 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "AvenirRoman",
              fontSize: 17,
              color: COLORS.primary,
              marginLeft: SIZES.small,
            }}
          >
            {name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={icons.search}
              style={{ width: 16, height: 16 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={icons.bag}
              style={{ width: 16, height: 18, marginLeft: SIZES.medium }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductHeader;
