import GlobalStyle from "../../../GlobalStyles";

const { theme } = require("galio-framework");
const { Dimensions, StyleSheet } = require("react-native");

const { height, width, fontScale } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: GlobalStyle.SIZES.PageNormalPadding,
    height: "100%",
  },
  padded: {
    height: "45%",
    justifyContent: "flex-end",
  },
  button: {
    width: "100%",
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    margin: 0,
  },
  logoBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "45%",
    width: width,
  },
  logoText: {
    color: GlobalStyle.color.textLight,
    fontSize:
      width > 500
        ? GlobalStyle.LOGO.TEXT.FONTSIZE * 1.5
        : GlobalStyle.LOGO.TEXT.FONTSIZE,
    width,
    height: 100,
    textAlign: "center",
  },
  error: {
    paddingHorizontal: 5,
    color: GlobalStyle.color.textLight,
    backgroundColor: GlobalStyle.bg.errorMessage,
    borderRadius: 3,
    marginBottom: 15,
    textAlign: "center",
  },
  Link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    marginVertical: 5,
  },
});

export default styles;
