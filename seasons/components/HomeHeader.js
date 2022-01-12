import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, icons, SIZES } from "../constants";

const HomeHeader = () => {
  return (
    <React.Fragment>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: SIZES.small,
        }}
      >
        <TouchableOpacity>
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{ width: 16, height: 16 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={icons.bell}
              resizeMode="contain"
              style={{
                width: 15,
                height: 18,
                marginHorizontal: SIZES.large,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ width: 20, height: 20 }}>
            <Image
              source={icons.bag}
              resizeMode="contain"
              style={{ width: 16, height: 18 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: SIZES.medium,
          height: 47,
        }}
      >
        <View
          style={{
            flex: 1,
            height: "100%",
            borderWidth: 1,
            borderColor: COLORS.gray,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              height: "100%",
              paddingHorizontal: SIZES.base,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontFamily: "AvenirMedium",
                fontSize: SIZES.medium,
                color: COLORS.primary,
              }}
            >
              Casual Dress
            </Text>
          </View>
          <TouchableOpacity
            style={{
              paddingHorizontal: SIZES.base,
            }}
          >
            <Image
              source={icons.down}
              resizeMode="contain"
              style={{
                width: 16,
                height: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: 47,
            height: "100%",
            borderWidth: 1,
            borderColor: COLORS.gray,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: SIZES.medium,
          }}
        >
          <Image
            source={icons.filter}
            resizeMode="contain"
            style={{
              width: 20,
              height: 18,
            }}
          />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default HomeHeader;
