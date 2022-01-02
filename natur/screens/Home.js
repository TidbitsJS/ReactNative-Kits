import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HomeHeader from "../components/home/HomeHeader";
import HomeProducts from "../components/home/HomeProducts";
import { COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.brownBG }}>
      <FocusedStatusBar
        backgroundColor={COLORS.brownBG}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <HomeHeader />
          <HomeProducts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
