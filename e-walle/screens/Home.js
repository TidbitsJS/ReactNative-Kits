import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.circle}
              resizeMode="contain"
              style={{
                width: 47,
                height: 31,
              }}
            />
            <Image
              source={icons.eWalle}
              resizeMode="contain"
              style={{
                width: 90,
                height: 32,
                marginLeft: SIZES.small,
              }}
            />
          </View>

          <TouchableOpacity>
            <Image
              source={icons.union}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: SIZES.xxlarge }}>
          <Text
            style={{
              ...FONTS.h1,
              fontFamily: "AvenirNextDemi",
              color: COLORS.primary,
            }}
          >
            Account Overview
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: COLORS.lightWhite,
              padding: SIZES.large,
              minHeight: 116,
              marginVertical: SIZES.medium,
              borderRadius: SIZES.small,
            }}
          >
            <View style={{ justifyContent: "flex-start" }}>
              <Text
                style={{
                  ...FONTS.h1,
                  fontFamily: "AvenirNextMedium",
                  color: COLORS.black,
                }}
              >
                20,600
              </Text>
              <Text
                style={{
                  ...FONTS.p,
                  fontSize: SIZES.medium,
                  color: COLORS.primary,
                  marginTop: SIZES.small,
                }}
              >
                Current balance
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: COLORS.tertiary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.plus}
                resizeMode="contain"
                style={{
                  width: 12,
                  height: 12,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
