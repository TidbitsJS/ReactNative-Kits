import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, FONTS, icons, people, services, SIZES } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.circle}
                resizeMode="contain"
                style={{
                  width: 47,
                  height: 31,
                }}
              />
              <Image
                source={icons.eWalle}
                resizeMode="contain"
                style={{
                  width: 90,
                  height: 32,
                  marginLeft: SIZES.small,
                }}
              />
            </View>

            <TouchableOpacity>
              <Image
                source={icons.union}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: SIZES.xxlarge }}>
            <Text
              style={{
                ...FONTS.h1,
                fontFamily: "AvenirNextDemi",
                color: COLORS.primary,
              }}
            >
              Account Overview
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: COLORS.lightWhite,
                padding: SIZES.large,
                minHeight: 116,
                marginVertical: SIZES.medium,
                borderRadius: SIZES.small,
              }}
            >
              <View style={{ justifyContent: "flex-start" }}>
                <Text
                  style={{
                    ...FONTS.h1,
                    fontFamily: "AvenirNextMedium",
                    color: COLORS.black,
                  }}
                >
                  20,600
                </Text>
                <Text
                  style={{
                    ...FONTS.p,
                    fontSize: SIZES.medium,
                    color: COLORS.primary,
                    marginTop: SIZES.small,
                  }}
                >
                  Current balance
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: COLORS.tertiary,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.plus}
                  resizeMode="contain"
                  style={{
                    width: 12,
                    height: 12,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginVertical: SIZES.medium }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: SIZES.small,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontFamily: "AvenirNextDemi",
                  color: COLORS.primary,
                }}
              >
                Send Money
              </Text>
              <TouchableOpacity>
                <Image
                  source={icons.scan}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginVertical: SIZES.medium,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: COLORS.tertiary,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: SIZES.medium,
                }}
              >
                <Image
                  source={icons.plus}
                  resizeMode="contain"
                  style={{
                    width: 12,
                    height: 12,
                  }}
                />
              </TouchableOpacity>
              <FlatList
                data={people}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      minWidth: 100,
                      minHeight: 120,
                      padding: SIZES.medium,
                      borderRadius: SIZES.small,
                      backgroundColor: COLORS.lightWhite,
                      marginRight: SIZES.small,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 23,
                        backgroundColor: COLORS.white,
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: COLORS.lightGray,
                      }}
                    >
                      <Image
                        source={item.img}
                        resizeMode="contain"
                        style={{
                          width: "90%",
                          height: "90%",
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        ...FONTS.p,
                        color: COLORS.primary,
                        marginTop: SIZES.small,
                        textAlign: "center",
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: SIZES.small,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontFamily: "AvenirNextDemi",
                  color: COLORS.primary,
                }}
              >
                Services
              </Text>
              <TouchableOpacity>
                <Image
                  source={icons.filter}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: "100%",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {services.map((item, index) => (
                <View
                  style={{
                    flex: 1,
                    minWidth: "20%",
                    maxWidth: "30%",
                    marginHorizontal: SIZES.small / 2,
                    marginVertical: SIZES.small,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={item.title + index}
                >
                  <TouchableOpacity
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: SIZES.small,
                      backgroundColor: COLORS.lightWhite,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={item.img}
                      resizeMode="contain"
                      style={{
                        width: "30%",
                        height: "30%",
                        tintColor: COLORS.primary,
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      ...FONTS.p,
                      color: COLORS.primary,
                      marginTop: SIZES.small / 2,
                      paddingHorizontal: SIZES.small,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
