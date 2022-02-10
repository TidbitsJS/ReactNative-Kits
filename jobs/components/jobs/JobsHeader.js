import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, icons, SHADOWS } from "../../constants";
import Filters from "../Filters";

const searchTypes = ["Most Relevant", "Most Recent", "Most Popular"];

function JobsHeader() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.small / 1.25,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={icons.left}
          resizeMode="contain"
          style={{
            width: "60%",
            height: "60%",
            tintColor: COLORS.primary,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: SIZES.large,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "DMBold",
              fontSize: SIZES.xLarge,
              color: COLORS.primary,
            }}
          >
            UI/UX Design
          </Text>
          <Text
            style={{
              fontFamily: "DMMedium",
              fontSize: SIZES.small,
              color: COLORS.gray,
              marginTop: 3,
            }}
          >
            32 Job Opportunity
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.tertiary,
            borderRadius: SIZES.small,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.filter}
            resizeMode="contain"
            style={{
              width: "50%",
              height: "50%",
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: SIZES.large, marginBottom: SIZES.medium }}>
        <Filters filterTypes={searchTypes} />
      </View>
    </View>
  );
}

export default JobsHeader;
