import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, icons, SIZES } from "../constants";

const HomeProductCard = ({ product }) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        margin: SIZES.small,
        borderRadius: SIZES.small / 2,
      }}
    >
      <TouchableOpacity style={{ width: "100%", height: 215 }}>
        <Image
          source={product.imgUrl}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SIZES.small / 2,
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: COLORS.black,
            borderBottomRightRadius: SIZES.small / 2,
            borderTopLeftRadius: SIZES.small / 2,
          }}
        >
          <Text
            style={{
              fontFamily: "AvenirRoman",
              fontSize: 11,
              color: COLORS.white,
              paddingHorizontal: SIZES.base,
              paddingVertical: SIZES.base / 2,
            }}
          >
            {product.tag}
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          width: "100%",
          marginTop: SIZES.small / 2,
          paddingHorizontal: SIZES.small / 3,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, paddingRight: SIZES.small }}>
          <Text
            style={{
              fontFamily: "PrataRegular",
              fontSize: 14,
              color: COLORS.primary,
            }}
            numberOfLines={2}
          >
            {product.name}
          </Text>
          <View style={{ marginTop: SIZES.small / 2, flexDirection: "row" }}>
            <Text style={{ fontFamily: "AvenirHeavy", fontSize: 13 }}>
              ${product.price}
            </Text>
            {product.discount !== 0 && (
              <Text
                style={{
                  fontFamily: "AvenirMedium",
                  fontSize: 13,
                  color: COLORS.red,
                  marginLeft: SIZES.small,
                }}
              >
                {product.discount}% Off
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.more}
            resizeMode="contain"
            style={{ width: 5, height: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeProductCard;
