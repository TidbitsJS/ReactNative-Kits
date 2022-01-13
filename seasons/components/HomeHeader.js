import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, icons, SIZES } from "../constants";

const dressTypes = [
  "Casual Dress",
  "Evening Dress",
  "Summer Dress",
  "Party Dress",
  "Winter Dress",
  "Work Wear",
  "Swim Wear",
  "Athletic Wear",
  "Formal Wear",
  "Kurta",
];

const HomeHeader = () => {
  const [dressType, setDressType] = React.useState(dressTypes[0]);
  const [showDressOptions, setShowDressOptions] = React.useState(false);

  return (
    <React.Fragment>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: SIZES.small,
          backgroundColor: COLORS.white,
          padding: SIZES.base,
          shadowColor: COLORS.secondary,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,
          elevation: 3,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flex: 0.5,
          }}
        >
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "HisyamFacelift",
              fontSize: SIZES.xlarge,
            }}
          >
            Seasons
          </Text>
        </View>

        <View
          style={{
            flex: 0.6,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{ width: 16, height: 16 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={icons.bell}
              resizeMode="contain"
              style={{
                width: 15,
                height: 18,
                marginHorizontal: SIZES.medium,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ width: 20, height: 20 }}>
            <Image
              source={icons.bag}
              resizeMode="contain"
              style={{ width: 16, height: 18 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: 47,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: SIZES.medium,
          paddingHorizontal: SIZES.base,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            height: "100%",
            borderWidth: 1,
            borderColor: COLORS.white,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.small / 2,
            backgroundColor: COLORS.white,
            shadowColor: COLORS.secondary,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={() => setShowDressOptions(!showDressOptions)}
          activeOpacity={0.8}
        >
          {showDressOptions && (
            <View
              style={{
                position: "absolute",
                left: 0,
                top: 50,
                width: "100%",
                backgroundColor: COLORS.white,
                padding: SIZES.base,
                borderRadius: SIZES.small / 2,
                shadowColor: COLORS.secondary,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              {dressTypes.map((type, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    marginVertical: SIZES.small,
                  }}
                  onPress={() => setDressType(type)}
                >
                  <Text
                    style={{
                      fontFamily: "AvenirMedium",
                      fontSize: SIZES.medium,
                      color: COLORS.secondary,
                    }}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View
            style={{
              flex: 1,
              height: "100%",
              paddingHorizontal: SIZES.base,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontFamily: "AvenirMedium",
                fontSize: SIZES.medium,
                color: COLORS.primary,
              }}
            >
              {dressType}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              paddingHorizontal: SIZES.base,
              transform: [
                showDressOptions ? { rotate: "180deg" } : { rotate: "0deg" },
              ],
            }}
            onPress={() => setShowDressOptions(!showDressOptions)}
          >
            <Image
              source={icons.down}
              resizeMode="contain"
              style={{
                width: 16,
                height: 10,
              }}
            />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 47,
            height: "100%",
            borderWidth: 1,
            borderRadius: SIZES.small / 2,
            borderColor: COLORS.white,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: SIZES.medium,
            backgroundColor: COLORS.white,
            shadowColor: COLORS.secondary,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Image
            source={icons.filter}
            resizeMode="contain"
            style={{
              width: 20,
              height: 18,
            }}
          />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default HomeHeader;
