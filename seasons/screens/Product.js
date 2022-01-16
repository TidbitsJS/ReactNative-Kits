import React from "react";
import { View, SafeAreaView, Image, Dimensions, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProductDetails from "../components/ProductDetails";
import ProductHeader from "../components/ProductHeader";
import { COLORS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const windowHeight = Dimensions.get("window").height;

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
          <ProductHeader navigation={navigation} name={product.name} />
          <View>
            <Image
              source={product.imgUrl}
              resizeMode="cover"
              style={{ width: "100%", height: windowHeight / 2 }}
            />
          </View>

          <ProductDetails product={product} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;
