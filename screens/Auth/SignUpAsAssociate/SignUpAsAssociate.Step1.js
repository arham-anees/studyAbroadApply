import { Block, Text, theme } from "galio-framework";
import React from "react";
import { View } from "react-native";
import LabelledInput from "../../../components/LabelledInput.Component";


import DropDown from "../../../components/DropDown";
import GlobalStyle from "../../../GlobalStyles";
function getYears(){
  let years=[];
  for (let year = 1990; year <=new Date().getFullYear(); year++) {
    years.push({name:year.toString(), value:year.toString()})    
  }
  return years;
}
export default function Step1({
  email,
  companyName,
  companyWebsite,
  yearEstablished,
  handleCompanyNameChange,
  handleEmailChange,
  handleCompanyWebsiteChange,
  handleYearEstablishedChange,
}) {
  return (
    <View>
      <Text center style={{ color: "white", fontSize:GlobalStyle.SIZES.HEADING5 }}>
        Company Information
      </Text>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <LabelledInput
          label="Email"
          value={email}
          iconname="person"
          iconfamily="Fontisto"
          onChange={handleEmailChange}
          required
        />
        <LabelledInput
          label="Company Name"
          value={companyName}
          iconname="person"
          iconfamily="Fontisto"
          onChange={handleCompanyNameChange}
          required
        />
        <LabelledInput
          label="Website"
          value={companyWebsite}
          iconname="person"
          iconfamily="Fontisto"
          onChange={handleCompanyWebsiteChange}
          required
        />
        <Block>
          <DropDown
            list={getYears()}
            label={"Established Year"}
            onChange={handleYearEstablishedChange}
            selectedValue={yearEstablished}
          />
        </Block>
      </Block>
    </View>
  );
}
