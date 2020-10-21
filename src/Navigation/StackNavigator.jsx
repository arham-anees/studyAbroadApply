import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterAsStudentScreen from "../Screens/Register/Student/RegisterAsStudent";
import RegisterAsAssociateScreen from "../Screens/Register/Associate/RegisterAsAssociate";
import drawerRoutes from "./DrawerNavigator";
import LoadingScreen from "../Screens/LoadingScreen";
import SignInScreen from "../Screens/SignIn/SignIn";
import HomeScreen from "../Screens/Home/Home";

let Stack = createStackNavigator();

function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen
          name="RegisterAsStudent"
          component={RegisterAsStudentScreen}
        />
        <Stack.Screen
          name="RegisterAsAssociate"
          component={RegisterAsAssociateScreen}
        />
        <Stack.Screen name="Home" component={drawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoutes;
