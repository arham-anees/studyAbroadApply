import { Block, Text, Button, theme } from "galio-framework";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Input } from "../../../components";
import LabelledInput from "../../../components/LabelledInput.Component";
import { argonTheme } from "../../../constants";
import GlobalStyle from "../../../GlobalStyles";

function ProfileTab(props) {
  return (
    <View>
      <Block>
        <Block style={{ paddingHorizontal:GlobalStyle.SIZES.PageNormalPadding }}>
              <LabelledInput label="Student Name"
                iconname="person"
                iconfamily="Fontisto"
              />
              <LabelledInput
                label="Father Name"
                iconname="person"
                iconfamily="Fontisto"
              />

              <LabelledInput label="Email" iconname="key" iconfamily="Entypo" />
              <LabelledInput
                label="Email"
                iconname="key"
                iconfamily="Entypo"
              />
              <LabelledInput
                label="Passport Number"
                iconname="key"
                iconfamily="Entypo"
              />
              <LabelledInput
                label="Expiry Date"
                iconname="key"
                iconfamily="Entypo"
              />
              <LabelledInput
                label="Landline"
                iconname="key"
                iconfamily="Entypo"
              />
              <LabelledInput
                label="Cell Number"
                iconname="key"
                iconfamily="Entypo"
              />
              <LabelledInput
                label="Date of Birth"
                iconname="key"
                iconfamily="Entypo"
              />
              <LabelledInput
                label="Gender"
                iconname="key"
                iconfamily="Entypo"
              />
              <LabelledInput
                label="Nationality"
                iconname="key"
                iconfamily="Entypo"
              />
              <LabelledInput
                label="Marital Status"
                iconname="key"
                iconfamily="Entypo"
              />
              <LabelledInput
                label="Address"
                iconname="key"
                iconfamily="Entypo"
              />
              <Button style={styles.btnUpdate}>Update</Button>
            </Block>

      </Block>
    </View>
  );
}
export default ProfileTab;

const styles = StyleSheet.create({
  btnUpdate: {
    marginTop:10
  },
});
