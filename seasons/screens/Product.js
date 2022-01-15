import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProductDetails from "../components/ProductDetails";
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, backgroundColor: product.bgColor }}>
          <ProductHeader navigation={navigation} />
          <View>
            <Image
              source={product.imgUrl}
              resizeMode="cover"
              style={{ width: "100%", height: 400 }}
            />
          </View>

          <ProductDetails product={product} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;
