import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, icons, SHADOWS, SIZES } from "../../constants";

const JobsList = ({ job, activeJob, handlePress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeJob.id === job.id ? COLORS.primary : "#FFF",
        padding: SIZES.medium,
        marginVertical: SIZES.small / 1.5,
        borderRadius: SIZES.large,
        flexDirection: "row",
        ...SHADOWS.medium,
        shadowColor: "#F6F5FA",
      }}
      onPress={() => {
        navigation.navigate("JobDetails", { job });
        handlePress();
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: activeJob.id === job.id ? "#FFF" : COLORS.white,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: SIZES.medium,
        }}
      >
        <Image source={job.url} style={{ width: "70%", height: "70%" }} />
      </View>

      <View style={{ flex: 1, marginHorizontal: SIZES.medium }}>
        <Text
          style={{
            fontSize: SIZES.medium - 2,
            color: activeJob.id === job.id ? "#D2CDE2" : "#9492A6",
            fontFamily: "DMMedium",
          }}
        >
          {job.name}
        </Text>
        <Text
          style={{
            fontSize: SIZES.medium + 2,
            color: activeJob.id === job.id ? "#F9F8F9" : COLORS.primary,
            fontFamily: "DMBold",
          }}
          numberOfLines={1}
        >
          {job.job}
        </Text>
        <View style={{ flexDirection: "row", marginTop: SIZES.small }}>
          <Text
            style={{
              fontSize: SIZES.medium,
              color: activeJob.id === job.id ? "#F9F8F9" : COLORS.primary,
              fontFamily: "DMMedium",
            }}
          >
            {job.salary} -{" "}
          </Text>
          <Text
            style={{
              fontSize: SIZES.medium,
              color: activeJob.id === job.id ? "#F9F8F9" : COLORS.primary,
              fontFamily: "DMRegular",
            }}
          >
            {job.location}
          </Text>
        </View>
      </View>

      <View style={{ justifyContent: "space-between" }}>
        <Image
          source={icons.heartOutline}
          style={{
            width: 18,
            height: 18,
            tintColor: activeJob.id === job.id ? "#F97657" : "#C0BFCA",
          }}
        />

        <Text
          style={{
            fontSize: SIZES.medium,
            color: activeJob.id === job.id ? "#D2CDE2" : "#9492A6",
            fontFamily: "DMRegular",
          }}
        >
          {job.time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobsList;
