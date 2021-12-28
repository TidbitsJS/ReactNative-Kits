import React from "react";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";
import Header from "../components/Header";
import { icons, images } from "../constants";

const Lamp = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <Header />
    </SafeAreaView>
  );
};

export default Lamp;
