import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { images, COLORS, FONTFAMILY } from "../constants";

const Settings = ({ iconUrl, iconColor, title }) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: iconColor,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 12,
        }}
      >
        <Image
          source={iconUrl}
          style={{
            width: "60%",
            height: "60%",
            tintColor: COLORS.white,
          }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: COLORS.darkBlue,
            fontFamily: FONTFAMILY.semiBold,
          }}
        >
          {title}
        </Text>

        <Image
          source={images.rightArrow}
          style={{
            width: 15,
            height: 15,
            tintColor: COLORS.gray,
          }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Settings;
