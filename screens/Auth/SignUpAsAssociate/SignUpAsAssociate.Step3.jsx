import { Block, Text, theme } from "galio-framework";
import { Icon, Input } from "../../../components";
import React from "react";
import { argonTheme } from "../../../constants";

import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import { Picker } from "react-native";
import styles from "./SignUpAsAssociate.Style";
export default function Step3(props) {
  return (
    <ScrollView>
      <Text h5 center style={{ color: "white" }}>
        Recruitment Details
      </Text>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Text style={{ color: "white" }}>
          In Which countries did you recruit your students?
        </Text>
        <Input
          placeholder="UK,Australia..."
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
        <Text style={{ color: "white" }}>
          Approximately how many students did you send abroad in last 12 months?
        </Text>
        <View style={styles.dropdown}>
          <Picker>
            <Picker.Item label="1-25" value={25} />
            <Picker.Item label="26-50" value={50} />
            <Picker.Item label="51-99" value={99} />
            <Picker.Item label="100-199" value={199} />
            <Picker.Item label="200*" value={1000} />
          </Picker>
        </View>
      </Block>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Text style={{ color: "white" }}>
          In Which Educational institutions did you recruit your student in last
          12 months? (Any one)
        </Text>
        <Input
          placeholder="Any one..."
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
        <Text style={{ color: "white" }}>
          Please provide an estimate of the number of students you will refer to
          studyabroadapply?
        </Text>
        <View style={styles.dropdown}>
          <Picker>
            <Picker.Item label="50-99" value={99} />
            <Picker.Item label="100-199" value={199} />
            <Picker.Item label="200-299" value={299} />
            <Picker.Item label="300+" value={1000} />
          </Picker>
        </View>
      </Block>
    </ScrollView>
  );
}
