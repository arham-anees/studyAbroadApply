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
        <Text style={styles.title}>Update Status</Text>
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
        <Text style={styles.title}>Follow Up</Text>
        <Block row space="between">
          <Text color="white">Next Follow Up</Text>
          <Text color="white">10/10/2020</Text>
        </Block>
        <Block row middle space="between">
          <Text color="white">Up Date</Text>
          <Button style={styles.updateStatusBtn}>
            Add Next Follow Up Date
          </Button>
        </Block>
      </Block>
      <Block style={styles.block}>
        <Text style={styles.title}>Application Notes</Text>
        <Block>
          <Block style={styles.noteBody}>
            <Text color="white">Faraz: this is a note</Text>
          </Block>
          <Block style={styles.noteBody}>
            <Text color="white">Student: this is a note</Text>
          </Block>
        </Block>
        <Checkbox
          color="white"
          label="Is visible to students"
          icon
          iconColor="black"
          labelStyle={{ color: "white" }}
        />
        <Block row middle space="between">
          <Block flex>
            <Input placeholder={"Note"}></Input>
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
    padding: 10,
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
    marginLeft: 5,
    backgroundColor: "white",
    height: theme.SIZES.INPUT_HEIGHT,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS,
  },
  noteBody: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 5,
    marginBottom: 10,
  },
  title: {
    marginBottom: 10,
    color: "white",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 24,
  },
});
