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
                Canon
              </Text>
              <ImageBackground
                source={images.oval}
                resizeMode="stretch"
                style={{
                  position: "absolute",
                  width: "100%",
                  maxWidth: 400,
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
                  width: "100%",
                  maxWidth: 400,
                  height: 290,
                }}
              />
            </View>

            <Price amount={3.599} />

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
                  The <Text style={{ color: COLORS.red }}>EOS 5D Mark IV</Text>{" "}
                  camera builds on the powerful legacy of the{" "}
                  <Text style={{ color: COLORS.red }}>5D</Text> series with
                  imaging excellence ideal for wedding and portrait
                  photographers, nature and landscape shooters, as well as
                  creative videographers.
                </Text>

                <Info title="MADE WITH Mk IV" data={data} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
