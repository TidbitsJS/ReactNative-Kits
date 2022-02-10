import React from "react";
import { TouchableOpacity, FlatList, Text } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants";

function SearchBtn({
  index,
  name,
  length,
  activeSearchType,
  onHandleSearchType,
}) {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        backgroundColor: name === activeSearchType ? COLORS.primary : "#F3F4F8",
        borderRadius: SIZES.medium,
        marginRight: index === length - 1 ? 0 : SIZES.small / 2,
        marginLeft: 2,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
      }}
      onPress={onHandleSearchType}
    >
      <Text
        style={{
          fontFamily: "DMMedium",
          fontSize: SIZES.small,
          color: name === activeSearchType ? "#C3BFCC" : "#AAA9B8",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const Filters = ({ filterTypes }) => {
  const [activeSearchType, setActiveSearchType] = React.useState(
    filterTypes[0]
  );

  return (
    <FlatList
      data={filterTypes}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <SearchBtn
          index={index}
          name={item}
          length={filterTypes.length}
          activeSearchType={activeSearchType}
          onHandleSearchType={() => setActiveSearchType(item)}
        />
      )}
      keyExtractor={(item) => item}
    />
  );
};

export default Filters;
