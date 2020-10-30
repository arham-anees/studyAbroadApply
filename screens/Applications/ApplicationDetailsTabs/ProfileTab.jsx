import { Block, Text, Button } from "galio-framework";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Input } from "../../../components";
import { argonTheme } from "../../../constants";

function ProfileTab(props) {
  return (
    <View>
      <Block>
        <Block>
          <Text color="white">Student Name</Text>
          <Input
            placeholder="Student Name"
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
        <Block>
          <Text color="white">Father Name</Text>
          <Input
            placeholder="Father Name"
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
        <Block>
          <Text color="white">Email</Text>
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
        <Block>
          <Text color="white">Passport Number</Text>
          <Input
            placeholder="Passport Number"
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
        <Block>
          <Text color="white">Expiry Date</Text>
          <Input
            placeholder="Expiry Date"
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
        <Block>
          <Text color="white">Landline</Text>
          <Input
            placeholder="Landline"
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
        <Block>
          <Text color="white">Cell Number</Text>
          <Input
            placeholder="Cell Number"
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
        <Block>
          <Text color="white">Date of Birth</Text>
          <Input
            placeholder="Date of Birth"
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
        <Block>
          <Text color="white">Gender</Text>
          <Input
            placeholder="Gender"
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
        <Block>
          <Text color="white">Nationality</Text>
          <Input
            placeholder="Nationality"
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
        <Block>
          <Text color="white">Marital Status</Text>
          <Input
            placeholder="Marital Status"
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
        <Block>
          <Text color="white">Address</Text>
          <Input
            placeholder="Address"
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

        <Button style={styles.btnUpdate}>Update</Button>
      </Block>
    </View>
  );
}
export default ProfileTab;

const styles = StyleSheet.create({
  btnUpdate: {
    width: "100%",
  },
});
