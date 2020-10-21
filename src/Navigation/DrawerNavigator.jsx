import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomeScreen from "../Screens/Home/Home";
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
          props.navigation.replace("SignIn");
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
