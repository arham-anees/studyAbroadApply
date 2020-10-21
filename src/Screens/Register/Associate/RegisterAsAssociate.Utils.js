import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { Alert } from "react-native";

export function handleLoginPress(props) {
  props.navigation.navigate("SignIn");
}
export function handleSignUpPress(props) {
  props.navigation.push("Home");
}

export function pickImage() {
  let result = ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    Alert.alert(result.uri);
  }
}
