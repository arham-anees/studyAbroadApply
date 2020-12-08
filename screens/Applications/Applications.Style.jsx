import { theme } from "galio-framework";
import { Dimensions } from "react-native";
import GlobalStyle from "../../GlobalStyles";

const { StyleSheet } = require("react-native");
const {height}=Dimensions.get("screen");
const styles = StyleSheet.create({
  containerMain: {
    height:height-100,
  },
  container: {
    height:height,
    marginBottom:100,
    paddingHorizontal:GlobalStyle.SIZES.PageNormalPadding
  },
});

export default styles;
