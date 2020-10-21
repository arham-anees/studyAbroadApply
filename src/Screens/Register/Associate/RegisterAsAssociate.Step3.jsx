import React from "react";
import { Picker, Text, View } from "react-native";
import { Input } from "react-native-elements";
import Styles from "./RegisterAsAssociate.Style";

function RegisterAsAssociateStep3(props) {
  return (
    <View>
      <Text style={Styles.stepTitle}>RECRUITMENT DETAILS</Text>
      <View>
        <Text>In which countries did you recruit your students?</Text>
        <Input placeholder={"UK,Australia"} />
      </View>
      <View>
        <Text>
          Approximately how many students did you send abroad in last 12 months?
        </Text>
        <Picker>
          <Picker.Item label="1-25" value={1} />
          <Picker.Item label="26-50" value={1} />
          <Picker.Item label="51-99" value={2} />
          <Picker.Item label="100-199" value={3} />
          <Picker.Item label="200+" value={4} />
        </Picker>
      </View>
      <View>
        <Text>
          In Which Educational institutions did you recruit your student in last
          12 months? (Any one)
        </Text>
        <Input placeholder={"Any one..."} />
      </View>
      <View>
        <Text>
          Please provide an estimate of the number of students you will refer to
          studyabroadapply?
        </Text>
        <Picker>
          <Picker.Item label="50-99" value={1} />
          <Picker.Item label="100-199" value={2} />
          <Picker.Item label="200-199" value={3} />
          <Picker.Item label="200+" value={4} />
        </Picker>
      </View>
    </View>
  );
}

export default RegisterAsAssociateStep3;
