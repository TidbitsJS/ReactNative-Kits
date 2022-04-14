import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONTFAMILY, images, SHADOW } from "../constants";

import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View
        style={{
          padding: 20,
          backgroundColor: COLORS.white,
        }}
      >
        <TouchableOpacity>
          <Image
            source={images.menu}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.darkBlue,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              fontFamily: FONTFAMILY.bold,
              fontSize: 32,
              color: COLORS.darkBlue,
            }}
          >
            Home
          </Text>
          <Image
            source={images.kemal}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              minHeight: 120,
              width: 120,
              padding: 20,
              borderRadius: 5,
              ...SHADOW.lightShadow,
              shadowColor: COLORS.lightBlue,
            }}
          >
            <Image
              source={images.knight}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
            <Text
              style={{
                fontFamily: FONTFAMILY.semiBold,
                fontSize: 18,
                color: COLORS.darkBlue,
              }}
            >
              Chess
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
