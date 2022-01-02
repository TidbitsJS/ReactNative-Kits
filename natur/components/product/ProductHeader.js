import React from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { COLORS, icons, SIZES } from "../../constants";

const ProductHeader = ({ img, navigation }) => {
  return (
    <View style={{ width: "100%", backgroundColor: COLORS.brownWhite }}>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 450,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: SIZES.medium,
            marginVertical: SIZES.medium,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.arrow}
              resizeMode="contain"
              style={{
                width: 24,
                height: 27,
                tintColor: COLORS.primary,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={icons.heart}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: COLORS.primary,
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProductHeader;
