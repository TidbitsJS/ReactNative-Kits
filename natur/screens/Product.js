import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import ProductDetail from "../components/product/ProductDetail";
import ProductHeader from "../components/product/ProductHeader";
import { COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Product = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.brownBG }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <ProductHeader img={product.img} navigation={navigation} />
          <ProductDetail chair={product} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;
