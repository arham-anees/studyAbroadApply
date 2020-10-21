import { Dimensions, StyleSheet } from "react-native";
import GlobalStyle from "../../../GlobalStyles";

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: GlobalStyle.color.primary,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
  body: {
    paddingHorizontal: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
    paddingBottom: 50,
    height: Dimensions.get("screen").height - 300,
  },
  RadioContainer: {
    margin: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  RadioMale: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  RadioFemale: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  selectImage: {
    marginBottom: 10,
  },
  stepTitle: {
    fontSize: 20,
    color: GlobalStyle.color.primary,
    textAlign: "center",
  },
  // btnLogin: {
  //   textAlign: "center",
  //   backgroundColor: "red",
  //   width: 100,
  //   marginHorizontal: "auto",
  // },
  // btnLoginTitle: {
  //   color: "blue",
  // },
  controlContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default Styles;
