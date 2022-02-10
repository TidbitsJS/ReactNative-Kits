import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailsFooter from "../components/details/DetailsFooter";
import DetailsHeader from "../components/details/DetailsHeader";

import { COLORS, icons, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const JobDetails = ({ route, navigation }) => {
  const { job } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <FocusedStatusBar
        backgroundColor={COLORS.lightWhite}
        barStyle="dark-content"
      />

      <View style={{ flex: 1, padding: SIZES.medium }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.white,
              borderRadius: SIZES.small / 1.25,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.left}
              resizeMode="contain"
              style={{
                width: "60%",
                height: "60%",
                tintColor: COLORS.primary,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.white,
              borderRadius: SIZES.small / 1.25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.share}
              resizeMode="contain"
              style={{
                width: "60%",
                height: "60%",
                tintColor: COLORS.primary,
              }}
            />
          </TouchableOpacity>
        </View>

        <DetailsHeader
          url={job.url}
          jobtype={job.job}
          name={job.name}
          location={job.location}
        />
      </View>

      <DetailsFooter />
    </SafeAreaView>
  );
};

export default JobDetails;
