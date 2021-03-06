import GlobalStyle from "../../../GlobalStyles";

const { theme } = require("galio-framework");
const { Dimensions, StyleSheet } = require("react-native");

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: GlobalStyle.SIZES.PageNormalPadding,
    justifyContent: "space-between",
  },
  padded: {
    height: "58%",
  },
  button: {
    width: "100%",
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    margin: 0,
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 10,
  },
  logoBox: {
    height: "35%",
    display: "flex",
    justifyContent: "center",
  },
  logoText: {
    color: GlobalStyle.color.textLight,
    fontSize: 32,
  },
  subTitle: {
    marginTop: 20,
  },
  error: {
    paddingHorizontal: 5,
    color: GlobalStyle.color.textLight,
    backgroundColor: GlobalStyle.bg.errorMessage,
    borderRadius: 2,
    textAlign: "center",
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    marginVertical: 5,
  },
});

export default styles;
