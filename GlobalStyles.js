import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const GlobalStyle = {
  color: {
    background: "purple",
    textPrimary: "#000",
    textSecondary: "#000",
    textTertiary: "#fff",
    primary: "purple",
    secondary: "light-blue",
    textLight: "#fff",
    textOrange: "#ed7700",
    textDark: "#000",
    error: "red",
    purple: "purple",
    btnDisabled: "#9c9c9c",
    btnPrimary: "primary",
  },
  bg: {
    green: "#32CD32", //"#04870b",
    red: "#A62D2D",
    white: "#fffd",
    whiteFaded: "#ffffff99",
    sky: "#3A8CEB",
    orange: "#FF9806",
    white: "#fffd",
    errorMessage: "#f008",
  },
  padding: {
    pageBottom: 40,
  },
  block: {
    backgroundColor: "#0004",
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  blockTitle: {
    marginBottom: 10,
    color: "white",
    textAlign: "center",
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    textTransform: "capitalize",
  },
  blockLine: {
    height: 1,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  scrollBottomPadding: {
    height: 100,
  },
  wrapText: {
    flex: 1,
    flexWrap: "wrap",
  },
  SIZES: {
    HeadingNormalHeight: 24,
    PageNormalPadding: 15,
    NavBarHeight: 60,
    PageHeight: height - 60,
    HEADING5: 24,
    HEADING6: 18,
  },
  STATUSCOLOR: {
    InProgress: "rgb(0, 143, 251)",
    NewApplication: "rgb(0, 227, 150)",
    VisaIssued: "rgb(255, 69, 96)",
    SentToCounsellor: "rgb(0, 143, 251)",
    SentToInstitute: "rgb(254, 176, 25)",
  },
  STATUSBACKGROUND: [
    "green",
    "rgb(254, 176, 25)",
    "rgb(0, 143, 251)",
    "rgb(255, 69, 96)",
  ],
  STATUSTEXTCOLOR: ["#fff", "rgb(0, 143, 251)", "rgb(254, 176, 25)"],
  LOGO: {
    TEXT: {
      FONTSIZE: 32,
    },
  },
};

export default GlobalStyle;
