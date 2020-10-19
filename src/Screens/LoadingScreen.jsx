import React, { useEffect } from "react";
import { Alert, Text, View } from "react-native";

export default function LoadingScreen(props) {
  useEffect(() => {
    //document.title = `You clicked 2 times`;
    setTimeout(() => {
      props.navigation.navigate("SignIn");
    }, 1000);
  });
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Loading...</Text>
    </View>
  );
}
