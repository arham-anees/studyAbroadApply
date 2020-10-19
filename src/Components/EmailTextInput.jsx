import react from "react";
import React, { useState } from "react";
import { Input } from "react-native-elements";
import { IsEmail } from "../Common";

export default class EmailTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChange = (text) => {
    this.setState({ value: text });
    this.props.handleChange ? this.props.handleChange : null;
  };
  handleBlur = (e) => {
    this.props.handleBlur ? this.props.handleBlur : null;
  };
  render() {
    return (
      <react.Fragment>
        <Input
          keyboardType={"email-address"}
          placeholder={"Email"}
          value={this.state.value}
          leftIcon={{ type: "material", name: "email" }}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          //   errorMessage={"Please enter a valid Emai Address"}
        />
      </react.Fragment>
    );
  }
}
