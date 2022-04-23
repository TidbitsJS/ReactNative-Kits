import React from "react";
import { View, StyleSheet } from "react-native";

import { COLORS } from "../constants";

const propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }],
  };
};

const sizeStyle = (size) => {
  return {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: size / 10,
  };
};

const renderThirdLayer = (percent, size) => {
  if (percent > 50) {
    return (
      <View
        style={[
          sizeStyle(size),
          styles.secondProgressLayer,
          propStyle(percent - 50, 45),
        ]}
      />
    );
  } else {
    return <View style={styles.offsetLayer} />;
  }
};

const CircularProgress = ({ percent, size }) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={[styles.container, sizeStyle(size)]}>
      <View
        style={[
          sizeStyle(size),
          styles.firstProgressLayer,
          firstProgressLayerStyle,
        ]}
      />
      {renderThirdLayer(percent, size)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  firstProgressLayer: {
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#2FC579",
    borderTopColor: "#2FC579",
    transform: [{ rotateZ: "-135deg" }],
  },
  secondProgressLayer: {
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#2FC579",
    borderTopColor: "#2FC579",
    transform: [{ rotateZ: "45deg" }],
  },
  offsetLayer: {
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: COLORS.gray,
    borderTopColor: COLORS.gray,
    transform: [{ rotateZ: "-135deg" }],
  },
});

export default CircularProgress;
