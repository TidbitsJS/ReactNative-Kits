import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { chairs, COLORS, FONTS, icons, SIZES } from "../../constants";
import { SHADOW } from "../../constants/theme";

const ProductCard = ({ index, chair }) => {
  return (
    <View
      style={{
        minWidth: 217,
        minHeight: 350,
        marginRight: index === chairs.length - 1 ? 0 : SIZES.large,
      }}
    >
      <TouchableOpacity activeOpacity={0.75} style={{ minHeight: 320 }}>
        <Image
          source={chair.img}
          resizeMode="cover"
          style={{
            width: 217,
            height: 306,
            position: "absolute",
            borderRadius: SIZES.small,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: SIZES.base,
            paddingVertical: SIZES.small,
            position: "absolute",
            bottom: 0,
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
              top: SIZES.medium,
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
      </TouchableOpacity>
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

const HomeProducts = () => {
  const [activeSection, setActiveSection] = React.useState("new");

  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          padding: SIZES.base,
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
            handlePress={() => setActiveSection(section)}
          />
        ))}
      </View>

      <View
        style={{ marginHorizontal: SIZES.large, marginTop: SIZES.small / 2 }}
      >
        <FlatList
          data={chairs}
          renderItem={({ item, index }) => (
            <ProductCard index={index} chair={item} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeProducts;
