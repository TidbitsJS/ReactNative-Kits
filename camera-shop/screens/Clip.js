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
    photo: images.photo07,
  },
  {
    id: 2,
    title: "Canon EOS 5D Mark IV",
    photo: images.photo08,
  },
  {
    id: 3,
    title: "Canon EOS 5D Mark IV",
    photo: images.photo09,
  },
];

const Clip = () => {
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
                SONY
              </Text>
              <ImageBackground
                source={images.greenoval}
                resizeMode="stretch"
                style={{
                  position: "absolute",
                  width: "100%",
                  maxWidth: 400,
                  height: 400,
                }}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: SIZES.font2 * 2,
                marginBottom: SIZES.font2 * 1.15,
              }}
            >
              <Image
                source={images.sony}
                resizeMode="contain"
                style={{
                  width: "100%",
                  maxWidth: 400,
                  height: 240,
                }}
              />
            </View>

            <Price amount="2.399" />

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: SIZES.font2,
                minHeight: 230,
              }}
            >
              <ImageBackground
                source={images.a7r}
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
                  Realism meets resolution and sensitivity - with the world's
                  first (1){" "}
                  <Text style={{ color: COLORS.green }}>back-illuminated</Text>{" "}
                  35 millimeter full-frame CMOS image sensor. The{" "}
                  <Text style={{ color: COLORS.green }}>α7R II</Text> increases
                  image quality with 42.4MP resolution, up to ISO 102.
                </Text>

                <Info title="MADE WITH aA7R II" data={data} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Clip;
