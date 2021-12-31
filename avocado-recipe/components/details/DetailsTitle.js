import React from "react";
import { View, Text, Image } from "react-native";
import { icons, COLORS, SIZES } from "../../constants";

const DetailsTitle = ({ name, time, rating, people }) => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.15)",
          padding: SIZES.padding,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: SIZES.base / 2,
            }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <Image
                key={item}
                source={icons.star}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.yellow,
                }}
              />
            ))}

            <Text
              style={{
                fontSize: SIZES.font * 1.05,
                color: COLORS.white,
                marginLeft: SIZES.base,
              }}
            >
              {rating} ({people}+)
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: SIZES.padding * 1.5,
            fontWeight: "700",
            color: COLORS.white,
          }}
        >
          {name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical: SIZES.base,
          }}
        >
          <Image
            source={icons.clock}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white,
              marginRight: SIZES.base / 2,
            }}
          />
          <Text style={{ fontSize: SIZES.font * 1.25, color: COLORS.white }}>
            <Text style={{ fontWeight: "700" }}>{time}</Text> mins
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsTitle;
