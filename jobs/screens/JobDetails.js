import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailsFooter from "../components/details/DetailsFooter";
import DetailsHeader from "../components/details/DetailsHeader";
import Filters from "../components/Filters";

import { COLORS, icons, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const searchTypes = ["Description", "Company", "Reviews"];

const IconItem = ({ iconUrl, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={handleNavigate}
    >
      <Image
        source={iconUrl}
        resizeMode="contain"
        style={{
          width: "60%",
          height: "60%",
          tintColor: COLORS.primary,
        }}
      />
    </TouchableOpacity>
  );
};

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
          <IconItem
            iconUrl={icons.left}
            handleNavigate={() => navigation.goBack()}
          />
          <IconItem iconUrl={icons.share} />
        </View>

        <DetailsHeader
          url={job.url}
          jobtype={job.job}
          name={job.name}
          location={job.location}
        />

        <View>
          <Filters filterTypes={searchTypes} />
        </View>
      </View>

      <DetailsFooter />
    </SafeAreaView>
  );
};

export default JobDetails;
