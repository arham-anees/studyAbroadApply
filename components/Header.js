import React from "react";
import { withNavigation } from "@react-navigation/compat";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import { Block, NavBar, theme } from "galio-framework";

import Tabs from "./Tabs";
import argonTheme from "../constants/Theme";
import CustomIcon from "../Icons/BellIcon";
import Icons from "../constants/Icons";
import GlobalStyle from "../GlobalStyles";
import TextCustom from "./TextCustom";
import NotificationService from "../services/NotificationService";
import Notifications from "../helper/Notifications";

const { height, width } = Dimensions.get("window");
const iPhoneX = () =>
  Platform.OS === "ios" &&
  (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({ style, navigation, count }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={() => navigation.navigate("Notifications")}
  >
    <CustomIcon source={Icons.Bell} style={{ width: 25, height: 25 }} />
    {count > 0 && <TextCustom style={styles.notify}>{count}</TextCustom>}
  </TouchableOpacity>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationsCount: -1,
      interval: null,
    };
  }
  GetNotificationsList = () => {
    NotificationService.GetNotificationsList({ IsRequiredCount: 1 })
      .then((x) => {
        //console.log(x.length);
        this.setState({ notificationsCount: x.length });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ notificationsCount: 0 });
      });
  };
  componentDidMount() {
    // this._unsubscribe = this.props.navigation.addListener("focus", () => {
    // this.GetNotificationsList();
    this.setState({ notificationsCount: Notifications.GetNotificationCount() });

    let interval = setInterval(() => {
      //this.GetNotificationsList();
      console.log("getting notification count from service");
      this.setState({
        notificationsCount: Notifications.GetNotificationCount(),
      });
    }, 5000);
    this.setState({ interval: interval });
    // });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
    //  this.props.navigation.removeListener("focus");
  }
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  renderRight = () => {
    const { white, title, navigation } = this.props;
    return [
      <BellButton
        key="chat-home"
        navigation={navigation}
        isWhite={white}
        count={this.state.notificationsCount}
      />,
    ];
  };
  renderTabs = () => {
    const { tabs, tabIndex, navigation } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;

    if (!tabs) return null;

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={(id) => navigation.setParams({ tabId: id })}
      />
    );
  };
  renderHeader = () => {
    const { search, options, tabs } = this.props;
    if (search || tabs || options) {
      return <Block center>{tabs ? this.renderTabs() : null}</Block>;
    }
  };
  render() {
    const {
      back,
      title,
      white,
      transparent,
      bgColor,
      iconColor,
      titleColor,
      navigation,
      ...props
    } = this.props;

    const noShadow = [
      "Applications",
      "Categories",
      "Deals",
      "Pro",
      "Profile",
    ].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: "rgba(0,0,0,0)" } : null,
    ];

    const navbarStyles = [
      styles.navbar,
      bgColor && { backgroundColor: bgColor },
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={false}
          title={title}
          style={navbarStyles}
          transparent={transparent}
          right={this.renderRight()}
          rightStyle={{ alignItems: "center" }}
          left={
            <CustomIcon
              source={Icons.Menu}
              style={{ width: 25, height: 25 }}
              onPress={this.handleLeftPress}
            />
          }
          leftStyle={{ paddingVertical: 12, flex: 0.2 }}
          titleStyle={[
            styles.title,
            { color: argonTheme.COLORS[white ? "WHITE" : "HEADER"] },
            titleColor && { color: titleColor },
          ]}
          {...props}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: "relative",
  },
  title: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: theme.SIZES.BASE,
    zIndex: 5,
    height: GlobalStyle.SIZES.NavBarHeight,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 8,
    position: "absolute",
    top: 9,
    left: 27,
    paddingHorizontal: 3,
    fontSize: 10,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER,
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "400",
    color: argonTheme.COLORS.HEADER,
  },
});

export default withNavigation(Header);
