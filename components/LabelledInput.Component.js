import { Block, Icon, Input, Text, theme } from "galio-framework";
import React from "react";
import { TextInput } from "react-native";
import GlobalStyle from "../GlobalStyles";

class LabelledInput extends React.Component {
  labelColor = this.props.textColor
    ? this.props.textColor
    : GlobalStyle.color.textLight;
  disabled = this.props.disabled;
  inputStyle = this.props.inputStyle;
  type = this.props.type ? this.props.type : "default";
  render() {
    return (
      <Block style={{ marginTop: 10 }}>
        <Text style={{ color: this.labelColor }}>
          {this.props.label}
          {this.props.required ? "*" : null}
        </Text>
        <TextInput
          placeholder={
            this.props.placeholder ? this.props.placeholder : this.props.label
          }
          value={this.props.value ?? ""}
          style={[
            this.props.error ? { borderColor: "red", borderWidth: 2 } : null,
            this.disabled ? { opacity: 0.8 } : null,
            {
              backgroundColor: "white",
              height: 40,
              borderRadius: 5,
              paddingHorizontal: 5,
            },
            this.inputStyle,
          ]}
          onBlur={this.props.onBlur}
          onChangeText={this.props.onChange}
          onFocus={this.props.onFocus}
          onKeyPress={this.props.onKeyPress}
          secureTextEntry={this.props.password ? true : false}
          editable={!this.disabled}
          keyboardType={this.type}
        ></TextInput>
      </Block>
    );
  }
}

export default LabelledInput;
