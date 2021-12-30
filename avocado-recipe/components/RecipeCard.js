import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons, COLORS, SIZES } from "../constants";

const RecipeCard = ({ item, index, navigation }) => {
  return (
    <TouchableOpacity
      style={{
        width: 225,
        marginRight: index === 0 ? SIZES.padding * 1.5 : 0,
      }}
      onPress={() => navigation.navigate("Recipe", { item })}
    >
      <Image
        source={item.image}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 250,
        }}
      />

      <View style={{ padding: SIZES.base / 2 }}>
        <Text
          style={{
            fontSize: SIZES.font * 1.35,
            fontWeight: "700",
            color: COLORS.primary,
          }}
        >
          {item.name}
        </Text>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: 3,
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.yellow,
                marginRight: SIZES.base / 2,
              }}
            />
            <Text
              style={{
                fontSize: SIZES.font,
                color: COLORS.secondary,
              }}
            >
              {item.rating} ({item.people}+)
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              marginLeft: SIZES.base / 2,
            }}
          >
            <Image
              source={icons.clock}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
                tintColor: COLORS.gray,
                marginRight: SIZES.base / 2,
              }}
            />
            <Text
              style={{
                fontSize: SIZES.font,
                color: COLORS.secondary,
                fontWeight: "700",
                textAlign: "right",
              }}
            >
              Under {item.time} Min
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
