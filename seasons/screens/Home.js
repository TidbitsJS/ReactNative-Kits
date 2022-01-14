import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import HomeProductCard from "../components/HomeProductCard";
import { COLORS, products, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const filters = ["Dress", "Pants", "Blazers", "Jackets"];

const Home = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = React.useState(filters[0]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4F5F6" }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <HomeProductCard product={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{
            paddingBottom: SIZES.base,
          }}
          ListHeaderComponent={() => (
            <React.Fragment>
              <HomeHeader />

              <View style={{ padding: SIZES.base }}>
                <FlatList
                  data={filters}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={{
                        minWidth: 80,
                        height: 36,
                        marginRight: SIZES.base,
                        backgroundColor:
                          activeFilter === item ? COLORS.primary : null,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: SIZES.small / 2,
                      }}
                      onPress={() => setActiveFilter(item)}
                    >
                      <Text
                        style={{
                          fontFamily: "AvenirRoman",
                          fontSize: 14,
                          color:
                            activeFilter === item
                              ? COLORS.white
                              : COLORS.primary,
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </React.Fragment>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
