import React, { useState } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { COLORS, FONT, icons, images, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const filters = ["Sneakers", "Running", "Training", "Basketball"];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.tertiary }}>
      <FocusedStatusBar backgroundColor={COLORS.tertiary} />

      <View style={{ flex: 1, padding: SIZES.medium }}>
        {/* Home Header Start */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{ width: 18, height: 18 }}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={{ marginRight: SIZES.medium }}>
              <Image
                source={icons.bag}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={images.user}
                resizeMode="contain"
                style={{ width: 40, height: 40, borderRadius: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Home Header End */}

        {/* Home Filter Start */}
        <View style={{ marginVertical: SIZES.xxlarge }}>
          <FlatList
            data={filters}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  paddingVertical: SIZES.base,
                  paddingHorizontal: SIZES.large,
                  borderRadius: SIZES.small / 2,
                  backgroundColor:
                    activeFilter === item ? COLORS.primary : COLORS.tertiary,
                  marginRight: index !== filters.length - 1 ? SIZES.medium : 0,
                }}
                onPress={() => setActiveFilter(item)}
              >
                <Text
                  style={{
                    fontFamily: FONT.bebasNeue,
                    textTransform: "uppercase",
                    fontSize: SIZES.medium,
                    color:
                      activeFilter === item ? COLORS.secondary : COLORS.white,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            horizontal
          />
        </View>
        {/* Home Filter End */}

        {/* Shoe card Start */}

        <TouchableOpacity
          style={{
            marginRight: SIZES.medium,
          }}
        >
          <View
            style={{
              maxWidth: 237,
              padding: SIZES.large,
              borderRadius: 36,
              backgroundColor: COLORS.white,
            }}
          >
            <Text
              style={{
                fontFamily: FONT.bebasNeue,
                fontSize: 30,
                color: COLORS.secondary,
                maxWidth: 100,
              }}
              numberOfLines={1}
            >
              Michael
            </Text>
            <Text
              style={{
                fontFamily: FONT.bebasNeue,
                fontSize: 43,
                color: COLORS.secondary,
                maxWidth: 100,
              }}
              numberOfLines={1}
            >
              Jordan
            </Text>

            <Text
              style={{
                fontFamily: FONT.bebasNeue,
                fontSize: 30,
                color: COLORS.primary,
                marginTop: SIZES.medium,
                maxWidth: 100,
              }}
              numberOfLines={1}
            >
              $ 140 USD
            </Text>

            <View style={{ justifyContent: "flex-end", marginTop: -50 }}>
              <Image
                source={images.sneakers01}
                resizeMode="contain"
                style={{
                  width: 268,
                  height: 172,
                  transform: [{ rotate: "-19deg" }],
                  zIndex: 1,
                }}
              />
            </View>

            <View
              style={{
                marginTop: SIZES.small,
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: SIZES.small,
                  backgroundColor: COLORS.primary,
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: COLORS.primary,
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.51,
                  shadowRadius: 13.16,

                  elevation: 20,
                }}
              >
                <Image
                  source={icons.cart}
                  resizeMode="contain"
                  style={{ width: "50%", height: "50%" }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
