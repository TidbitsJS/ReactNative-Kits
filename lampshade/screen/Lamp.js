import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import { icons } from "../constants";

const features = [
  {
    id: 1,
    title: "22 W",
    icon: icons.lamp,
  },
  {
    id: 2,
    title: "28 cm",
    icon: icons.material01,
  },
  {
    id: 3,
    title: "26 cm",
    icon: icons.material02,
  },
  {
    id: 4,
    title: "1.6 m",
    icon: icons.cable,
  },
];

const Feature = ({ icon, title }) => (
  <TouchableOpacity
    style={{
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      width: 64,
      height: 64,
      borderRadius: 16,
    }}
  >
    <Image
      source={icon}
      resizeMode="contain"
      style={{ width: 16, height: 20, marginTop: 5 }}
    />
    <Text
      style={{
        fontSize: 14,
        fontFamily: "SFUIText-Medium",
        color: "#000",
        marginBottom: 5,
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const Lamp = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <Header />

          <View style={{ width: "100%", padding: 20, marginTop: 10 }}>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                  lineHeight: 36,
                  fontFamily: "SFUIText-Regular",
                }}
              >
                <Text style={{ fontFamily: "SFUIText-Heavy" }}>Melodi</Text>{" "}
                lamp
              </Text>
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FFC501",
                  shadowColor: "#FFC501",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={{ width: "45%", height: "40%" }}
                />
              </View>
            </View>

            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                fontFamily: "SFUIText-Regular",
                color: "#999",
                marginTop: 20,
              }}
            >
              The lampshade provides directionallighting above the dining table
              and pleasant diffused light throughout the room.
            </Text>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 20,
              }}
            >
              {features.map((item) => (
                <View style={{ flex: 1 }} key={item.title}>
                  <Feature {...item} />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lamp;
