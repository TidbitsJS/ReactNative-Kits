import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES, icons } from "../../constants";

const DetailsHeader = ({ url, jobtype, name, location }) => {
  return (
    <View
      style={{
        marginVertical: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 80,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF",
          borderRadius: SIZES.large,
        }}
      >
        <Image source={url} style={{ width: "80%", height: "80%" }} />
      </View>

      <View style={{ marginTop: SIZES.small }}>
        <Text
          style={{
            fontSize: SIZES.large,
            color: COLORS.primary,
            fontFamily: "DMBold",
          }}
        >
          {jobtype}
        </Text>
      </View>

      <View
        style={{
          marginTop: SIZES.small / 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.medium - 2,
            color: COLORS.primary,
            fontFamily: "DMMedium",
          }}
        >
          {name} /{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.location}
            resizeMode="contain"
            style={{ width: 14, height: 14, tintColor: COLORS.gray }}
          />
          <Text
            style={{
              fontSize: SIZES.medium - 2,
              color: COLORS.gray,
              fontFamily: "DMRegular",
              marginLeft: 2,
            }}
          >
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsHeader;
