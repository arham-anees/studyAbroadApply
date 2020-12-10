import GlobalStyle from "../../GlobalStyles";

const { StyleSheet } = require("react-native");
const styles = StyleSheet.create({
  containerMain: {
    height:GlobalStyle.SIZES.PageHeight,
  },
  container: {
    paddingHorizontal:GlobalStyle.SIZES.PageNormalPadding
  },
});

export default styles;
