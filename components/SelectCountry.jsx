import { theme } from "galio-framework";
import React from "react";
import { View } from "react-native";
import { Dimensions } from "react-native";
import { Picker, StyleSheet } from "react-native";

const countries = [
  { name: "Pakistan", value: 1 },
  { name: "Sri Lanka", value: 2 },
  { name: "South Africa", value: 3 },
  { name: "Bhutan", value: 4 },
  { name: "Afghanistan", value: 5 },
  { name: "Turkey", value: 6 },
];

export default function SelectCountry(props) {
  return (
    <View style={styles.dropdown}>
      <Picker mode={"dropdown"}>
        {countries.map((item, index) => (
          <Picker.Item label={item.name} value={item.value} key={index} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS - 3,
    borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
    borderColor: theme.COLORS.INPUT,
    height: theme.SIZES.INPUT_HEIGHT,
    marginVertical: theme.SIZES.BASE / 2,
    overflow: "hidden",
    marginTop: 10,
    // width: width - 100,
  },
});
