import { theme } from "galio-framework";
import React from "react";
import { View } from "react-native";
import { Dimensions } from "react-native";
import { Picker, StyleSheet } from "react-native";
import DropDown from "./DropDown";

const countries = [
  { name: "Pakistan", value: 1 },
  { name: "Sri Lanka", value: 2 },
  { name: "South Africa", value: 3 },
  { name: "Bhutan", value: 4 },
  { name: "Afghanistan", value: 5 },
  { name: "Turkey", value: 6 },
];

export default function SelectCountry(props) {
  return <DropDown list={countries} label="Countries"/>
}
