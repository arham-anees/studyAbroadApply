import { Block, Text, theme } from "galio-framework";
import { Icon, Input } from "../../../components";
import React from "react";
import { argonTheme } from "../../../constants";

import { ScrollView } from "react-native-gesture-handler";
import LabelledInput from "../../../components/LabelledInput.Component";
import GlobalStyle from "../../../GlobalStyles";

export default function Step2(props) {
  return (
    <ScrollView>
      <Text
        center
        style={{ color: "white", fontSize: GlobalStyle.SIZES.HEADING5 }}
      >
        Contact Information
      </Text>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <LabelledInput label="First Name" required />
        <LabelledInput label="Last Name" required />
        <LabelledInput label="Office Address" required />
        <LabelledInput label="State/City/Province" required />
        <LabelledInput label="Country" required /> 
        <LabelledInput label="Landline" required />
        <LabelledInput label="Cell Phone" required />
        <LabelledInput label="Skype ID" required />
        <LabelledInput label="WhatsApp ID" required />
      </Block>
    </ScrollView>
  );
}
