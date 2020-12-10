import { Block, Icon, Input, Text, theme } from "galio-framework";
import React from "react";
import GlobalStyle from "../GlobalStyles";

class LabelledInput extends React.Component {
  labelColor = this.props.textColor
    ? this.props.textColor
    : GlobalStyle.color.textLight;
  render (){
    return (
    <Block>
      <Text style={{ color: this.labelColor }}>
        {this.props.label} {this.props.required?"*":null}
      </Text>
      <Input
        placeholder={
          this.props.placeholder ? this.props.placeholder : this.props.label
        }
        value={this.props.value ?? ""}
        style={[
          this.props.error ? { borderColor: "red", borderWidth: 2 } : null,
          { color: "black" },
        ]}
        onChangeText={this.props.onChange}
        onFocus={this.props.onFocus}
        onKeyPress={this.props.onKeyPress}
        color={"black"}
        password={this.props.password ? true : false}
      />
    </Block>
  );}
}

export default LabelledInput;
