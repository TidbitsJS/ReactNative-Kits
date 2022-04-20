import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";

import { COLORS, images, SHADOW } from "../constants";
import { FocusedStatusBar } from "../utils";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blueWhite }}>
      <FocusedStatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView>
        <View>
          <View
            style={{
              backgroundColor: COLORS.white,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 120,
                height: 120,
                borderWidth: 1,
                borderRadius: 60,
                alignItems: "center",
                borderColor: "#EDEDED",
                justifyContent: "center",
              }}
            >
              <Image
                source={images.kemal}
                resizeMode="cover"
                style={{
                  width: "85%",
                  height: "85%",
                  borderRadius: 60,
                }}
              />

              <View
                style={{
                  position: "absolute",
                  backgroundColor: COLORS.white,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 20,
                  height: 20,
                  borderRadius: 15,
                  right: 0,
                  bottom: 10,
                  ...SHADOW.dimShadow,
                }}
              >
                <Image
                  source={images.downArrow}
                  style={{
                    width: "50%",
                    height: "50%",
                    borderRadius: 15,
                    tintColor: "#C0BEC6",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
