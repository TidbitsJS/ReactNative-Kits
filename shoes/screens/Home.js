import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { COLORS, FONT, icons, images, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.tertiary }}>
      <FocusedStatusBar backgroundColor={COLORS.tertiary} />
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{ width: 18, height: 18 }}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={{ marginRight: SIZES.medium }}>
              <Image
                source={icons.bag}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={images.user}
                resizeMode="contain"
                style={{ width: 40, height: 40, borderRadius: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
