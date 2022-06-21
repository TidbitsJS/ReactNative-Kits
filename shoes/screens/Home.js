import React, { useState } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { ShoeCard } from "../component";

import { COLORS, FONT, icons, images, products, SIZES } from "../constants";
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

        {/* Shoe cards Start */}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ShoeCard item={item} />}
          horizontal
          contentContainerStyle={{ marginTop: SIZES.small / 2 }}
        />
        {/* Shoe cards End */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
