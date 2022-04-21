import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTFAMILY } from "../constants";

const ProfileTag = ({ title, iconUrl }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 4,
      }}
    >
      <Text
        style={{
          fontFamily: FONTFAMILY.semiBold,
          color: COLORS.mediumBlue,
          fontSize: 15,
          marginRight: 10,
          lineHeight: 20,
        }}
      >
        {title}
      </Text>
      <Image
        source={iconUrl}
        style={{
          width: 20,
          height: 20,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default ProfileTag;
