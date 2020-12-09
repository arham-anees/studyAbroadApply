import React from "react";
import { ImageBackground, Image, StatusBar, Dimensions } from "react-native";
import { Block, Button,  Text,  theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import styles from "./SignIn.Styles";

import argonTheme from "../../../constants/Theme";
import Images from "../../../constants/Images";
import LabelledInput from "../../../components/LabelledInput.Component";
import { ScrollView } from "react-native";


import AuthService from '../../../services/AuthService';

class SignIn extends React.Component {

constructor(props){
  super(props);
  this.state={
    email:'',
    password:'',
    error:false,
    isSubmitted:false
  }
}
handleSignUpStudentPress=()=>this.props.navigation.navigate("SignUpAsStudent");
handleSignUpAssociatePress=()=>this.props.navigation.navigate("SignUpAsAssociate");
handlePasswordChange=(value)=>this.setState({error:false,password:value});
handleEmailChange=(value)=>this.setState({error:false,email:value});
handleSubmit=()=>{
  this.props.navigation.navigate("Home");
  return;
  this.setState({isSubmitted:true});
  if(this.state.email.length==0||this.state.password.length==0){
    this.setState({error:true, isSubmitted:false});
    return;
  }
  //call service
  AuthService.Login(this.state)
  .then(response=>{
    if(response==true){
    this.setState({isSubmitted:false});
    this.props.navigation.navigate("Home");
    }
    else{
    this.setState({isSubmitted:false, error:true});
    }
  })
  .catch(err=>{
    this.setState({isSubmitted:false, error:true});
  })
}
render=()=> (
    <Block style={styles.container}>
      <StatusBar />
        <ImageBackground
          source={Images.Onboarding}
          style={{ height}}
        >
          <ScrollView>
      <Block center style={styles.logoBox}>
        {/* <Image source={Images.LogoOnboarding} style={styles.logo} />
        <Image source={Images.Slogan} style={styles.logo} /> */}
        <Text style={styles.logoText}>Study Abroad Apply</Text>
        <Text style={styles.sloganText}>Apply to become ann associate</Text>
      </Block>
      <Block  space="between" style={styles.padded}>
        <Block  space="around" style={{ zIndex: 2 }}>
          <Block style={styles.title}>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <LabelledInput
                label="Email"
                iconname="person"
                iconfamily="Fontisto"
                onChange={this.handleEmailChange}
                value={this.state.email}
                error={this.state.emailError}
              />
              <LabelledInput
                label="Password"
                password
                iconname="key"
                iconfamily="Entypo"
                onChange={this.handlePasswordChange }
                value={this.state.password}
              />
            </Block>
            {
              this.state.error?<Text style={styles.error}>Incorrect email or password</Text>:null
            }
          </Block>
          <Block center style={styles.title}>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Button
                style={[styles.button, { marginBottom: 20 }, this.state.isSubmitted?{}:null]}
                onPress={this.handleSubmit}
                loading={this.state.isSubmitted?true:false}
                disabled={this.state.isSubmitted?true:false}
              >
                Sign In
              </Button>
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={this.handleSignUpStudentPress}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Sign Up As Student
              </Button>
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={this.handleSignUpAssociatePress}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Sign Up As Associate
              </Button>
            </Block>
          </Block>
        </Block>
      </Block></ScrollView>
        </ImageBackground>
    </Block>
  );
}

export default SignIn;
