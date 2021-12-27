import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { COLORS } from "../constants/theme";
import { icons } from "../constants";

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
        },
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.red : COLORS.tertiary;

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: tintColor,
                  }}
                />
              );

            case "Search":
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: tintColor,
                  }}
                />
              );

            case "Clips":
              return (
                <Image
                  source={icons.clip}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: tintColor,
                  }}
                />
              );

            case "Cart":
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

            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Clips" component={Home} />
      <Tab.Screen name="Cart" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
