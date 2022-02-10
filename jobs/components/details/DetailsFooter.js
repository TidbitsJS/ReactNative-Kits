import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, icons } from "../../constants";

const DetailsFooter = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: SIZES.small,
        backgroundColor: "#FFF",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        style={{
          width: 55,
          height: 55,
          borderWidth: 1,
          borderColor: "#F37453",
          borderRadius: SIZES.medium,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={{ width: "40%", height: "40%", tintColor: "#F37453" }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "#FE7654",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: SIZES.medium,
          borderRadius: SIZES.medium,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.medium,
            color: COLORS.white,
            fontFamily: "DMBold",
          }}
        >
          Apply for job
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsFooter;
