import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

const ProductDetail = ({ chair }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: COLORS.white,
        borderTopLeftRadius: SIZES.base,
        borderTopRightRadius: SIZES.base,
        padding: SIZES.medium,
        marginTop: -SIZES.xlarge * 2.25,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: SIZES.medium,
        }}
      >
        <Text
          style={{ ...FONTS.heading, color: COLORS.secondary, maxWidth: 150 }}
        >
          {chair.name}
        </Text>
        <Text
          style={{
            ...FONTS.subHeading,
            color: COLORS.secondary,
          }}
        >
          {chair.price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: SIZES.small,
          borderWidth: 1,
          borderColor: COLORS.lightWhite,
          borderRadius: SIZES.small + 2,
          marginVertical: SIZES.small,
        }}
      >
        {chair.properties.map((item) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: SIZES.small,
            }}
            key={item.name}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{ width: 28, height: 28, tintColor: COLORS.primary }}
            />
            <Text
              style={{
                ...FONTS.smallText,
                color: COLORS.secondary,
                marginTop: 2,
              }}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </View>

      <View style={{ width: "100%" }}>
        <Text
          style={{
            ...FONTS.body,
            color: COLORS.secondary,
            opacity: 0.5,
            marginVertical: SIZES.base,
            paddingHorizontal: SIZES.small / 2,
          }}
        >
          {chair.details}
        </Text>

        <TouchableOpacity
          activeOpacity={0.45}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: SIZES.base,
            borderRadius: SIZES.small + 2,
            backgroundColor: COLORS.tertiary,
            marginTop: SIZES.base,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ ...FONTS.regular, color: COLORS.white }}>
              Add to Cart
            </Text>
          </View>
          <Image
            source={icons.cart}
            resizeMode="contain"
            style={{
              width: 24,
              height: 24,
              tintColor: COLORS.white,
              marginLeft: SIZES.small,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
