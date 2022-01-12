import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Product = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <Text>Product Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Product;
