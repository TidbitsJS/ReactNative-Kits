import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, FONTS } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.lightWhite }}>
      <FocusedStatusBar backgroundColor={COLORS.lightWhite} />
      <View>
        <Text style={{ ...FONTS.p }}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
