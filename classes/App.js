import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FocusedStatusBar } from "./utils";

export default function App() {
  return (
    <SafeAreaView>
      <FocusedStatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
