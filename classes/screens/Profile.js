import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { CircularProgress, ProfileTag } from "../components";

import {
  COLORS,
  favouriteHobbies,
  FONTFAMILY,
  images,
  SHADOW,
} from "../constants";
import { FocusedStatusBar } from "../utils";

const ProfileHeader = () => (
  <View
    style={{
      backgroundColor: COLORS.white,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    }}
  >
    <View
      style={{
        width: 120,
        height: 120,
        borderWidth: 1,
        borderRadius: 60,
        alignItems: "center",
        borderColor: "#EDEDED",
        justifyContent: "center",
      }}
    >
      <Image
        source={images.kemal}
        resizeMode="cover"
        style={{
          width: "85%",
          height: "85%",
          borderRadius: 60,
        }}
      />

      <View
        style={{
          position: "absolute",
          backgroundColor: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
          width: 20,
          height: 20,
          borderRadius: 15,
          right: 0,
          bottom: 10,
          ...SHADOW.dimShadow,
        }}
      >
        <Image
          source={images.downArrow}
          style={{
            width: "50%",
            height: "50%",
            borderRadius: 15,
            tintColor: "#C0BEC6",
          }}
        />
      </View>
    </View>

    <View
      style={{
        width: "100%",
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: FONTFAMILY.bold,
          color: COLORS.darkBlue,
          fontSize: 25,
          lineHeight: 28,
          marginTop: 6,
        }}
      >
        Kemal Soydere
      </Text>
      <Text
        style={{
          fontFamily: FONTFAMILY.medium,
          color: COLORS.gray,
          fontSize: 14,
          lineHeight: 20,
          marginTop: 5,
        }}
      >
        Zonguldak, Turkey
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 17,
        }}
      >
        <Image
          source={images.mail}
          style={{
            width: 20,
            height: 20,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontFamily: FONTFAMILY.semiBold,
            color: COLORS.mediumBlue,
            fontSize: 15,
            marginLeft: 7,
            lineHeight: 22,
          }}
        >
          kemal.soydere@gmail.com
        </Text>
      </View>
    </View>
  </View>
);

const ProfileProgress = () => (
  <View
    style={{
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 10,
      flexDirection: "row",
    }}
  >
    <View
      style={{
        flex: 1,
        margin: 5,
        padding: 15,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 21,
            lineHeight: 23,
            fontFamily: FONTFAMILY.bold,
            color: COLORS.darkBlue,
          }}
        >
          80%
        </Text>
        <CircularProgress percent={80} />
      </View>

      <Text
        style={{
          fontSize: 12,
          marginTop: 30,
          lineHeight: 15,
          fontFamily: FONTFAMILY.semiBold,
          color: COLORS.gray,
        }}
      >
        Profile Completion
      </Text>
    </View>

    <View
      style={{
        flex: 1,
        margin: 5,
        padding: 15,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 21,
            lineHeight: 23,
            fontFamily: FONTFAMILY.bold,
            color: COLORS.darkBlue,
          }}
        >
          10
        </Text>

        <Image
          source={images.stack}
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.darkBlue,
          }}
          resizeMode="contain"
        />
      </View>

      <Text
        style={{
          fontSize: 12,
          marginTop: 30,
          lineHeight: 15,
          color: COLORS.gray,
          fontFamily: FONTFAMILY.semiBold,
        }}
      >
        Classes Taken
      </Text>
    </View>
  </View>
);

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blueWhite }}>
      <FocusedStatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView>
        {/* Header section */}
        <ProfileHeader />

        {/* Progress section */}
        <ProfileProgress />

        {/* Tags section */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 5,
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {favouriteHobbies.map((item) => (
            <ProfileTag
              title={item.name}
              iconUrl={item.iconUrl}
              key={item.id}
            />
          ))}
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: "#EBEAEF",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <Image
              source={images.edit}
              style={{
                width: "40%",
                height: "40%",
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
