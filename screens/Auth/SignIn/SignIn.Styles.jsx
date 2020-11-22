import GlobalStyle from "../../../GlobalStyles";

const { theme } = require("galio-framework");
const { Dimensions, StyleSheet } = require("react-native");

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {},
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,

    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 6,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
  },
  logoBox:{
    height:height/10*4,
    display:"flex",
    justifyContent:"center",
  },
  title: {
  },
  subTitle: {
    marginTop: 20,
  },
  error:{
    marginHorizontal:20,
    paddingHorizontal:5,
    marginBottom:5,
    color:GlobalStyle.color.textLight,
    backgroundColor:GlobalStyle.bg.errorMessage,
    borderRadius:2,
    textAlign:"center"
  }
});

export default styles;
