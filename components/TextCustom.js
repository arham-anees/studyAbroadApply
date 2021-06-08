import React from "react";
import { Text } from "galio-framework";
import GlobalStyle from "../GlobalStyles";

function TextCustom(props) {
  return (
    <Text
      color={GlobalStyle.color.textLight}
      {...props}
      style={{ ...props.style, flexWrap: "wrap" }}
    >
      {props.children}
    </Text>
  );
}

export default TextCustom;
