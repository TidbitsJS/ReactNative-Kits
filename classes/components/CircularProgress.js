import React from "react";
import { View, StyleSheet } from "react-native";

import { COLORS } from "../constants";

const propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }],
  };
};

const renderThirdLayer = (percent) => {
  if (percent > 50) {
    return (
      <View style={[styles.secondProgressLayer, propStyle(percent - 50, 45)]} />
    );
  } else {
    return <View style={styles.offsetLayer} />;
  }
};

const CircularProgress = ({ percent }) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      {renderThirdLayer(percent)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: COLORS.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  firstProgressLayer: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderRadius: 20,
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#2FC579",
    borderTopColor: "#2FC579",
    transform: [{ rotateZ: "-135deg" }],
  },
  secondProgressLayer: {
    width: 40,
    height: 40,
    position: "absolute",
    borderWidth: 4,
    borderRadius: 20,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#2FC579",
    borderTopColor: "#2FC579",
    transform: [{ rotateZ: "45deg" }],
  },
  offsetLayer: {
    width: 40,
    height: 40,
    position: "absolute",
    borderWidth: 4,
    borderRadius: 20,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: COLORS.gray,
    borderTopColor: COLORS.gray,
    transform: [{ rotateZ: "-135deg" }],
  },
});

export default CircularProgress;
