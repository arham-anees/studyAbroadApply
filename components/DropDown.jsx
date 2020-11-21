import { Text, theme } from "galio-framework";
import React from "react";
import { View } from "react-native";
import { Dimensions } from "react-native";
import { Picker, StyleSheet } from "react-native";

function DropDown(props) {
  // console.log(props.list)
  return (
    <View>
      <Text style={styles.text}>{props.label}</Text>
    <View style={styles.dropdown}>
      <Picker mode={"dropdown"}>
        {props.list
          ? props.list.map((item, index) => (
              <Picker.Item label={item.name} value={item.value} key={index} />
            ))
          : null}
      </Picker>
    </View>
    </View>
  );
}

export default DropDown;

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
    width:"100%"
    // width: width - 100,
  },
  text:{
    color:"#fff"
  }
});
