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
  const [active, setActive] = React.useState("Yellow");

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <Header active={active} setActive={setActive} />

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
              <TouchableOpacity
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: active === "Orange" ? "#FF7616" : "#FFC501",
                  shadowColor: active === "Orange" ? "#FF7616" : "#FFC501",
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
                  style={{
                    width: "45%",
                    height: "40%",
                  }}
                />
              </TouchableOpacity>
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
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={item.title}
                >
                  <Feature {...item} />
                </View>
              ))}
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 28,
                  lineHeight: 36,
                  fontFamily: "SFUIText-Heavy",
                }}
              >
                $12.89
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: active === "Orange" ? "#FF7616" : "#FFC501",
                minHeight: 76,
                borderTopLeftRadius: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 28,
                  fontFamily: "SFUIText-Medium",
                }}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lamp;
