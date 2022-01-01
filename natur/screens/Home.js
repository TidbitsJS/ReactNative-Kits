import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <FocusedStatusBar
        backgroundColor={COLORS.lightWhite}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
