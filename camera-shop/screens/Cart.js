import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import Header from "../components/Header";
import Price from "../components/Price";
import { images, COLORS, FONTS, SIZES, icons } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const data = [
  {
    id: 1,
    title: "Macro",
    photo: icons.macro,
  },
  {
    id: 2,
    title: "Zoom",
    photo: icons.zoom,
  },
  {
    id: 3,
    title: "Prime",
    photo: icons.prime,
  },
  {
    id: 4,
    title: "Tele",
    photo: icons.tele,
  },
];

const Cart = () => {
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
                EQUIPMENT
              </Text>
              <ImageBackground
                source={images.orangeoval}
                resizeMode="contain"
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
                marginBottom: SIZES.font,
              }}
            >
              <Image
                source={images.equipment}
                resizeMode="contain"
                style={{
                  width: "100%",
                  maxWidth: 400,
                  height: 255,
                }}
              />
            </View>

            <Price amount="59,99" title="Starting At" />

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: SIZES.font2,
              }}
            >
              <ImageBackground
                source={images.lens}
                resizeMode="stretch"
                style={{
                  width: "100%",
                  maxWidth: 210,
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
                  Offering a blend of{" "}
                  <Text style={{ color: COLORS.orange }}>image quality</Text>,
                  <Text style={{ color: COLORS.orange }}>compact size</Text> and
                  wide{" "}
                  <Text style={{ color: COLORS.orange }}>
                    maximum apertures
                  </Text>
                  . Have the flexibility of changing your frame at the twist of
                  the zoom ring. Unrivalled optical performance in{" "}
                  <Text style={{ color: COLORS.orange }}>challenging</Text>
                  light conditions and environments.
                </Text>

                <View style={{ flex: 1, marginTop: SIZES.small }}>
                  <FlatList
                    data={data}
                    renderItem={({ item }) => (
                      <View style={{ flex: 1, margin: 10 }}>
                        <Image
                          source={item.photo}
                          style={{ width: 40, height: 30 }}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            ...FONTS.bodyText,
                            textTransform: "uppercase",
                            color: COLORS.white,
                            fontFamily: "OpenSans-Bold",
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
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

export default Cart;
