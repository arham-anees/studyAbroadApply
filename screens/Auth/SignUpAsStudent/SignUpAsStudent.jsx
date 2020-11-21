import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import {
  ImageBackground,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import { Block, Button, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import styles from "./SignUpAsStudent.Styles";
import argonTheme from "../../../constants/Theme";
import Images from "../../../constants/Images";
import LabelledInput from "../../../components/LabelledInput.Component";


import {HandleSignUp} from './SignUpAsStudent.Utils';

class SignUpAsStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
      error: -1,
    };
  }

  handleSignUp=()=>{
    HandleSignUp(this.state).then(x=>console.log(x))
    .catch(e=>{
      console.log(e)
      try{
        let errorCode=parseInt(e);
        this.setState({error:errorCode});
      }
      catch(e){
//show toast
      }
    })
  }
  handleEmailChange=(value)=>{
console.log(value);
this.setState({Email:value});
  }
  render = () => (
    <Block  style={styles.container}>
      <StatusBar />
      <Block  center>
        <ImageBackground
          source={Images.Onboarding}
          style={{ height, width, zIndex: 1, position:"absolute" }}
        />
      </Block>
      <Block center style={{height:200, justifyContent:"center"}}>
        <Image source={Images.LogoOnboarding} style={styles.logo} />
      </Block>
      <Block space="between" style={styles.padded}>
        <Block  space="around" >
          <Block style={styles.title}>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <LabelledInput
                label="First Name"
                iconname="person"
                iconfamily="Fontisto"
                onChange={this.handleEmailChange}
              />
              <LabelledInput
                label="Last Name"
                iconname="person"
                value={this.state.LastName}
                onChange={this.handleEmailChange}
                iconfamily="Fontisto"
              />

              <LabelledInput label="Email" iconname="key" iconfamily="Entypo" 
              value={this.state.Email}
                error={this.state.error===2}
                onChange={this.handleEmailChange}
                />
              <LabelledInput
                label="Password"
                iconname="key"
                error={this.state.error===3}
                iconfamily="Entypo"
                onChange={this.handleEmailChange}
              />
              <LabelledInput
                label="Confirm Password"
                iconname="key"
                iconfamily="Entypo"
                onChange={this.handleEmailChange}
                error={this.state.error===4}
              />
            </Block>
          </Block>
          <Block center style={[styles.title,{marginTop:20}]}>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Button
                style={[styles.button, { marginBottom: 20 }]}
                onPress={this.handleSignUp}
              >
                Sign Up
              </Button>
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={() => this.props.navigation.navigate("SignIn")}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Sign In Here
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

export default SignUpAsStudent;
