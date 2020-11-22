import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import {
  ImageBackground,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

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
      generalMessage:"",
    };
  }

  handleSignUp=()=>{
    HandleSignUp(this.state).then(x=>{
    })
    .catch(e=>{
      try{
        let errorCode=parseInt(e.errorCode);
        this.setState({error:errorCode,generalMessage:e.message});
      }
      catch(err){
        this.setState({generalMessage:err})
      }
      });
  }
  handleFirstNameChange=(value)=>this.setState({FirstName:value, generalMessage:'', error:-1});
  handleLastNameChange=(value)=>this.setState({LastName:value, generalMessage:'', error:-1});
  handleEmailChange=(value)=>this.setState({Email:value, generalMessage:'', error:-1});
  handlePasswordChange=(value)=>this.setState({Password:value, generalMessage:'', error:-1});
  handleConfirmPasswordChange=(value)=>this.setState({ConfirmPassword:value, generalMessage:'', error:-1});
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
                onChange={this.handleFirstNameChange}
                
                value={this.state.FirstName}
              />
              <LabelledInput
                label="Last Name"
                iconname="person"
                value={this.state.LastName}
                onChange={this.handleLastNameChange}
                iconfamily="Fontisto"
                value={this.state.LastName}
              />

              <LabelledInput label="Email" iconname="key" iconfamily="Entypo" 
              value={this.state.Email}
                error={this.state.error===2}
                onChange={this.handleEmailChange}
                value={this.state.Email}
                />
              <LabelledInput
                label="Password"
                iconname="key"
                error={this.state.error===3}
                iconfamily="Entypo"
                onChange={this.handlePasswordChange}
                value={this.state.Password}
                password
              />
              <LabelledInput
                label="Confirm Password"
                iconname="key"
                iconfamily="Entypo"
                password
                onChange={this.handleConfirmPasswordChange}
                error={this.state.error===4}
                value={this.state.ConfirmPassword}
              />
              {this.state.generalMessage.length>0?<Text style={styles.error}>{this.state.generalMessage}</Text>:null}
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
