import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { COLORS, SIZES } from "../constants";

const windowHeight = Dimensions.get("window").height;

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

const ProductSizeIndicator = ({
  activeSize,
  setActiveSize,
  size,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: activeSize === size ? COLORS.primary : COLORS.secondary,
        justifyContent: "center",
        alignItems: "center",
        ...props,
      }}
      onPress={() => {
        setActiveSize(size);
      }}
    >
      <Text
        style={{
          fontFamily: activeSize === size ? "AvenirHeavy" : "AvenirBook",
          fontSize: 13,
          color: activeSize === size ? COLORS.primary : COLORS.secondary,
        }}
      >
        {size}
      </Text>
    </TouchableOpacity>
  );
};

const ProductDetails = ({ product }) => {
  const [activeColor, setActiveColor] = React.useState(COLORS.lightBlue);
  const [activeSize, setActiveSize] = React.useState(product.size);

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
          minHeight: windowHeight / 2.2,
          backgroundColor: COLORS.white,
          borderTopLeftRadius: SIZES.xxlarge,
          borderBottomLeftRadius: SIZES.xxlarge,
          padding: SIZES.large,
          justifyContent: "space-around",
        }}
      >
        <View>
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

        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontFamily: "AvenirMedium",
              fontSize: 15,
              color: COLORS.primary,
              marginTop: SIZES.xlarge,
              lineHeight: 21.55,
            }}
          >
            Select Size
          </Text>

          <View style={{ marginTop: SIZES.base / 2, flexDirection: "row" }}>
            <ProductSizeIndicator
              activeSize={activeSize}
              setActiveSize={setActiveSize}
              size="S"
            />
            <ProductSizeIndicator
              activeSize={activeSize}
              setActiveSize={setActiveSize}
              size="M"
              marginLeft={SIZES.base / 2}
            />
            <ProductSizeIndicator
              activeSize={activeSize}
              setActiveSize={setActiveSize}
              size="L"
              marginLeft={SIZES.base / 2}
            />
            <ProductSizeIndicator
              activeSize={activeSize}
              setActiveSize={setActiveSize}
              size="XL"
              marginLeft={SIZES.base / 2}
            />
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              marginTop: SIZES.medium,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                padding: SIZES.small,
                borderWidth: 1,
                borderRadius: 4,
                borderColor: COLORS.primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "AvenirMedium",
                  fontSize: 14,
                  color: COLORS.primary,
                }}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                padding: SIZES.small,
                borderRadius: 4,
                backgroundColor: COLORS.primary,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: SIZES.small,
              }}
            >
              <Text
                style={{
                  fontFamily: "AvenirMedium",
                  fontSize: 14,
                  color: COLORS.white,
                }}
              >
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
