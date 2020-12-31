import React from "react";
import { StyleSheet, TouchableOpacity, Linking, View } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import argonTheme from "../constants/Theme";
import Icons from "../constants/Icons";
import CustomIcon from "../Icons/BellIcon";
import Theme from "../constants/Theme";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;
    let source = "";
    switch (title) {
      case "Home":
       
        source = Icons.Home;
        break;
      case "Applications":
        source = Icons.Papers;
        break;
      case "Courses":
        source = Icons.Notebook;
        break;
      case "Sign Out":
        source = Icons.Logout;
        break;
      default:
        return null;
        break;
    }
    return (
      <View style={{ backgroundColor: "#fff", borderRadius: 10, padding: 3 }}>
        <CustomIcon
          source={source}
          style={{
            width: Theme.ICONS.MENU.WIDTH,
            height: Theme.ICONS.MENU.HEIGHT,
          }}
        />
      </View>
    );

  };

  render() {
    const { focused, title, navigation } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null,
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() =>
          title == "Sign Out"
            ? navigation.navigate("SignIn")
            : navigation.navigate(title)
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
});

export default DrawerItem;
