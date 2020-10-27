import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Block, Button, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import styles from "./SignIn.Styles";

import argonTheme from "../../../constants/Theme";
import Images from "../../../constants/Images";
import { Icon, Input } from "../../../components";

function SignIn(props) {
  const { navigation } = props;

  return (
    <Block flex style={styles.container}>
      <StatusBar hidden />
      <Block flex center>
        <ImageBackground
          source={Images.Onboarding}
          style={{ height, width, zIndex: 1 }}
        />
      </Block>
      <Block center>
        <Image source={Images.LogoOnboarding} style={styles.logo} />
      </Block>
      <Block flex space="between" style={styles.padded}>
        <Block flex space="around" style={{ zIndex: 2 }}>
          <Block style={styles.title}>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                placeholder="Email"
                iconContent={
                  <Icon
                    size={11}
                    style={{ marginRight: 14 }}
                    color={argonTheme.COLORS.ICON}
                    name="person"
                    family="Fontisto"
                  />
                }
              />
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                placeholder="Password"
                iconContent={
                  <Icon
                    size={11}
                    style={{ marginRight: 14 }}
                    color={argonTheme.COLORS.ICON}
                    name="key"
                    family="Entypo"
                  />
                }
              />
            </Block>
          </Block>
          <Block center style={styles.title}>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Button
                style={[styles.button, { marginBottom: 20 }]}
                onPress={() => navigation.navigate("Elements")}
              >
                Sign In
              </Button>
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={() => navigation.navigate("SignUpAsStudent")}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Sign Up As Student
              </Button>
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={() => navigation.navigate("SignUpAsAssociate")}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Sign Up As Associate
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

export default SignIn;
