import React from "react";
import { View, Text } from "react-native";
import { SIZES, COLORS } from "../constants";

const RecipeDetails = ({ steps, preparation }) => {
  return (
    <View
      style={{
        width: "100%",
        borderTopLeftRadius: SIZES.padding * 1.25,
        borderTopRightRadius: SIZES.padding * 1.25,
        backgroundColor: COLORS.white,
        padding: SIZES.padding,
      }}
    >
      <View style={{ width: "100%", marginVertical: SIZES.base }}>
        <Text
          style={{
            fontSize: SIZES.font * 1.5,
            color: COLORS.tertiary,
            fontWeight: "700",
          }}
        >
          Ingredients
        </Text>
        <Text
          style={{
            fontSize: SIZES.font,
            color: COLORS.primary,
            marginTop: 2,
          }}
        >
          for 1 serving
        </Text>
      </View>

      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: COLORS.gray,
          marginVertical: SIZES.font,
        }}
      />

      <View style={{ width: "100%" }}>
        {steps.map((step) => (
          <Text
            key={step}
            style={{
              fontSize: SIZES.font,
              color: COLORS.primary,
              marginVertical: SIZES.base / 2,
              textAlign: "left",
            }}
          >
            {step}
          </Text>
        ))}
      </View>

      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: COLORS.gray,
          marginVertical: SIZES.padding,
        }}
      />

      <View style={{ width: "100%", marginTop: SIZES.base }}>
        <Text
          style={{
            fontSize: SIZES.font * 1.5,
            color: COLORS.tertiary,
            marginBottom: SIZES.padding,
            fontWeight: "700",
          }}
        >
          Preparation
        </Text>

        {preparation.map((step, index) => (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginVertical: SIZES.base,
            }}
            key={step}
          >
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: COLORS.tertiary,
                justifyContent: "center",
                alignItems: "center",
                marginRight: SIZES.base,
                marginTop: 2,
              }}
            >
              <Text style={{ fontSize: SIZES.base, color: COLORS.white }}>
                {index + 1}
              </Text>
            </View>
            <Text
              style={{
                flex: 1,
                fontSize: SIZES.font,
                color: COLORS.primary,
                textAlign: "left",
              }}
            >
              {step}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecipeDetails;
