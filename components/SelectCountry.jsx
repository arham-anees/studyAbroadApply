import { theme } from "galio-framework";
import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { Dimensions } from "react-native";
import { Picker, StyleSheet } from "react-native";
import SearchService from "../services/SearchService";
import DropDown from "./DropDown";

// const countries = [
//   { name: "Pakistan", value: 1 },
//   { name: "Sri Lanka", value: 2 },
//   { name: "South Africa", value: 3 },
//   { name: "Bhutan", value: 4 },
//   { name: "Afghanistan", value: 5 },
//   { name: "Turkey", value: 6 },
// ];

export default class SelectCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [{ name: "Select Country", value: 0 }],
    };
  }

  componentDidMount() {
    SearchService.GetCountries()
      .then((x) => {
        this.setState({ countries: this._mapCountries(x) });
        this.props.onChange(this.state.countries[0].value);
      })
      .then((err) => {
        // Alert.alert(
        //   "Failed to load countries list from. Please try again later"
        // );
      });
  }
  _mapCountries = (countries) => {
    try {
      let mappedCountries = [];
      if (this.props.value == 1)
        mappedCountries.push({ value: 0, name: "Select Country" });
      countries.forEach((x) => {
        mappedCountries.push({
          value: x.Key,
          name: x.Value,
        });
      });
      return mappedCountries;
    } catch {}
    return [];
  };
  render() {
    return (
      <DropDown list={this.state.countries} label="Countries" {...this.props} />
    );
  }
}
