import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import FocusedStatusBar from "../utils/FocusedStatusBar";

function Home() {
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
}

export default Home;
