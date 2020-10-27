import { Block, Text, theme } from "galio-framework";
import { Icon, Input } from "../../../components";
import React from "react";
import { View } from "react-native";
import { argonTheme } from "../../../constants";
import { Picker } from "react-native";

import styles from "./SignUpAsAssociate.Style";
export default function Step1(props) {
  return (
    <View>
      <Text h5 center style={{ color: "white" }}>
        Company Information
      </Text>
      {/* <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                <Input
                  placeholder="First Name"
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
              </Block> */}
      {/* <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                <Input
                  placeholder="Last Name"
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
              </Block> */}
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
          placeholder="Company Name"
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
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
          placeholder="Website"
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
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <View style={styles.dropdown}>
          <Picker mode={"dropdown"}>
            <Picker.Item label="1990" value="1990" />
            <Picker.Item label="1991" value="1991" />
            <Picker.Item label="1992" value="1992" />
            <Picker.Item label="1993" value="1993" />
            <Picker.Item label="1994" value="1994" />
            <Picker.Item label="1995" value="1995" />
          </Picker>
        </View>
      </Block>
    </View>
  );
}
