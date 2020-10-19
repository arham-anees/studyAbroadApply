import { StackRouter } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import StackRoutes from "./src/Navigation/StackNavigator";

export default function App() {
  return <StackRoutes />;
}
