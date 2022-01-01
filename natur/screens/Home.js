import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HomeHeader from "../components/home/HomeHeader";
import { COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.brownBG }}>
      <FocusedStatusBar
        backgroundColor={COLORS.brownBG}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
};

export default Home;
