import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import ProductHeader from "../components/ProductHeader";
import { COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Product = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, backgroundColor: product.bgColor }}>
        <ProductHeader navigation={navigation} />
        <View>
          <Image
            source={product.imgUrl}
            resizeMode="cover"
            style={{ width: "100%", height: 400 }}
          />
        </View>

        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Product;
