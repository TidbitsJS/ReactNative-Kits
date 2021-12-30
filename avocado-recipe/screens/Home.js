import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { icons, COLORS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <View style={{ padding: SIZES.font }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: SIZES.base,
          }}
        >
          <TouchableOpacity>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={icons.filter}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: SIZES.base / 2 }}>
          <Text
            style={{
              fontSize: SIZES.padding * 1.25,
              color: COLORS.primary,
              fontWeight: "bold",
              letterSpacing: 0.4,
            }}
          >
            Your everyday
          </Text>
          <Text
            style={{
              fontSize: SIZES.padding * 1.25,
              color: COLORS.primary,
              fontWeight: "bold",
              letterSpacing: 0.4,
            }}
          >
            Avocado recipe
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
