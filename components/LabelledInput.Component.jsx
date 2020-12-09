import { Block, Icon, Input, Text, theme } from "galio-framework";
import React from "react";
import GlobalStyle from "../GlobalStyles";

class LabelledInput extends React.Component {

  render=()=> (
    <Block>
      <Text style={{ color: GlobalStyle.color.textLight }}>{this.props.label}</Text>
      <Input
        placeholder={this.props.placeholder?this.props.placeholder:this.props.label}
        value={this.props.value ?? ""}
        style={[this.props.error?{borderColor:"red", borderWidth:2}:null,{color:"black"}]}
        onChangeText={this.props.onChange}
        onFocus={this.props.onFocus}
        onKeyPress={this.props.onKeyPress}
        color={"black"}
        password={this.props.password?true:false}
      />
    </Block>
  );
}

export default LabelledInput;
