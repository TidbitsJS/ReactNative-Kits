import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Animated,
  Easing,
} from "react-native";
import { chairs, COLORS, FONTS, icons, SIZES } from "../../constants";
import { SHADOW } from "../../constants/theme";

const ProductCard = ({ index, chair, activeProduct }) => {
  const heightInc = React.useRef(new Animated.Value(276)).current;

  React.useEffect(() => {
    if (activeProduct === index) {
      Animated.timing(heightInc, {
        toValue: 306,
        easing: Easing.linear,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(heightInc, {
        toValue: 276,
        easing: Easing.linear,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [activeProduct]);

  return (
    <View
      style={{
        minWidth: 217,
        minHeight: 370,
        marginRight: index === chairs.length - 1 ? 0 : SIZES.large,
        justifyContent: "center",
        marginTop: -SIZES.small,
        marginBottom: SIZES.base,
      }}
    >
      <Animated.View style={{ height: heightInc }}>
        <ImageBackground
          source={chair.img}
          resizeMode="cover"
          style={{
            width: 210,
            height: "100%",
          }}
          imageStyle={{ borderRadius: SIZES.small }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingHorizontal: SIZES.base,
              paddingVertical: SIZES.small,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  ...FONTS.subHeading,
                  color: COLORS.secondary,
                }}
              >
                {chair.price}
              </Text>
              <Text
                style={{
                  ...FONTS.body,
                  color: COLORS.secondary,
                }}
              >
                {chair.name}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                borderRadius: SIZES.small + 2,
                backgroundColor: COLORS.tertiary,
                justifyContent: "center",
                alignItems: "center",
                top: SIZES.xlarge * 1.25,
                ...SHADOW.darkShadow,
              }}
            >
              <Image
                source={icons.cart}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: COLORS.white }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
};

const ActiveSection = ({ title, activeSection, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          ...FONTS.regular,
          fontFamily:
            activeSection === title ? "Poppins-Bold" : "Poppins-Light",
          color: COLORS.secondary,
          textTransform: "capitalize",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          width: 4,
          height: 4,
          borderRadius: 2,
          backgroundColor:
            activeSection === title ? COLORS.secondary : COLORS.brownBG,
        }}
      />
    </TouchableOpacity>
  );
};

class HomeProducts extends React.Component {
  state = {
    activeSection: "new",
    activeProduct: 0,
  };

  handleViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      this.setState({ activeProduct: viewableItems[0].index });
    }
  };

  render() {
    const { activeSection, activeProduct } = this.state;
    return (
      <View style={{ width: "100%" }}>
        <View
          style={{
            padding: SIZES.base,
            paddingBottom: 2,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {["new", "popular", "sale"].map((section) => (
            <ActiveSection
              key={section}
              activeSection={activeSection}
              title={section}
              handlePress={() => this.setState({ activeSection: section })}
            />
          ))}
        </View>

        <View style={{ marginHorizontal: SIZES.large }}>
          <FlatList
            data={chairs}
            renderItem={({ item, index }) => (
              <ProductCard
                index={index}
                chair={item}
                activeProduct={activeProduct}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={this.handleViewableItemsChanged}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 70,
            }}
          />
        </View>
      </View>
    );
  }
}

export default HomeProducts;
