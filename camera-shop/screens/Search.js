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
    photo: images.photo04,
  },
  {
    id: 2,
    title: "Canon EOS 5D Mark IV",
    photo: images.photo05,
  },
  {
    id: 3,
    title: "Canon EOS 5D Mark IV",
    photo: images.photo06,
  },
];

const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <ScrollView showsVerticalScrollIndicator={false}>
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

          <View style={{ width: "100%" }}>
            <View style={{ width: "100%", position: "absolute" }}>
              <Text
                style={{
                  ...FONTS.heading,
                  textTransform: "uppercase",
                  color: COLORS.white,
                  paddingHorizontal: SIZES.base * 2,
                  position: "absolute",
                  top: SIZES.font * 2,
                  left: SIZES.base,
                  zIndex: 1,
                }}
              >
                NIKON
              </Text>
              <ImageBackground
                source={images.blueoval}
                resizeMode="stretch"
                style={{
                  position: "absolute",
                  width: "100%",
                  maxWidth: 400,
                  height: 350,
                }}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: SIZES.font2 * 2,
              }}
            >
              <Image
                source={images.nikon}
                resizeMode="stretch"
                style={{
                  width: "100%",
                  maxWidth: 250,
                  height: 210,
                }}
              />
            </View>

            <View
              style={{
                flex: 1,
                maxWidth: 276,
                justifyContent: "flex-end",
                paddingHorizontal: SIZES.font * 2,
                marginTop: SIZES.font,
              }}
            >
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    paddingVertical: SIZES.small / 2,
                    paddingHorizontal: SIZES.small,
                    backgroundColor: COLORS.secondary,
                    borderRadius: 2,
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

              <Text
                style={{
                  ...FONTS.title,
                  textAlign: "left",
                  color: COLORS.white,
                  marginTop: -SIZES.font,
                }}
                numberOfLines={1}
              >
                €3.499
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: SIZES.font2,
                minHeight: 260,
              }}
            >
              <ImageBackground
                source={images.d5}
                resizeMode="stretch"
                style={{
                  width: "100%",
                  maxWidth: 250,
                  height: 260,
                  position: "absolute",
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
                  What determines when Nikon releases a full-frame flagship
                  camera? When technological innovation demands it. Introducing
                  the <Text style={{ color: COLORS.blue }}>D5</Text>, an
                  <Text style={{ color: COLORS.blue }}> FX-format</Text> DSLR
                  that makes the impossible possible
                </Text>

                <View style={{ marginTop: SIZES.font2 }}>
                  <Text
                    style={{
                      ...FONTS.headText,
                      color: COLORS.white,
                      fontFamily: "OpenSans-Bold",
                    }}
                  >
                    MADE WITH D5
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

export default Search;
