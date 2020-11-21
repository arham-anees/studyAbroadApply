import { Block, Text, theme } from "galio-framework";
import { Icon, Input } from "../../../components";
import React from "react";
import { argonTheme } from "../../../constants";

import { ScrollView } from "react-native-gesture-handler";
import LabelledInput from "../../../components/LabelledInput.Component";

export default function Step2(props) {
  return (
    <ScrollView>
      <Text h5 center style={{ color: "white" }}>
        Contact Information
      </Text>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
      <LabelledInput label="First Name" iconname="person" iconfamily="Fontisto"/>
      <LabelledInput label="Last Name" iconname="person" iconfamily="Fontisto"/>
      <LabelledInput label="Office Address" iconname="person" iconfamily="Fontisto"/>
      <LabelledInput label="State/City/Province" iconname="key" iconfamily="Entypo"/>
      <LabelledInput label="Country" iconname="key" iconfamily="Entypo"/>
      <LabelledInput label="Landline" iconname="key" iconfamily="Entypo"/>
      <LabelledInput label="Cell Phone" iconname="key" iconfamily="Entypo"/>
      <LabelledInput label="Skype ID" iconname="key" iconfamily="Entypo"/>
      <LabelledInput label="WhatsApp ID" iconname="key" iconfamily="Entypo"/>
      </Block>
    </ScrollView>
  );
}
