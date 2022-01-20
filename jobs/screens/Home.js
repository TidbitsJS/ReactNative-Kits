import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { COLORS, SIZES, images } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <FocusedStatusBar
        backgroundColor={COLORS.lightWhite}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <HomeHeader />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
