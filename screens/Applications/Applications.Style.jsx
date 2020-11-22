import { theme } from "galio-framework";
import { Dimensions } from "react-native";

const { StyleSheet } = require("react-native");
const {height}=Dimensions.get("screen");
const styles = StyleSheet.create({
  containerMain: {
    height:height-100
  },
  container: {
    height:height,
    marginBottom:100
  },
});

export default styles;
