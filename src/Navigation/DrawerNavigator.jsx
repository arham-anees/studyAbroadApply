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

let drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  console.log(props);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        onPress={() => props.navigation.navigate("SignIn")}
      />
    </DrawerContentScrollView>
  );
}

function drawerRoutes() {
  return (
    <drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <drawer.Screen name="Home" component={HomeScreen} />
      <drawer.Screen name="Courses" component={HomeScreen} />
      <drawer.Screen name="My Applications" component={HomeScreen} />
    </drawer.Navigator>
  );
}

export default drawerRoutes;
