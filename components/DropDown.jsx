import { Text, theme } from "galio-framework";
import React from "react";
import { View } from "react-native";
import { Picker, StyleSheet } from "react-native";
import GlobalStyle from "../GlobalStyles";

function DropDown({label,list, onChange,selectedValue, textColor,disabled, noLabel}) {

 
  if(!selectedValue)selectedValue=list[0];
  return (
    <View>
      <Text color={textColor?textColor:GlobalStyle.color.textLight}>{label}</Text>
      <View style={styles.dropdown}>
        <Picker
          mode={"dropdown"}
          onValueChange={onChange}
          selectedValue={selectedValue}
          enabled={!disabled}
        >
          {list
            ? list.map((item, index) => (
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
});
