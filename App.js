import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "react-native-paper";
import StackRoutes from "./src/Navigation/StackNavigator";

export default function App() {
  return <StackRoutes />;
}
