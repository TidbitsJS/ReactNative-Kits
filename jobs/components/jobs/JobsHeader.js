import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, icons, SHADOWS } from "../../constants";

const searchTypes = ["Most Relevant", "Most Recent", "Most Popular"];

function SearchBtn({ name, activeSearchType, onHandleSearchType }) {
  return (
    <TouchableOpacity
      style={{
        padding: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        backgroundColor: name === activeSearchType ? COLORS.primary : "#F3F4F8",
        borderRadius: SIZES.medium,
        margin: SIZES.medium,
        marginLeft: 2,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
      }}
      onPress={onHandleSearchType}
    >
      <Text
        style={{
          fontFamily: "DMMedium",
          fontSize: SIZES.small,
          color: name === activeSearchType ? "#C3BFCC" : "#AAA9B8",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

function JobsHeader() {
  const navigation = useNavigation();
  const [activeSearchType, setActiveSearchType] =
    React.useState("Most Relevant");

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

      <View style={{ marginTop: SIZES.small }}>
        <FlatList
          data={searchTypes}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <SearchBtn
              name={item}
              activeSearchType={activeSearchType}
              onHandleSearchType={() => setActiveSearchType(item)}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default JobsHeader;
