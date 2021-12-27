import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { icons, images } from "../constants";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const data = [
  {
    id: 1,
    title: "Canon EOS 5D Mark IV",
    photo: images.photo01,
  },
  {
    id: 2,
    title: "Canon EOS 5D Mark IV",
    photo: images.photo02,
  },
  {
    id: 3,
    title: "Canon EOS 5D Mark IV",
    photo: images.photo03,
  },
];

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: SIZES.small,
            }}
          >
            <TouchableOpacity>
              <Image
                source={icons.arrow}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>

          <View>
            <View style={{ position: "absolute" }}>
              <Text
                style={{
                  ...FONTS.heading,
                  textTransform: "uppercase",
                  color: COLORS.white,
                  paddingHorizontal: SIZES.base * 2,
                  position: "absolute",
                  top: SIZES.font * 3,
                  left: SIZES.base,
                  zIndex: 1,
                }}
              >
                Canon
              </Text>
              <ImageBackground
                source={images.oval}
                resizeMode="stretch"
                style={{
                  position: "absolute",
                  width: 360,
                  height: 460,
                }}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: SIZES.font2 * 1.25,
              }}
            >
              <Image
                source={images.cam}
                resizeMode="stretch"
                style={{
                  width: 300,
                  height: 290,
                }}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingVertical: SIZES.small / 2,
                  paddingHorizontal: SIZES.small,
                  backgroundColor: COLORS.secondary,
                  borderRadius: 2,
                  marginLeft: SIZES.font * 4,
                }}
              >
                <Text
                  style={{
                    ...FONTS.headText,
                    color: COLORS.white,
                    textTransform: "uppercase",
                    fontFamily: "OpenSans-Bold",
                  }}
                >
                  In Stock
                </Text>
              </View>
            </View>

            <View
              style={{
                paddingHorizontal: SIZES.font * 2,
                marginTop: -SIZES.small,
              }}
            >
              <Text
                style={{
                  ...FONTS.title,
                  textAlign: "left",
                  color: COLORS.white,
                }}
              >
                €3.599
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: SIZES.base,
              }}
            >
              <ImageBackground
                source={images.brand}
                resizeMode="stretch"
                style={{
                  width: 250,
                  height: 260,
                  position: "absolute",
                  marginTop: -SIZES.font2,
                }}
              />
              <View style={{ flex: 0.7 }} />
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  paddingHorizontal: SIZES.small,
                }}
              >
                <Text
                  style={{
                    ...FONTS.bodyText,
                    color: COLORS.tertiary,
                    textAlign: "justify",
                  }}
                >
                  The <Text style={{ color: COLORS.red }}>EOS 5D Mark IV</Text>{" "}
                  camera builds on the powerful legacy of the{" "}
                  <Text style={{ color: COLORS.red }}>5D</Text> series with
                  imaging excellence ideal for wedding and portrait
                  photographers, nature and landscape shooters, as well as
                  creative videographers.
                </Text>

                <View style={{ marginTop: SIZES.font2 }}>
                  <Text
                    style={{
                      ...FONTS.headText,
                      color: COLORS.white,
                      fontFamily: "OpenSans-Bold",
                    }}
                  >
                    MADE WITH Mk IV
                  </Text>

                  <FlatList
                    data={data}
                    renderItem={({ item }) => (
                      <View
                        style={{
                          width: 80,
                          height: 80,
                          margin: SIZES.small / 2,
                        }}
                      >
                        <Image
                          source={item.photo}
                          style={{ width: "100%", height: "100%" }}
                          resizeMode="contain"
                        />
                      </View>
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
