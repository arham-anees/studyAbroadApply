import { Dimensions } from "react-native";
import GlobalStyle from "../../../GlobalStyles";

const { StyleSheet } = require("react-native");
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  btn: {
    width: "100%",
  },
  input: {
    width: width - 110,
  },
  text: {
    color: GlobalStyle.color.textLight,
  },
  block: GlobalStyle.block,
  blockTitle: GlobalStyle.blockTitle,
  advancedSearch:{marginTop:15}
});

export default styles;
