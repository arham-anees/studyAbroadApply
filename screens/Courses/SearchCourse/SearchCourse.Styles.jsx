import { Dimensions } from "react-native";
import GlobalStyle from "../../../GlobalStyles";

const { StyleSheet } = require("react-native");
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    width: width - 110,
  },
  text: {
    color: GlobalStyle.color.textLight,
  },
  block: GlobalStyle.block,
  blockTitle: GlobalStyle.blockTitle,
});

export default styles;
