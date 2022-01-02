import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { categories, COLORS, FONTS, SIZES } from "../../constants";
import { SHADOW } from "../../constants/theme";

const FurnitureCategory = ({
  index,
  category,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <View
      style={{
        marginRight: index === categories.length - 1 ? 0 : SIZES.base,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={[
          {
            width: 70,
            height: 70,
            borderRadius: SIZES.small + 2,
            borderWidth: 1,
            borderColor:
              activeCategory === category.name
                ? COLORS.primary
                : COLORS.lightWhite,
            backgroundColor:
              activeCategory === category.name
                ? COLORS.primary
                : COLORS.lightWhite,
            justifyContent: "center",
            alignItems: "center",
          },
          activeCategory === category.name && SHADOW.mediumShadow,
        ]}
        onPress={setActiveCategory}
      >
        <Image
          source={category.icon}
          resizeMode="contain"
          style={{
            width: "50%",
            height: "50%",
            tintColor:
              activeCategory === category.name ? COLORS.white : COLORS.primary,
          }}
        />
      </TouchableOpacity>

      <Text
        style={{
          ...FONTS.regular,
          color: COLORS.secondary,
          marginTop: SIZES.small,
        }}
      >
        {category.name}
      </Text>
    </View>
  );
};

const HomeCategories = () => {
  const [activeCategory, setActiveCategory] = React.useState("Chairs");

  return (
    <View style={{ width: "100%" }}>
      <Text
        style={{
          ...FONTS.subHeading,
          color: COLORS.secondary,
          marginHorizontal: SIZES.xlarge,
          marginVertical: SIZES.small / 2,
        }}
      >
        Categories
      </Text>
      <View
        style={{ marginHorizontal: SIZES.xlarge, marginVertical: SIZES.small }}
      >
        <FlatList
          data={categories}
          renderItem={({ item, index }) => (
            <FurnitureCategory
              index={index}
              category={item}
              activeCategory={activeCategory}
              setActiveCategory={() => setActiveCategory(item.name)}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeCategories;
