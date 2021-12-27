import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { COLORS } from "../constants/theme";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text>Hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
