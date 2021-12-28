import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import Header from "../components/Header";
import Info from "../components/Info";
import Price from "../components/Price";
import { images, COLORS, FONTS, SIZES } from "../constants";
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
          <Header />

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
                marginBottom: SIZES.font,
              }}
            >
              <Image
                source={images.nikon}
                resizeMode="contain"
                style={{
                  width: "100%",
                  maxWidth: 400,
                  height: 255,
                }}
              />
            </View>

            <Price amount="3.499" />

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: SIZES.font2,
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
                  top: -SIZES.font2,
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

                <Info title="MADE WITH D5" data={data} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
