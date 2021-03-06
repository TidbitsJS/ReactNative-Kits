import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { COLORS } from "../constants/theme";
import { icons } from "../constants";
import Search from "../screens/Search";
import Clip from "../screens/Clip";
import Cart from "../screens/Cart";

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
          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? COLORS.red : COLORS.tertiary,
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
                    tintColor: focused ? COLORS.blue : COLORS.tertiary,
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
                    tintColor: focused ? COLORS.green : COLORS.tertiaryColor,
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
                    tintColor: focused ? COLORS.orange : COLORS.tertiary,
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
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Clips" component={Clip} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default Tabs;
