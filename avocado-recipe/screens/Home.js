import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import RecipeCard from "../components/RecipeCard";
import { icons, COLORS, SIZES, data } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: SIZES.font }}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: SIZES.base,
            }}
          >
            <TouchableOpacity>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.black,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={icons.filter}
                resizeMode="contain"
                style={{
                  width: 15,
                  height: 15,
                  tintColor: COLORS.black,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: SIZES.base / 2 }}>
            <Text
              style={{
                fontSize: SIZES.padding * 1.25,
                color: COLORS.primary,
                fontWeight: "bold",
                letterSpacing: 0.4,
              }}
            >
              Your everyday
            </Text>
            <Text
              style={{
                fontSize: SIZES.padding * 1.25,
                color: COLORS.primary,
                fontWeight: "bold",
                letterSpacing: 0.4,
              }}
            >
              Avocado recipe
            </Text>
          </View>

          <View style={{ marginVertical: SIZES.font }}>
            <FlatList
              data={data.recipes}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <RecipeCard item={item} index={index} navigation={navigation} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{ marginVertical: SIZES.base }}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: SIZES.font,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.padding * 1.25,
                  color: COLORS.primary,
                  fontWeight: "bold",
                  letterSpacing: 0.4,
                }}
              >
                Breakfast
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: SIZES.font, color: COLORS.tertiary }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={data.breakfast}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{
                    width: 120,
                    marginRight:
                      index !== data.breakfast.length - 1 ? SIZES.padding : 0,
                  }}
                >
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height: 120,
                    }}
                  />

                  <Text
                    style={{
                      fontSize: SIZES.font * 1.25,
                      fontWeight: "700",
                      color: COLORS.primary,
                      padding: SIZES.base / 2,
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
