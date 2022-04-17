import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTFAMILY, images } from "../constants";

const BookedCard = ({ item }) => {
  return (
    <View
      style={{
        width: 250,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          width: "100%",
        }}
      >
        <Image
          source={images.teacher01}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 210,
            borderRadius: 20,
          }}
        />

        <View
          style={{
            position: "absolute",
            top: 20,
            left: 0,
            backgroundColor: "#4E47E0",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTFAMILY.medium,
              fontSize: 12,
              color: COLORS.white,
              lineHeight: 15,
            }}
          >
            Beginner
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "flex-start",
          paddingTop: 20,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontFamily: FONTFAMILY.bold,
            color: COLORS.darkBlue,
            lineHeight: 22,
            fontSize: 20,
          }}
        >
          Robert Downey
        </Text>
        <Text
          style={{
            fontFamily: FONTFAMILY.semiBold,
            color: COLORS.gray,
            lineHeight: 17,
            fontSize: 15,
            marginTop: 5,
          }}
        >
          Chess class
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={images.clock}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
                tintColor: "#E3BB93",
              }}
            />
            <Text
              style={{
                fontFamily: FONTFAMILY.semiBold,
                color: COLORS.gray,
                fontSize: 12,
                marginLeft: 5,
                lineHeight: 15,
              }}
            >
              21 April 22
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              width: 4,
              height: 4,
              backgroundColor: COLORS.gray,
              borderRadius: 8,
            }}
          />
          <Text
            style={{
              fontFamily: FONTFAMILY.semiBold,
              color: COLORS.gray,
              fontSize: 12,
              lineHeight: 15,
            }}
          >
            10:00 AM
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BookedCard;
