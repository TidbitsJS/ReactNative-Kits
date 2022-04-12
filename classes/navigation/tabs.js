import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { images } from "../constants";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
        },
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? "#183591" : "#ABABB6";

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={images.home}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tintColor,
                  }}
                />
              );

            case "Stack":
              return (
                <Image
                  source={images.stack}
                  resizeMode="contain"
                  style={{
                    width: 22,
                    height: 22,
                    tintColor: tintColor,
                  }}
                />
              );

            case "Videos":
              return (
                <Image
                  source={images.videos}
                  resizeMode="contain"
                  style={{
                    width: 22,
                    height: 22,
                    tintColor: tintColor,
                  }}
                />
              );

            case "User":
              return (
                <Image
                  source={images.user}
                  resizeMode="contain"
                  style={{
                    width: 22,
                    height: 22,
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
      <Tab.Screen name="Stack" component={Home} />
      <Tab.Screen name="Videos" component={Home} />
      <Tab.Screen name="User" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
