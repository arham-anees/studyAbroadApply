import { Dimensions } from "react-native";
import GlobalStyle from "../../../GlobalStyles";

const { StyleSheet } = require("react-native");
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container:{
    flex:1,
    minHeight:height
  },
  btn: {
    width: "100%",
    margin:0,
    zIndex:1,
    position:"absolute",
    bottom:10,
    left:10
  },
  input: {
    width: width - 110,
  },
  text: {
    color: GlobalStyle.color.textLight,
  },
  block: GlobalStyle.block,
  blockTitle: GlobalStyle.blockTitle,
  advancedSearch:{marginBottom:45},
  noCourse:{
    textAlign:"center",
    fontSize:20,
    marginTop:20
  }
});

export default styles;
