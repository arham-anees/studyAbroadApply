import { StyleSheet } from "react-native";
import GlobalStyles from "../GlobalStyles";
const Styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.color.primary,
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 50,
  },
  textSection: {
    display: "flex",
    alignContent: "center",
    marginTop: 10,
  },
  text: {
    color: GlobalStyles.color.textTertiary,
  },
});

export default Styles;
