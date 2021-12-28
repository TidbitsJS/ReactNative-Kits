import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { SIZES, icons } from "../constants";

const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: SIZES.small,
      }}
    >
      <TouchableOpacity>
        <Image
          source={icons.arrow}
          resizeMode="contain"
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={icons.menu}
          resizeMode="contain"
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
