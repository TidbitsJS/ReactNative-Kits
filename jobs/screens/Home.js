import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import HomeHeader from "../components/home/HomeHeader";
import HomePopularJobs from "../components/home/HomePopularJobs";
import { COLORS, SIZES } from "../constants";
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
          <HomePopularJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
