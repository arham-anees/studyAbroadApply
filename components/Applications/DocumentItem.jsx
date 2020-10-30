import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Block, Button, Text } from "galio-framework";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

function DocumentItem(props) {
  return (
    <View style={styles.container}>
      <Block row right>
        <Text>{props.number} </Text>
        <Text h5>{props.name}</Text>
      </Block>
      <Block row space="between" margin={5}>
        <Text>{props.category}</Text>
        <Text>{props.date}</Text>
      </Block>
      <Block row space="between">
        <Button style={styles.button} color="green">
          Download
        </Button>
        <Button style={styles.button} color="red">
          Delete
        </Button>
      </Block>
    </View>
  );
}

export default DocumentItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff9",
    borderRadius: 10,
    margin: 5,
    marginVertical: 10,
    padding: 10,
  },

  button: {
    width: (width - 50) / 2,
    height: 30,
  },
});
