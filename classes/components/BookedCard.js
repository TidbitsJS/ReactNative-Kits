import React from "react";
import {
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  Easing,
} from "react-native";
import { COLORS, FONTFAMILY, images } from "../constants";

const BookedCard = ({ item, index, activeProduct }) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const scale = React.useRef(new Animated.Value(0.9)).current;

  React.useEffect(() => {
    if (activeProduct === index) {
      Animated.timing(scale, {
        toValue: 1,
        easing: Easing.ease,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(scale, {
        toValue: 0.9,
        easing: Easing.ease,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [activeProduct]);

  return (
    <AnimatedTouchable
      style={{
        width: 250,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: COLORS.white,
        margin: 10,
        marginLeft: index === 0 ? 0 : 10,
        transform: [{ scale }],
      }}
    >
      <View
        style={{
          width: "100%",
        }}
      >
        <Image
          source={item.teacherImageUrl}
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
            backgroundColor:
              item.level === "Expert"
                ? "#FD8E26"
                : item.level === "Medium"
                ? "#28803b"
                : "#4E47E0",
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
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
            {item.level}
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 10,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 5,
              paddingLeft: 7,
              paddingRight: 12,
              borderRadius: 20,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Image
              source={images.star}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
              }}
            />
            <Text
              style={{
                fontFamily: FONTFAMILY.medium,
                fontSize: 12,
                color: COLORS.white,
                marginLeft: 5,
                lineHeight: 17,
              }}
            >
              {item.rating}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 5,
              paddingLeft: 7,
              paddingRight: 12,
              borderRadius: 20,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Image
              source={images.people}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
                tintColor: COLORS.white,
              }}
            />
            <Text
              style={{
                fontFamily: FONTFAMILY.medium,
                fontSize: 12,
                color: COLORS.white,
                marginLeft: 5,
                lineHeight: 17,
              }}
            >
              {item.students}
            </Text>
          </View>
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
          {item.teacherName}
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
          {item.name} class
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
              {item.date}
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
            {item.time}
          </Text>
        </View>
      </View>
    </AnimatedTouchable>
  );
};

export default BookedCard;
