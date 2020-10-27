import { Block, Text, theme } from "galio-framework";
import { Icon, Input } from "../../../components";
import React from "react";
import { argonTheme } from "../../../constants";

import { ScrollView } from "react-native-gesture-handler";

export default function Step2(props) {
  return (
    <ScrollView>
      <Text h5 center style={{ color: "white" }}>
        Contact Information
      </Text>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
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
      </Block>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
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
      </Block>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
          placeholder="Office Address"
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
          placeholder="State/City/Province"
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
          placeholder="Country"
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
          placeholder="Landline"
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
          placeholder="Cell Phone"
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
          placeholder="Skype ID"
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
          placeholder="WhatsApp ID"
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
    </ScrollView>
  );
}
