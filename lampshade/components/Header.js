import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { icons, images } from "../constants";

const Dots = ({ color, title, isActive, setActive }) => {
  const activeStyles =
    isActive === title
      ? {
          width: 16,
          height: 16,
          borderRadius: 8,
          backgroundColor: color,
          borderColor: "#fff",
        }
      : {
          width: 12,
          height: 12,
          backgroundColor: color,
          borderRadius: 6,
          borderColor: color,
        };

  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 15,
      }}
      onPress={() => setActive(title)}
    >
      <View style={{ ...activeStyles, borderWidth: 2 }} />
      <Text
        style={{
          fontSize: 10,
          fontFamily:
            isActive === title ? "SFUIText-Medium" : "SFUIText-Regular",
          lineHeight: 18,
          color: "#fff",
          marginTop: 5,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const Header = ({ active, setActive }) => {
  return (
    <View
      style={{
        minHeight: 420,
        backgroundColor: active === "Orange" ? "#FF7616" : "#FFC501",
        borderBottomLeftRadius: 50,
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          width: "100%",
          top: 30,
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <TouchableOpacity style={{ marginLeft: 20, marginTop: 20 }}>
          <Image
            source={icons.arrow}
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>

        <View
          style={{
            height: 100,
            width: 80,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderBottomLeftRadius: 40,
          }}
        >
          <TouchableOpacity>
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{ width: 28, height: 24 }}
            />
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: active === "Orange" ? "#FF7616" : "#FFC501",
                borderRadius: 4,
                position: "absolute",
                right: -4,
                top: -2,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ImageBackground
        source={active === "Orange" ? images.lamp2 : images.lamp1}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 350,
          position: "absolute",
          top: 0,
        }}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <Dots
          color="#fff"
          title="White"
          isActive={active}
          setActive={setActive}
        />
        <Dots
          color="#ffc501"
          title="Yellow"
          isActive={active}
          setActive={setActive}
        />
        <Dots
          color="#FF7616"
          title="Orange"
          isActive={active}
          setActive={setActive}
        />
      </View>
    </View>
  );
};

export default Header;
