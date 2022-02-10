import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailsFooter from "../components/details/DetailsFooter";
import DetailsHeader from "../components/details/DetailsHeader";
import DetailsSection from "../components/details/DetailsSection";
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
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

          <View
            style={{ marginTop: SIZES.small, marginBottom: SIZES.small / 2 }}
          >
            <Filters filterTypes={searchTypes} />
          </View>

          <DetailsSection
            headText="Qualifications"
            bodyData={job.qualifications}
          />

          <View
            style={{
              marginTop: SIZES.large,
              backgroundColor: "#FFF",
              borderRadius: SIZES.medium,
              padding: SIZES.medium,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.large,
                color: COLORS.primary,
                fontFamily: "DMBold",
              }}
            >
              About the job:
            </Text>

            <View style={{ marginVertical: SIZES.small }}>
              {job.aboutJob.map((about, index) => (
                <Text
                  style={{
                    fontSize: SIZES.medium - 2,
                    color: COLORS.gray,
                    fontFamily: "DMRegular",
                    marginVertical: SIZES.small / 1.25,
                  }}
                  key={job.name + index}
                >
                  {about}
                </Text>
              ))}
            </View>
          </View>

          <DetailsSection
            headText="Responsibilities"
            bodyData={job.responsibilities}
          />
        </View>
      </ScrollView>

      <DetailsFooter />
    </SafeAreaView>
  );
};

export default JobDetails;
