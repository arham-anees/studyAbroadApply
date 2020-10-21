// import { NavigationActions } from "react-navigation";

// export const resetLogin = (navigation) =>
//   navigation.dispatch(
//     NavigationActions.reset({
//       index: 0,
//       actions: [NavigationActions.navigate({ routeName: "Home" })],
//     })
//   );
// export const resetLogout = (navigation) =>
//   navigation.dispatch(
//     NavigationActions.reset({
//       index: 0,
//       actions: [NavigationActions.navigate({ routeName: "SignIn" })],
//     })
//   );

export function IsEmail(email) {
  if (
    email.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    return true;
  }
  return false;
}
