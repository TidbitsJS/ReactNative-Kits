import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants";

const ProductColorIndicator = ({
  activeColor,
  setActiveColor,
  color,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: activeColor === color ? color : COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...props,
      }}
      onPress={() => {
        setActiveColor(color);
      }}
    >
      <View
        style={{
          width: "80%",
          height: "80%",
          borderRadius: 9,
          backgroundColor: color,
        }}
      />
    </TouchableOpacity>
  );
};

const ProductDetails = ({ product }) => {
  const [activeColor, setActiveColor] = React.useState(COLORS.lightBlue);

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: -SIZES.small,
      }}
    >
      <View
        style={{
          width: "80%",
          minHeight: 290,
          backgroundColor: COLORS.white,
          borderTopLeftRadius: SIZES.xxlarge,
          borderBottomLeftRadius: SIZES.xxlarge,
          padding: SIZES.large,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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

          <View style={{ flexDirection: "row" }}>
            <ProductColorIndicator
              activeColor={activeColor}
              setActiveColor={setActiveColor}
              color={COLORS.lightBlue}
            />
            <ProductColorIndicator
              activeColor={activeColor}
              setActiveColor={setActiveColor}
              color={COLORS.lightPink}
              marginHorizontal={SIZES.base / 2}
            />
            <ProductColorIndicator
              activeColor={activeColor}
              setActiveColor={setActiveColor}
              color={COLORS.lightOrange}
            />
          </View>
        </View>

        <Text
          style={{
            fontFamily: "AvenirHeavy",
            fontSize: 16,
            color: COLORS.primary,
            marginTop: SIZES.small / 2,
          }}
        >
          ${product.price}
        </Text>

        <Text
          style={{
            fontFamily: "AvenirBook",
            fontSize: 15,
            color: COLORS.secondary,
            marginTop: SIZES.xlarge,
            lineHeight: 21.55,
          }}
        >
          {product.description}
        </Text>
      </View>
    </View>
  );
};

export default ProductDetails;
