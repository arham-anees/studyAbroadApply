import { StackActions } from "@react-navigation/native";

export function handleLoginPress(props) {
  // props.navigation.dispatch(StackActions.popToTop());
  props.navigation.replace("Home");
}
export function handleRegisterStudent(props) {
  props.navigation.navigate("RegisterAsStudent");
}
export function handleRegisterAssociate(props) {
  props.navigation.navigate("RegisterAsAssociate");
}
export function handleContinueGoogle(props) {}
export function handleEmailChange(text) {}
export function handleEmailBlur(e) {}
