import React from "react";
import { View, SafeAreaView } from "react-native";
import JobsHeader from "../components/jobs/JobsHeader";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, SIZES } from "../constants";

function Jobs() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <FocusedStatusBar
        backgroundColor={COLORS.lightWhite}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <JobsHeader />
      </View>
    </SafeAreaView>
  );
}

export default Jobs;
