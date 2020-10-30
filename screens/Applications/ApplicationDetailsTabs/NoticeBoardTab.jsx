import {
  Block,
  Button,
  Checkbox,
  Icon,
  Input,
  Text,
  theme,
} from "galio-framework";
import React from "react";
import { Picker } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";

const { height, width } = Dimensions.get("screen");

const applicationStatus = [
  { name: "Application Status", value: 1 },
  { name: "Application Sent to Institute", value: 1 },
  { name: "Application Sent to Student Counsellor", value: 1 },
  { name: "New Application Application Submitted", value: 1 },
  { name: "Refund Acknowledged", value: 1 },
];

function NoticeBoardTab(props) {
  return (
    <View>
      <Block center style={styles.statusBar}>
        <Text color="white">New Application Submitted</Text>
      </Block>
      <Block style={styles.block}>
        <Text color="white" h5 italic center>
          Update Status
        </Text>
        <Block>
          <Text color="white">Application Status</Text>
          <View style={styles.dropdown}>
            <Picker mode={"dropdown"}>
              {applicationStatus.map((item, index) => (
                <Picker.Item label={item.name} value={item.value} key={index} />
              ))}
            </Picker>
          </View>
          <Block right>
            <Button style={styles.updateStatusBtn}>Update Status</Button>
          </Block>
        </Block>
      </Block>
      <Block style={styles.block}>
        <Text color="white">Next Follow</Text>
        <Input></Input>
      </Block>
      <Block row middle space="between" style={styles.block}>
        <Text color="white">Up Date</Text>
        <Button style={styles.updateStatusBtn}>Add Next Follow Up Date</Button>
      </Block>
      <Block style={styles.block}>
        <Text center h5 italic color="white">
          Application Notes
        </Text>
        <Block row space={"between"}>
          <Text color="white">Is visible to students</Text>
          <Checkbox color="primary" label=" " Icon />
        </Block>
        <Block row middle space="between">
          {/* <Block style={styles.iconBlock} middle>
            <Icon family="Entypo" name="message" />
          </Block> */}
          <Block flex>
            <Input></Input>
          </Block>
          <Block style={styles.iconBlock} middle>
            <Icon family="Feather" name="send" />
          </Block>
        </Block>
      </Block>
    </View>
  );
}

export default NoticeBoardTab;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "green",
    width: width,
    paddingVertical: 10,
  },
  block: {
    backgroundColor: "#0004",
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
  dropdown: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS - 3,
    borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
    borderColor: theme.COLORS.INPUT,
    height: theme.SIZES.INPUT_HEIGHT,
    overflow: "hidden",
    marginTop: 10,
  },
  updateStatusBtn: {
    height: 30,
    width: width / 2,
    marginTop: 10,
  },
  iconBlock: {
    width: 50,
    backgroundColor: "white",
    height: theme.SIZES.INPUT_HEIGHT,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS,
  },
});
