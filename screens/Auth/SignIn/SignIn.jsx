import React from "react";
import { StatusBar } from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

import AuthToken from "../../../helper/Token";

import styles from "./SignIn.Styles";
import Loading from '../../../components/Loading';
import argonTheme from "../../../constants/Theme";
import LabelledInput from "../../../components/LabelledInput.Component";
import AuthService from "../../../services/AuthService";
import Background from "../../../components/Background";
import LocalStorage from "../../../helper/LocalStorage";
import { CommonActions, StackActions } from "@react-navigation/routers";
import { NavigationActions } from "@react-navigation/compat";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "faraz@mail.com",
      password: "123",
      error: false,
      isSubmitted: false,
      networkError:false
    };
    
  }
  componentDidMount(){
  }
  async CheckStatus() {

    var result =await LocalStorage.GetToken();
      // console.log(this.props.navigation);
      // console.log(result);
      try{if (result.length>100) {
        //this.props.navigation.push("Home");
      }
    }catch{}
  }
  handleSignUpStudentPress = () =>
    this.props.navigation.navigate("SignUpAsStudent");
  handleSignUpAssociatePress = () =>
    this.props.navigation.navigate("SignUpAsAssociate");
  handlePasswordChange = (value) =>
    this.setState({ error: false,networkError:false, password: value });
  handleUsernameChange = (value) => this.setState({ error: false,networkError:false, username: value });
  handleSubmit = () => {
    if (this.state.username.length == 0 || this.state.password.length == 0) {
      this.setState({ error: true, isSubmitted: false });
      return;
    }

    this.setState({ isSubmitted: true });

    //call service
    AuthService.Login(this.state)
      .then((response) => {
        console.log("response received");
        if(response==null){
          this.setState({ isSubmitted: false, error: true });
        }
        else{
          this.setState({ isSubmitted: false });
          AuthToken.SetAuthToken(response);
          this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
          this.props.navigation.navigate("Home");
          //this.props.navigation.dispatch(state=>console.log(state));
          // this.props.navigation.dispatch(state=>{
          //   // const routes =
          //   // console.log(routes)
          //   return CommonActions.reset({
          //     ...state,
          //     routeNames:["Home"],
          //     routes:[{name:"Home"}],
          //     index: 0,
          //   });
          // }
          // );
          //this.props.navigation.push("Home");
          //this.props.navigation.navigate("Home");
          
        }
      })
      .catch((err) => {
        console.log("Error: "+err);
        this.setState({ isSubmitted: false, networkError: true });
      })
  };
  render (){ 
    this.CheckStatus();
    
    return(
    <Block style={styles.container}>
      <Background fullscreen>
        <StatusBar />
        <Block center style={styles.logoBox}>
          <Text style={styles.logoText}>Study Abroad Apply</Text>
        </Block>
        <Block space="between" style={styles.padded}>
          <LabelledInput
            label="Username"
            onChange={this.handleUsernameChange}
            value={this.state.username}
          required
          error={this.state.emailError}
          type={"email-address"}
          />
          <LabelledInput
            label="Password"
            password
            onChange={this.handlePasswordChange}
            value={this.state.password}
          required
          />

          {this.state.error ? (
            <Text style={styles.error}>Incorrect email or password</Text>
          ) : null}
          {this.state.networkError ? (
            <Text style={styles.error}>Request failed. Please try again later</Text>
          ) : null}
          <Button
            style={[
              styles.button,
              {marginTop:15},
              this.state.isSubmitted ? {} : null,
            ]}
            onPress={this.handleSubmit}
            loading={this.state.isSubmitted}
            disabled={this.state.isSubmitted}
          >
            Sign In
          </Button>
 
          <Button
            style={styles.button}
            color={argonTheme.COLORS.SECONDARY}
            onPress={this.handleSignUpStudentPress}
            textStyle={{ color: argonTheme.COLORS.BLACK }}
          >
            Sign Up As Student
          </Button>
        </Block>
      </Background>
    </Block>
  );}
}

export default SignIn;
