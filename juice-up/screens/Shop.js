import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";

const Shop = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />

      <View style={{ flex: 1 }}>
        <Text style={{ color: COLORS.white }}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Shop;
