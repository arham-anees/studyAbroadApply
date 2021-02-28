import React from "react";
import { Dimensions } from "react-native";

import { CardStyleInterpolators,createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// screens
import Home from "../screens/Home";
import SignIn from "../screens/Auth/SignIn/SignIn";
import SignUpAsStudent from "../screens/Auth/SignUpAsStudent/SignUpAsStudent";
import SignUpAsAssociate from "../screens/Auth/SignUpAsAssociate/SignUpAsAssociate";
import ApplicationDetails from "../screens/Applications/ApplicationDetails";
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Header } from "../components";
import Applications from "../screens/Applications/Applications";

import SearchCourse from "../screens/Courses/SearchCourse/SearchCourse";
import SearchedCourses from "../screens/Courses/SearchCourse/SearchedCourses";
import Notifications from "../screens/Notifications/Notification";
import HeaderChild from "../components/HeaderChild";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ApplicationStack(props) {
  return (
    <Stack.Navigator headerMode="screen"  screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen
        name="Applications"
        component={Applications}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Applications"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="ApplicationDetails"
        component={ApplicationDetails}
        options={{
          cardStyle: { backgroundColor: "#F8F9FE" },
          header: ({ navigation, scene }) => (
            <HeaderChild
              title="Application Details"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function CourseStack(props) {
  return (
    <Stack.Navigator headerMode="screen"  screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen
        name="Courses"
        component={SearchCourse}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Search Courses"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="SearchedCourses"
        component={SearchedCourses}
        options={{
          header: ({ navigation, scene }) => (
            <HeaderChild
              title="Search Results"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}
function NotificationStack(props) {
  return (
    <Stack.Navigator headerMode="screen"  screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          header: ({ navigation, scene }) => (
            <HeaderChild
              title="Notifications"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen"  screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <HeaderChild
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen"  screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function AuthStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen" 
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUpAsStudent"
        component={SignUpAsStudent}
        options={{
         
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="SignUpAsAssociate"
        component={SignUpAsAssociate}
        options={{
         
          headerShown: false,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

export function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none"  screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AuthStack} />
    </Stack.Navigator>
  );
}

export default function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Auth"
     
      backBehavior="history"
      drawerType={Dimensions.get("screen").width >= 768 ? 'permanent' : 'back'}
      lazy
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Applications" component={ApplicationStack} />
      <Drawer.Screen name="Courses" component={CourseStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Notifications" component={NotificationStack} options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}/>
      <Drawer.Screen name="Auth" component={AuthStack} />
    </Drawer.Navigator>
  );
}
