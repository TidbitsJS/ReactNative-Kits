import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { FONTFAMILY } from "../constants";

import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View
        style={{
          padding: 20,
        }}
      >
        <Text style={{ fontFamily: FONTFAMILY.bold, fontSize: 21 }}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
