const { theme } = require("galio-framework");
const { Dimensions, StyleSheet } = require("react-native");

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
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
    position: "relative",
    marginTop: "-50%",
  },
  title: {
    marginTop: "-5%",
  },
  subTitle: {
    marginTop: 20,
  },
  stepContainer: { flex: 2 },
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
