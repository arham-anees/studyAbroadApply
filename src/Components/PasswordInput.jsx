import React from "react";
import { Input } from "react-native-elements";

export default class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <Input
        placeholder={
          this.props.placeholder ? this.props.placeholder : "Password"
        }
        secureTextEntry={true}
        leftIcon={{ type: "font-awesome", name: "key" }}
      />
    );
  }
}
