import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { icons, COLORS, SIZES, SHADOW } from "../../constants";

const DetailsNavigation = ({ navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: SIZES.padding,
        position: "absolute",
        top: SIZES.padding,
        zIndex: 1,
      }}
    >
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.black,
          ...SHADOW.darkShadow,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={icons.arrow}
          resizeMode="contain"
          style={{
            width: "60%",
            height: "60%",
            tintColor: COLORS.white,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.black,
            ...SHADOW.darkShadow,
          }}
        >
          <Image
            source={icons.upload}
            resizeMode="contain"
            style={{
              width: "50%",
              height: "50%",
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.black,
            ...SHADOW.darkShadow,
            marginLeft: SIZES.base,
          }}
        >
          <Image
            source={icons.heart}
            resizeMode="contain"
            style={{
              width: "45%",
              height: "45%",
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsNavigation;
