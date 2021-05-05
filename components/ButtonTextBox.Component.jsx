import { Text } from "galio-framework";
import React from "react";
import { TouchableOpacity } from "react-native";
import GlobalStyle from "../GlobalStyles";
function ButtonTextBox(props) {
  const { onPress, label, value, error } = props;
  return (
    <>
      <Text style={{ color: GlobalStyle.color.textLight }}>{label}</Text>
      <TouchableOpacity
        style={[
          {
            backgroundColor: "#fff",
            padding: 13,
            borderRadius: 8,
            marginVertical: 5,
          },
          error && { borderColor: "red", borderWidth: 2 },
        ]}
        onPress={onPress}
      >
        <Text>{value ? value : label}</Text>
      </TouchableOpacity>
    </>
  );
}

export default ButtonTextBox;
