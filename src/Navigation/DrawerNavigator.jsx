import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/Home/Home";

let drawer = createDrawerNavigator();
const HomeHeader = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    navigationOptions: {
      headerMode: "screen",
    },
  }
);
function drawerRoutes() {
  return (
    <drawer.Navigator
      openByDefault={HomeScreen}
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
    >
      <drawer.Screen name="Home" component={HomeHeader} />
      <drawer.Screen name="Courses" component={HomeScreen} />
      <drawer.Screen name="My Applications" component={HomeScreen} />
    </drawer.Navigator>
  );
}

export default drawerRoutes;
