import React from "react";
import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";

const HomeHeader = () => {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: SIZES.base,
        }}
      >
        <TouchableOpacity>
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{ width: 24, height: 24, tintColor: COLORS.primary }}
          />
        </TouchableOpacity>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{
            width: 70,
            height: 35,
            tintColor: COLORS.secondary,
            marginHorizontal: SIZES.small,
          }}
        />
        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20 }}>
          <Image
            source={images.enola}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: SIZES.small,
          borderRadius: SIZES.small + 2,
          borderWidth: 2,
          borderColor: COLORS.lightWhite,
          margin: SIZES.base,
        }}
      >
        <TouchableOpacity>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={{ width: 24, height: 24, tintColor: COLORS.primary }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search for products"
          style={{
            flex: 1,
            color: COLORS.secondary,
            paddingHorizontal: SIZES.small,
            ...FONTS.regular,
          }}
          placeholderTextColor={COLORS.primary}
        />
        <TouchableOpacity>
          <Image
            source={icons.mic}
            resizeMode="contain"
            style={{ width: 24, height: 24, tintColor: COLORS.primary }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
