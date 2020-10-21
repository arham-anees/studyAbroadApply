import React from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import Styles from "./RegisterAsAssociate.Style";

function RegisterAsAssociateStep2(props) {
  return (
    <View>
      <Text style={Styles.stepTitle}>CONTACT INFORMATION</Text>
      <Input
        leftIcon={{ type: "material", name: "person" }}
        placeholder={"First Name"}
      />
      <Input
        leftIcon={{ type: "material", name: "person" }}
        placeholder={"Last Name"}
      />
      <Input
        leftIcon={{ type: "material", name: "room" }}
        placeholder={"Office Address"}
      />
      <Input
        leftIcon={{ type: "material", name: "room" }}
        placeholder={"State/City/Province"}
      />
      <Input
        leftIcon={{ type: "material", name: "room" }}
        placeholder={"Country"}
      />
      <Input
        leftIcon={{ type: "material", name: "phone" }}
        placeholder={"Landline"}
      />
      <Input
        leftIcon={{ type: "material", name: "phone" }}
        placeholder={"Cell Phone"}
      />
      <Input
        leftIcon={{ type: "material", name: "phone" }}
        placeholder={"Skype ID"}
      />
      <Input
        leftIcon={{ type: "material", name: "phone" }}
        placeholder={"WhatsApp ID"}
      />
    </View>
  );
}

export default RegisterAsAssociateStep2;
