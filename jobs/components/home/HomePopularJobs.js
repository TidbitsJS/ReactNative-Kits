import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { COLORS, SIZES, popular_jobs, icons, SHADOWS } from "../../constants";

function HomePopularJobs({ navigation }) {
  const [selectedJob, setSelectedJob] = React.useState("popular_job01");
  const [favoriteJobs, setFavoriteJobs] = React.useState(["popular_job01"]);

  return (
    <View style={{ marginTop: SIZES.xLarge }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: "DMMedium",
            color: COLORS.primary,
          }}
        >
          Popular Job
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Jobs")}>
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

      <FlatList
        data={popular_jobs.slice(0, 4)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: 250,
              padding: SIZES.xLarge,
              backgroundColor:
                selectedJob === item.id ? COLORS.primary : "#FFF",
              marginRight: SIZES.medium,
              marginTop: SIZES.medium,
              borderRadius: SIZES.medium,
              justifyContent: "space-between",
              ...SHADOWS.medium,
              shadowColor: COLORS.white,
            }}
            onPress={() => {
              setSelectedJob(item.id);
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <View>
                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor:
                      selectedJob === item.id ? "#FFF" : COLORS.white,
                    borderRadius: SIZES.medium,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.url}
                    resizeMode="contain"
                    style={{
                      width: "75%",
                      height: "75%",
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: SIZES.medium,
                    fontFamily: "DMRegular",
                    color: "#B3AEC6",
                    marginTop: SIZES.small / 1.5,
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (favoriteJobs.includes(item.id)) {
                    setFavoriteJobs(
                      favoriteJobs.filter((job) => job !== item.id)
                    );
                  } else {
                    setFavoriteJobs([...favoriteJobs, item.id]);
                  }
                }}
              >
                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: favoriteJobs.includes(item.id)
                      ? COLORS.tertiary
                      : COLORS.white,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: SIZES.large }}>
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontFamily: "DMMedium",
                  color:
                    selectedJob === item.id ? COLORS.white : COLORS.primary,
                }}
              >
                {item.job}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.medium - 2,
                    fontFamily: "DMBold",
                    color:
                      selectedJob === item.id ? COLORS.white : COLORS.primary,
                  }}
                >
                  {item.salary} -{" "}
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.medium - 2,
                    fontFamily: "DMRegular",
                    color: "#B3AEC6",
                  }}
                >
                  {item.location}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
}

export default HomePopularJobs;
