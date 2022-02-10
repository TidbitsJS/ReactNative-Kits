import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { COLORS, popular_jobs, SIZES } from "../constants";

import FocusedStatusBar from "../utils/FocusedStatusBar";
import JobsHeader from "../components/jobs/JobsHeader";
import JobsList from "../components/jobs/JobsList";

function Jobs() {
  const [activeJob, setActiveJob] = React.useState(1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <FocusedStatusBar
        backgroundColor={COLORS.lightWhite}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <FlatList
          data={popular_jobs}
          renderItem={({ item }) => (
            <JobsList
              job={item}
              activeJob={activeJob}
              handlePress={() => setActiveJob(item)}
            />
          )}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => <JobsHeader />}
          contentContainerStyle={{
            padding: SIZES.medium,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default Jobs;
