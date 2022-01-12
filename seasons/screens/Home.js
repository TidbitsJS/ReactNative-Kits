import React from "react";
import { View, SafeAreaView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { COLORS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
};

export default Home;
