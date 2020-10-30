import { Block, Card, Icon, Text } from "galio-framework";
import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import {} from "@expo/vector-icons";
import FontAwesomeIcon from "../FontAwesomeIcon";

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
          <Block
            row
            middle
            space="between"
            style={{ borderBottomWidth: 1, borderBottomColor: "white" }}
          >
            <Block row middle>
              <Icon
                family="FontAwesome5"
                name="person"
                color="white"
                size={20}
                style={styles.icon}
              />
              <Text h5 style={styles.textWhite}>
                {item.name}
              </Text>
            </Block>
            <Text style={[styles.textWhite, styles.bgStatus]}>
              {item.status}
            </Text>
          </Block>

          <Block left>
            <Block row middle>
              <Icon
                family="AntDesign"
                name="calendar"
                color="white"
                style={styles.icon}
              />
              <Text style={styles.textWhite}>{item.date}</Text>
            </Block>
            <Block row middle>
              <Icon
                family="Entypo"
                name="graduation-cap"
                color="white"
                style={styles.icon}
              />
              <Text style={styles.textWhite}>{item.course},</Text>
              <Text style={styles.textWhite}> {item.level}</Text>
            </Block>
            <Block row middle>
              <FontAwesomeIcon
                name="university"
                color="white"
                style={styles.icon}
              />
              <Text style={styles.textWhite}>{item.institute}</Text>
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
});
