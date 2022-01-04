import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, fruits, icons, images, juices, SIZES } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.medium,
              marginBottom: SIZES.small,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.medium * 1.5,
                fontFamily: "Roboto-Black",
                color: COLORS.white,
              }}
            >
              JuiceUp
            </Text>

            <View>
              <Image
                source={images.enola}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>

          <FlatList
            data={fruits}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  margin: SIZES.small / 2,
                }}
              >
                <View
                  style={{
                    width: 65,
                    height: 65,
                    borderRadius: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: item.borderColor,
                  }}
                >
                  <View
                    style={{
                      width: "90%",
                      height: "90%",
                      borderRadius: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: item.bgColor,
                    }}
                  >
                    <Image
                      source={item.icon}
                      style={{ width: "50%", height: "50%" }}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    marginTop: SIZES.small / 2,
                    fontSize: SIZES.small + 2,
                    fontFamily: "RobotoCondensed-Regular",
                    color: COLORS.white,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginVertical: SIZES.medium,
            }}
          />

          <View style={{ marginVertical: SIZES.medium }}>
            <Text
              style={{
                fontSize: SIZES.large,
                color: COLORS.white,
                textTransform: "capitalize",
                fontFamily: "Roboto-Medium",
              }}
            >
              Most Popular
            </Text>

            <FlatList
              data={juices}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    width: 250,
                    height: 350,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginHorizontal: SIZES.small,
                    padding: SIZES.medium,
                    borderRadius: SIZES.small,
                  }}
                >
                  <ImageBackground
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                    imageStyle={{ borderRadius: SIZES.small }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1, marginRight: SIZES.small }}>
                      <Text
                        style={{
                          fontSize: SIZES.xlarge,
                          fontFamily: "Roboto-Bold",
                          color: COLORS.white,
                        }}
                      >
                        {item.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: SIZES.xlarge,
                            fontFamily: "Roboto-Black",
                            color: COLORS.white,
                            marginRight: 5,
                          }}
                        >
                          $
                        </Text>
                        <Text
                          style={{
                            fontSize: SIZES.xlarge * 1.5,
                            fontFamily: "Roboto-Black",
                            color: COLORS.white,
                          }}
                        >
                          {item.price}
                        </Text>
                      </View>
                    </View>
                    <Image
                      source={icons.cart}
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.white,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginVertical: SIZES.medium,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
