import React from "react";
import { Picker, Text, View } from "react-native";
import { Input } from "react-native-elements";
import EmailTextInput from "../../../Components/EmailTextInput";
import Styles from "./RegisterAsAssociate.Style";
import Icon from "react-native-vector-icons/FontAwesome5";

function _GetPickerItems() {
  var jsx;
  for (let i = 1990; i < 2020 - 1990; i++) {
    let item = { value: parseInt(1990 + i), label: "test" };

    jsx += <Picker.Item key={i} label={item.label} value={item.value} />;
  }
  return jsx;
  return <React.Fragment>{jsx}</React.Fragment>;
}
function RegisterAsAssociateStep1(props) {
  return (
    <View>
      <Text style={Styles.stepTitle}>COMPANY INFORMATION</Text>
      <EmailTextInput />
      <Input
        placeholder={"Company Name"}
        leftIcon={<Icon name="building" style={{ fontSize: 20 }} />}
      />
      <Input placeholder={"Website"} leftIcon={{ name: "link" }} />
      <Picker style={{ borderBottomWidth: 0.5 }}>
        {/* {_GetPickerItems()} */}
        <Picker.Item label="1990" value={1990} />
        <Picker.Item label="1991" value={1991} />
        <Picker.Item label="1992" value={1992} />
        <Picker.Item label="1993" value={1993} />
        <Picker.Item label="1994" value={1994} />
        <Picker.Item label="1995" value={1995} />
        <Picker.Item label="1996" value={1996} />
        <Picker.Item label="1997" value={1997} />
        <Picker.Item label="1998" value={1998} />
        <Picker.Item label="1999" value={1999} />
        <Picker.Item label="2000" value={2000} />
        <Picker.Item label="2001" value={2001} />
        <Picker.Item label="2002" value={2002} />
        <Picker.Item label="2003" value={2003} />
        <Picker.Item label="2004" value={2004} />
        <Picker.Item label="2005" value={2005} />
        <Picker.Item label="2006" value={2006} />
        <Picker.Item label="2007" value={2007} />
        <Picker.Item label="2008" value={2008} />
        <Picker.Item label="2009" value={2009} />
        <Picker.Item label="2010" value={2010} />
        <Picker.Item label="2011" value={2011} />
        <Picker.Item label="2012" value={2012} />
        <Picker.Item label="2013" value={2013} />
        <Picker.Item label="2014" value={2014} />
        <Picker.Item label="2015" value={2015} />
        <Picker.Item label="2016" value={2016} />
        <Picker.Item label="2017" value={2017} />
        <Picker.Item label="2018" value={2018} />
        <Picker.Item label="2019" value={2019} />
        <Picker.Item label="2020" value={2020} />
      </Picker>
    </View>
  );
}

export default RegisterAsAssociateStep1;
