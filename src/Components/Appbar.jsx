import React from "react";
import { Appbar } from "react-native-paper";
import GlobalStyle from "../GlobalStyles";
function ApplicationBar({ props }) {
  return (
    <Appbar.Header style={Styles.text}>
      <Appbar.Action
        icon="menu"
        onPress={() => {
          props.navigation.openDrawer();
        }}
      />
      <Appbar.Content title={props.name} />
    </Appbar.Header>
  );
}

export default ApplicationBar;

const Styles = {
  text: {
    color: GlobalStyle.color.textTertiary,
  },
};
