import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const windowHeight = Dimensions.get("window").height;

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            minHeight: windowHeight,
          }}
        >
          <Image
            source={images.wallpaper}
            resizeMode="cover"
            style={{
              width: 135,
              height: "100%",
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginLeft: -SIZES.small,
              paddingVertical: SIZES.small,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text style={{ ...FONTS.h1, color: COLORS.black }}>
                  06:20 PM
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginLeft: SIZES.small,
                  }}
                >
                  <Image
                    source={icons.cloud}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: SIZES.small / 2,
                    }}
                  />
                  <Text
                    style={{
                      ...FONTS.h2,
                      color: COLORS.black,
                    }}
                  >
                    34° C
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  ...FONTS.p,
                  fontSize: SIZES.small + 1,
                  color: COLORS.lightGray,
                  marginTop: SIZES.small / 2,
                }}
              >
                Nov.10.2020 | Wednesday
              </Text>
            </View>

            <View>
              <Image
                source={icons.circle}
                resizeMode="contain"
                style={{
                  width: 60.65,
                  height: 40,
                }}
              />
              <Image
                source={icons.eWalle}
                resizeMode="contain"
                style={{
                  width: 90,
                  height: 32,
                  marginTop: SIZES.small,
                }}
              />
              <Text
                style={{
                  ...FONTS.p,
                  fontSize: SIZES.small + 2,
                  color: COLORS.lightGray,
                  marginTop: SIZES.small,
                  lineHeight: SIZES.large,
                }}
              >
                Open An Account For Digital E-Wallet Solutions.Instant Payouts.
              </Text>
              <Text
                style={{
                  ...FONTS.p,
                  fontSize: SIZES.small + 2,
                  color: COLORS.lightGray,
                  marginTop: SIZES.small,
                  lineHeight: SIZES.large,
                }}
              >
                Join For Free.
              </Text>
            </View>

            <View
              style={{
                width: "100%",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "90%",
                  backgroundColor: COLORS.tertiary,
                  padding: SIZES.small,
                  borderRadius: SIZES.small - 2,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("Home")}
              >
                <Text
                  style={{
                    ...FONTS.h1,
                    fontSize: SIZES.medium,
                    lineHeight: SIZES.xlarge,
                    color: "#212330",
                    textAlign: "center",
                  }}
                >
                  Sign in
                </Text>
                <Image
                  source={icons.arrow}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: SIZES.small,
                    marginTop: 2,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  ...FONTS.p,
                  fontSize: SIZES.medium,
                  color: COLORS.lightGray,
                  marginTop: SIZES.large,
                  textAlign: "center",
                  marginRight: SIZES.large,
                }}
              >
                Create an account
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
