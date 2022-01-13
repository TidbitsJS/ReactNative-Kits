import React from "react";
import { View, SafeAreaView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4F5F6" }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
};

export default Home;
