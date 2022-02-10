import React from "react";
import { View, Text } from "react-native";
import { COLORS, SIZES } from "../../constants";

const DetailsSection = ({ headText, bodyData }) => {
  return (
    <View
      style={{
        marginTop: SIZES.large,
        backgroundColor: "#FFF",
        borderRadius: SIZES.medium,
        padding: SIZES.medium,
      }}
    >
      <Text
        style={{
          fontSize: SIZES.large,
          color: COLORS.primary,
          fontFamily: "DMBold",
        }}
      >
        {headText}:
      </Text>

      <View style={{ marginVertical: SIZES.small }}>
        {bodyData.map((item, index) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginVertical: SIZES.small / 1.25,
            }}
            key={item + index}
          >
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 6,
                backgroundColor: COLORS.gray2,
                marginTop: 6,
              }}
            />
            <Text
              style={{
                fontSize: SIZES.medium - 2,
                color: COLORS.gray,
                fontFamily: "DMRegular",
                marginLeft: SIZES.small,
              }}
            >
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DetailsSection;
