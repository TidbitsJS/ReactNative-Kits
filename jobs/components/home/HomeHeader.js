import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { COLORS, SIZES, images, icons } from "../../constants";

const jobTypes = ["Product", "Design", "Development"];

function HomeHeader() {
  const [activeJobType, setActiveJobType] = React.useState("Product");

  return (
    <React.Fragment>
      <View
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.small / 1.25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{
              width: "60%",
              height: "60%",
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.small / 1.25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={images.profile}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: SIZES.small / 1.25,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ width: "100%", marginTop: SIZES.xLarge }}>
        <Text
          style={{
            fontFamily: "DMRegular",
            fontSize: SIZES.large,
            color: COLORS.secondary,
          }}
        >
          Hello Antonio
        </Text>
        <Text
          style={{
            fontFamily: "DMBold",
            fontSize: SIZES.xLarge,
            color: COLORS.primary,
            marginTop: 2,
          }}
        >
          Find your perfect job
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: SIZES.large,
          height: 50,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            marginRight: SIZES.small,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.medium,
            height: "100%",
          }}
        >
          <TextInput
            style={{
              fontFamily: "DMRegular",
              width: "100%",
              height: "100%",
              paddingHorizontal: SIZES.medium,
            }}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            height: "100%",
            backgroundColor: COLORS.tertiary,
            borderRadius: SIZES.medium,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={{
              width: "50%",
              height: "50%",
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ width: "100%", marginTop: SIZES.small }}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                paddingVertical: SIZES.small / 2,
                paddingHorizontal: SIZES.small,
                borderRadius: SIZES.medium,
                borderWidth: 1,
                borderColor:
                  activeJobType === item ? COLORS.secondary : COLORS.gray2,
                margin: SIZES.small / 2,
              }}
              onPress={() => setActiveJobType(item)}
            >
              <Text
                style={{
                  fontFamily: "DMMedium",
                  color:
                    activeJobType === item ? COLORS.secondary : COLORS.gray2,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
        />
      </View>
    </React.Fragment>
  );
}

export default HomeHeader;
