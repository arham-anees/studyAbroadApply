import { Block, Text } from "galio-framework";
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";

const { height } = Dimensions.get("window");

function Toast(props) {
  return (
    <Block center style={styles.wrapper}>
      <Text color="white">{props.children}</Text>
    </Block>
  );
}

export default Toast;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "rgb(255, 0, 8)",
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
