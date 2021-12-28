import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { SIZES, COLORS, FONTS } from "../constants";

const Info = ({ title, data }) => {
  return (
    <View style={{ marginTop: SIZES.font2 }}>
      <Text
        style={{
          ...FONTS.headText,
          color: COLORS.white,
          fontFamily: "OpenSans-Bold",
        }}
      >
        {title}
      </Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              width: 80,
              height: 80,
              margin: SIZES.small / 2,
            }}
          >
            <Image
              source={item.photo}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Info;
