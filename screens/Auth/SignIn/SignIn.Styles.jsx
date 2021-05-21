import GlobalStyle from "../../../GlobalStyles";

const { theme } = require("galio-framework");
const { Dimensions, StyleSheet } = require("react-native");

const { height, width, fontScale } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {},
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: "100%",
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginBottom: 10,
    margin: 0,
  },
  logo: {
    width: (width / 10) * 8,
    height: 50,
    resizeMode: "contain",
    zIndex: 2,
  },
  logoBox: {
    height: (height / 10) * 5,
    display: "flex",
    justifyContent: "center",
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
  sloganText: {
    color: GlobalStyle.color.textLight,
    fontSize: 20,
  },
  title: {},
  subTitle: {
    marginTop: 20,
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
    marginTop: 10,
  },
});

export default styles;
