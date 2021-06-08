import { Card, Text } from "galio-framework";
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import ProgressBar from "../../screens/ProgressBar";

const { height, width } = Dimensions.get("screen");

function CountryApplicationItem(props) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text>Country Name</Text>
        <View>{/* <ProgressBar width={width} Progress={50} /> */}</View>
      </Card>
    </View>
  );
}

export default CountryApplicationItem;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
  },
  card: {
    padding: 0,
  },
});
