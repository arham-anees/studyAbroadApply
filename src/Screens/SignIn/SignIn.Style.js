import { StyleSheet } from "react-native";
import GlobalStyle from "../../GlobalStyles";

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: GlobalStyle.color.primary,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },
  body: {
    flex: 2,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  loginButton: { marginHorizontal: 10 },
  Button: { marginBottom: 15 },
});

export default Styles;
