import React from "react";
import { StyleSheet, View } from "react-native";

function ProgressBar(props) {
  return (
    <View>
      <View style={[styles.container, { width: 200 }]}>
        <View style={[styles.progress, { width: (200 / 100) * 50 }]}></View>
      </View>
    </View>
  );
}

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    minHeight: 20,
    maxHeight: 20,
    backgroundColor: "#2e2e2e",
    overflow: "hidden",
  },
  progress: {
    minHeight: 20,
    maxHeight: 20,
    backgroundColor: "blue",
  },
});
