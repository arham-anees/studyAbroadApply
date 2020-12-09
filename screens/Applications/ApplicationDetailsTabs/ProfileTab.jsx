import { Block, Text, Button, theme } from "galio-framework";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Touchable } from "react-native";
import { StyleSheet, View } from "react-native";
import { Icon, Input } from "../../../components";
import DropDown from "../../../components/DropDown";
import LabelledInput from "../../../components/LabelledInput.Component";
import { argonTheme } from "../../../constants";
import GlobalStyle from "../../../GlobalStyles";
import ButtonTextBox from '../../../components/ButtonTextBox.Component';
import DateTimePicker from "@react-native-community/datetimepicker";


const MaritalStatuses = [
  { name: "Single", value: 1 },
  { name: "Engaged", value: 2 },
  { name: "Married", value: 3 },
]; 

const Genders = [
  { name: "Male", value: 1 },
  { name: "Female", value: 2 },
]; 

function ProfileTab(props) {
  
  const [date, setDate] = useState(Date.now());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateIndex, setDateIndex]=useState(1);
  
  const {studentName, fatherName, phone, email,passportNumber
    ,passportExpiryDate, landline, dateOfBirth, gender, nationality,
  maritalStatus,address}=props.application;
const {handleChange, updateGender, updateMaritalStatus}=props;
  
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = (newDateIndex) => {
    showMode("date");
    setDateIndex(newDateIndex);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    if(dateIndex==1) handleChange(selectedDate,'passportExpiryDate');
    else if(dateIndex==2) handleChange(selectedDate,'dateOfBirth');
  };

  
  return (
    <View>
      <Block>
        <Block style={{ paddingHorizontal:GlobalStyle.SIZES.PageNormalPadding}}>
          <Block style={GlobalStyle.block}>
              <LabelledInput 
              label="Student Name"
              value={studentName}
                iconname="person"
                iconfamily="Fontisto"
                onChange={(text)=>handleChange(text,'studentName')}
              />
              <LabelledInput
                label="Father Name"
                iconname="person"
                iconfamily="Fontisto"
                value={fatherName}
                onChange={(text)=>handleChange(text,'fatherName')}
              />
              <LabelledInput
                label="Email"
                iconname="key"
                iconfamily="Entypo"
                value={email}
                onChange={(text)=>handleChange(text,'email')}
              />
              <LabelledInput
                label="Passport Number"
                iconname="key"
                iconfamily="Entypo"
                value={passportNumber}
                onChange={(text)=>handleChange(text,'passportNumber')}
              />
              {/* <LabelledInput
                label="Expiry Date"
                iconname="key"
                iconfamily="Entypo"
                value={passportExpiryDate}
                onChange={(text)=>handleChange(text,'passportExpiryDate')}
              /> */}
              <ButtonTextBox value={new Date(passportExpiryDate).toDateString()} 
              label={"Expiry Date"} onPress={()=>showDatepicker(1)}/>
              <LabelledInput
                label="Landline"
                iconname="key"
                iconfamily="Entypo"
                value={landline}
                onChange={(text)=>handleChange(text,'landline')}
              />
              <LabelledInput
                label="Cell Number"
                iconname="key"
                iconfamily="Entypo"
                value={phone}
                onChange={(text)=>handleChange(text,'phone')}
              />
              <ButtonTextBox value={new Date(dateOfBirth).toDateString()} 
              label={"Date Of Birth"} onPress={()=>showDatepicker(2)}/>
              <DropDown list={Genders} label={"Gender"} selectedValue={gender}
              onChange={updateGender}/>
              <LabelledInput
                label="Nationality"
                iconname="key"
                iconfamily="Entypo"
                value={nationality}
                onChange={(text)=>handleChange(text,'nationality')}
              />
              <DropDown list={MaritalStatuses} label={"Marital Status"} selectedValue={maritalStatus}
              onChange={updateMaritalStatus}/>
              <LabelledInput
                label="Address"
                iconname="key"
                iconfamily="Entypo"
                value={address}
                onChange={(text)=>handleChange(text,'address')}
              />
              <Button style={styles.btnUpdate}>Update</Button>
            </Block>
            </Block>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
      </Block>
    </View>
  );
}
export default ProfileTab;

const styles = StyleSheet.create({
  btnUpdate: {
    marginTop:10
  },
});
