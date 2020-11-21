import { Block, Button, Card, Icon, Text } from "galio-framework";
import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import {} from "@expo/vector-icons";
import FontAwesomeIcon from "../FontAwesomeIcon";
import GlobalStyle from "../../GlobalStyles";
import Icons from "../../constants/Icons";
import CustomIcon from '../../Icons/BellIcon';

function ApplicationItem({ props }) {
  const { item, navigation } = props;
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ApplicationDetails")}>
      <View
        title={(props.index + 1).toString()}
        titleColor="white"
        style={styles.container}
      >
        <View styles={styles.wrapper}>
          <Block row middle>
            <Text h5 center style={styles.textWhite}>
              {item.name}
            </Text>
          </Block>

          <Block left>
            <Block>
              <Text style={[styles.textWhite, styles.bgStatus]}>
                {item.status}
              </Text>
            </Block>
            <Block row middle>
              <Text style={styles.textWhite}>{item.course},</Text>
              <Text style={styles.textWhite}> {item.level}</Text>
            </Block>
            <Block row middle>
              <Text style={styles.textWhite}>{item.institute}</Text>
            </Block>
            <Block>
              <Block row space="between" style={{ width: "100%" }}>
                <Text style={styles.textWhite}>App Date: </Text>
                <Text style={styles.textWhite}>{item.date}</Text>
              </Block>
              <Block row space="between" style={{ width: "100%" }}>
                <Text style={styles.textWhite}>Intake</Text>
                <Text style={styles.textWhite}>21 Feb</Text>
              </Block>
              <Block row space="between" style={{ width: "100%" }}>
                <Text style={styles.textWhite}>Created By</Text>
                <Text style={styles.textWhite}>Int</Text>
              </Block>
              <Block row space="evenly" style={styles.footer}>
                <CustomIcon source={Icons.Email}/>
                <CustomIcon source={Icons.Settings}/>
              </Block>
            </Block>
          </Block>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ApplicationItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    margin: 10,
    backgroundColor: "#fff4",
    borderRadius: 10,
    padding: 10,
  },
  wrapper: {
    padding: 10,
    margin: 5,
  },
  textWhite: {
    color: "white",
  },
  bgStatus: {
    backgroundColor: "orange",
    borderRadius: 10,
    paddingHorizontal: 5,
    color: "white",
  },
  icon: {
    width: 20,
    color: "white",
  },
  footer: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "white",
    marginTop: 10,
    paddingTop: 10,
  },
});
