import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, popular_jobs, SHADOWS, SIZES } from "../../constants";

const NearbyJob = ({ job }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        marginBottom: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.medium,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={job.url}
            resizeMode="contain"
            style={{
              width: "75%",
              height: "75%",
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            marginHorizontal: SIZES.medium,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: "DMBold",
              color: COLORS.primary,
            }}
          >
            {job.job}
          </Text>

          <Text
            style={{
              fontSize: SIZES.small + 2,
              fontFamily: "DMRegular",
              color: COLORS.gray,
              marginTop: 3,
            }}
          >
            {job.type}
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: "DMBold",
            color: COLORS.primary,
          }}
        >
          {job.salary}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeJobList = () => {
  return (
    <View style={{ marginTop: SIZES.xLarge }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: SIZES.small,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: "DMMedium",
            color: COLORS.primary,
          }}
        >
          Nearby jobs
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: "DMMedium",
              color: COLORS.gray,
            }}
          >
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: SIZES.medium }}>
        {popular_jobs.slice(5, 10).map((job, index) => (
          <NearbyJob job={job} key={`nearby-job-${index}`} />
        ))}
      </View>
    </View>
  );
};

export default HomeJobList;
