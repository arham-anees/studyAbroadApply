import React from "react";
import { Block, Text } from "galio-framework";
import { ActivityIndicator } from "react-native-paper";
import GlobalStyle from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
const { Dimensions, StyleSheet, View } = require("react-native");
const { width, height } = Dimensions.get("window");
function Loading(props) {
  return props.isActive ? (
    <View style={styles.wrapper} onScroll={() => {}}>
      <Block
        style={[
          styles.loading,
          {
            height: GlobalStyle.SIZES.PageHeight,
            width: width,
          },
        ]}
      >
        <Block style={styles.textBlock}>
          <ActivityIndicator size="large" color="#fff" />
        </Block>
      </Block>
    </View>
  ) : null;
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  wrapper: {
    position: "absolute",
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
