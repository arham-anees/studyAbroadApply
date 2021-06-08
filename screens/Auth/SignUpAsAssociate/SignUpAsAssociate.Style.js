import GlobalStyle from "../../../GlobalStyles";

const { theme } = require("galio-framework");
const { Dimensions, StyleSheet } = require("react-native");

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    bottom: theme.SIZES.BASE,
    zIndex: 2,
    flex:2
  },
  button: {
    width: width - theme.SIZES.BASE * 6,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginVertical: 10,
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
  },   
  logoBox:{
    height:height/10*3,
    justifyContent:"center"
  },
  logoText:{
    color:GlobalStyle.color.textLight,
    fontSize:GlobalStyle.LOGO.TEXT.FONTSIZE
  },
  buttons: {
    minHeight:100,
    marginTop:20
  },
  subTitle: {
    marginTop: 20,
  },
  stepContainer: {},
  dropdown: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS - 3,
    borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
    borderColor: theme.COLORS.INPUT,
    height: theme.SIZES.INPUT_HEIGHT,
    overflow: "hidden",
    marginTop: 10,
  },
  navigationBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - theme.SIZES.BASE * 4,
  },
});

export default styles;
