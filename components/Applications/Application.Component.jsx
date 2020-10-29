import { Block, Card, Text } from "galio-framework";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";

function ApplicationItem({ props }) {
  const { item, navigation } = props;
  console.log(navigation);
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ApplicationDetails")}>
      <Card
        title={(props.index + 1).toString()}
        titleColor="white"
        style={{ margin: 5, paddingHorizontal: 5, backgroundColor: "#fff8" }}
      >
        <View styles={styles.wrapper}>
          <Block row middle space="between">
            <Text h5 style={styles.textWhite}>
              {item.name}
            </Text>
            <Text style={styles.textWhite}>{item.status}</Text>
          </Block>
          <Block row space="between">
            <Text style={styles.textWhite}>{item.level}</Text>
            <Text style={styles.textWhite}>{item.date}</Text>
          </Block>
          <Block>
            <Text style={styles.textWhite}>{item.course}</Text>
            <Text style={styles.textWhite}>{item.institute}</Text>
          </Block>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

export default ApplicationItem;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    margin: 5,
  },
  textWhite: {},
});
