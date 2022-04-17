import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import BookedCard from "../components/BookedCard";
import { COLORS, FONTFAMILY, hobbies, images, SHADOW } from "../constants";
import { bookedClasses } from "../constants/data";

import { FocusedStatusBar } from "../utils";

const HobbyCard = ({ name, iconUrl }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={{
      width: 120,
      margin: 10,
      borderRadius: 18,
      marginBottom: 20,
      backgroundColor: COLORS.white,
      ...SHADOW.darkShadow,
      shadowColor: COLORS.lightBlue,
    }}
  >
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        minHeight: 120,
        width: "100%",
        padding: 15,
        borderRadius: 18,
        backgroundColor: COLORS.white,
      }}
    >
      <Image
        source={iconUrl}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
        }}
      />
      <Text
        style={{
          fontFamily: FONTFAMILY.semiBold,
          fontSize: 18,
          color: COLORS.darkBlue,
          lineHeight: 20,
        }}
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  </TouchableOpacity>
);

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blueWhite }}>
      <FocusedStatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView>
        <View
          style={{
            backgroundColor: COLORS.blueWhite,
          }}
        >
          <View
            style={{
              padding: 20,
              backgroundColor: COLORS.white,
            }}
          >
            <TouchableOpacity>
              <Image
                source={images.menu}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.darkBlue,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTFAMILY.bold,
                  fontSize: 32,
                  color: COLORS.darkBlue,
                }}
              >
                Home
              </Text>
              <Image
                source={images.kemal}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
            </View>

            <FlatList
              data={hobbies}
              renderItem={({ item }) => <HobbyCard {...item} />}
              keyExtractor={(item) => item.id}
              horizontal
              contentContainerStyle={{ marginTop: 10 }}
            />
          </View>

          <View
            style={{
              backgroundColor: COLORS.blueWhite,
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTFAMILY.bold,
                  fontSize: 23,
                  color: COLORS.darkBlue,
                  flex: 1,
                }}
              >
                Booked Classes
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: FONTFAMILY.medium,
                    fontSize: 15,
                    color: COLORS.mediumBlue,
                  }}
                >
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={bookedClasses}
              renderItem={({ item, index }) => (
                <BookedCard item={item} index={index} />
              )}
              keyExtractor={(item) => item.id}
              horizontal
              contentContainerStyle={{ marginTop: 10 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
