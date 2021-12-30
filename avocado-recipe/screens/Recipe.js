import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, icons, images, SHADOW, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Recipe = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={{ flex: 1 }}>
        <ImageBackground
          source={images.avocado}
          resizeMode="cover"
          style={{
            flex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />

        <View
          style={{
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            margin: SIZES.padding,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",

              marginVertical: SIZES.padding,
            }}
          >
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.black,
                ...SHADOW.darkShadow,
              }}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={icons.arrow}
                resizeMode="contain"
                style={{ width: "60%", height: "60%", tintColor: COLORS.white }}
              />
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: COLORS.black,
                  ...SHADOW.darkShadow,
                }}
              >
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  style={{
                    width: "50%",
                    height: "50%",
                    tintColor: COLORS.white,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: COLORS.black,
                  ...SHADOW.darkShadow,
                  marginLeft: SIZES.base,
                }}
              >
                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={{
                    width: "45%",
                    height: "45%",
                    tintColor: COLORS.white,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              marginBottom: SIZES.padding * 2,
            }}
          >
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: SIZES.base / 2,
                }}
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <Image
                    key={item}
                    source={icons.star}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, tintColor: COLORS.yellow }}
                  />
                ))}

                <Text
                  style={{
                    fontSize: SIZES.font * 1.05,
                    color: COLORS.white,
                    marginLeft: SIZES.base,
                  }}
                >
                  4.8 (120+)
                </Text>
              </View>
            </View>

            <Text
              style={{
                fontSize: SIZES.padding * 1.5,
                fontWeight: "700",
                color: COLORS.white,
              }}
            >
              {item.name}
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginVertical: SIZES.base,
              }}
            >
              <Image
                source={icons.clock}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.white,
                  marginRight: SIZES.base / 2,
                }}
              />
              <Text
                style={{ fontSize: SIZES.font * 1.25, color: COLORS.white }}
              >
                <Text style={{ fontWeight: "700" }}>10</Text> mins
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Recipe;
