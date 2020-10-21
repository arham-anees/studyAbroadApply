import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/Home/Home";
import ApplicationBar from "../Components/Appbar";
import SignInScreen from "../Screens/SignIn/SignIn";
import LeftMenuProfile from "../Components/LeftMenuPorfile";

let drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <LeftMenuProfile />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        onPress={() => {
          props.navigation.navigate("SignIn");
        }}
      />
    </DrawerContentScrollView>
  );
}

function drawerRoutes(props) {
  return (
    <drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
      drawerType={"slide"}
    >
      <drawer.Screen name="HomeScreen" component={HomeScreen} />
      <drawer.Screen name="Courses" component={HomeScreen} />
      <drawer.Screen name="My Applications" component={HomeScreen} />
    </drawer.Navigator>
  );
}

export default drawerRoutes;
