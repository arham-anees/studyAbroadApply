import React from "react";
import { Block, Text } from "galio-framework";
import { ActivityIndicator } from "react-native-paper";
import GlobalStyle from "../GlobalStyles";
const { Dimensions, StyleSheet } = require("react-native");
const { width, height } = Dimensions.get("screen");
function Loading(props) {
  return props.isActive ? (
    <Block style={styles.wrapper}>
      <Block
        style={[
          styles.loading,
          {
            position: "absolute",
            height: height - GlobalStyle.SIZES.NavBarHeight,
            width: width,
          },
        ]}
      >
        <Block style={styles.textBlock}>
          <ActivityIndicator size="large" color="#fff" />
        </Block>
      </Block>
    </Block>
  ) : null;
}

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    zIndex: 9,
    opacity: 0.7,
  },
  loading: {
    position: "absolute",
    width: 150,
    height: 150,
    zIndex: 10,
    opacity: 1,
    left: (Dimensions.get("window").width - 150) / 2,
    top: (Dimensions.get("window").height - 150) / 2,
    borderRadius: 5,
  },
  textBlock: {
    textAlign: "center",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
