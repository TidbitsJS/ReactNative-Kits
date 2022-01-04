import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import { COLORS, icons } from "../constants";
import Home from "../screens/Home";
import Shop from "../screens/Shop";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          height: 70,
        },
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.secondary : COLORS.white;

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: tintColor,
                  }}
                />
              );

            case "Shop":
              return (
                <Image
                  source={icons.cart}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tintColor,
                  }}
                />
              );

            case "Search":
              return (
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: COLORS.secondary,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{
                      width: "50%",
                      height: "50%",
                      tintColor: COLORS.white,
                    }}
                  />
                </View>
              );

            case "Signal":
              return (
                <Image
                  source={icons.signal}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tintColor,
                  }}
                />
              );

            case "Profile":
              return (
                <Image
                  source={icons.user}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: tintColor,
                  }}
                />
              );

            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Signal" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
