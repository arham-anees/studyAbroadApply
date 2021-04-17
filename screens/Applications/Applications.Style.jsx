import { theme } from "galio-framework";
import GlobalStyle from "../../GlobalStyles";

const { StyleSheet } = require("react-native");
const styles = StyleSheet.create({
  containerMain: {
    height: GlobalStyle.SIZES.PageHeight,
  },
  container: {
    paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding,
    minHeight: GlobalStyle.SIZES.PageHeight,
  },
  iconBlock: {
    width: 50,
    marginLeft: 5,
    backgroundColor: "white",
    height: theme.SIZES.INPUT_HEIGHT,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS,
  },
});

export default styles;
