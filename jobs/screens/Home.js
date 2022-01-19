import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../constants/icons";
import { COLORS, SIZES, SHADOWS, images } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <FocusedStatusBar
        backgroundColor={COLORS.lightWhite}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, padding: SIZES.medium }}>
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
                tintColor: COLORS.secondary,
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

        <View style={{ width: "100%", marginTop: SIZES.medium }}>
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
      </View>
    </SafeAreaView>
  );
}

export default Home;
