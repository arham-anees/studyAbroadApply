import { Block, Button } from "galio-framework";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import DropDown from "../../../components/DropDown";
import LabelledInput from "../../../components/LabelledInput.Component";
import GlobalStyle from "../../../GlobalStyles";
import ButtonTextBox from '../../../components/ButtonTextBox.Component';
import DateTimePicker from "@react-native-community/datetimepicker";
import ApplicationService from "../../../services/ApplicationService";


const MaritalStatuses = [
  { name: "Single", value: 1 },
  { name: "Engaged", value: 2 },
  { name: "Married", value: 3 },
]; 

const Genders = [
  { name: "Male", value: 1 },
  { name: "Female", value: 2 },
]; 

class ProfileTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      fatherName: "",
      phone: "",
      email: "",
      passportNumber: "",
      passportExpiryDate: "",
      _passportExpiryDate:new Date(),
      landline: "",
      dateOfBirth: "",
      _dateOfBirth:new Date(),
      gender: "",
      nationality: "",
      maritalStatus: 1,
      address: "",
      date: "",
      mode: "date",
      show: false,
      dateIndex: 1,
    };
  }

  componentDidMount() {
    this.setState({ profileId: this.props.profileId });
    ApplicationService.GetProfileData(this.props.profileId)
      .then((x) => {
        console.log("profile: ",x);
        this.setState({
          studentName: x.FullName,
          fatherName: x.FatherName,
          email: x.Email,
          phone: x.Cell,
          passportNumber: "",
          passportExpiryDate: x.ExpiryDate,
          _passportExpiryDate:new Date(),
          landline: x.LandLine,
          dateOfBirth: x.DateOfBirth,
          gender: x.GenderName,
          nationality: x.NationalityName,
          maritalStatus: x.MartialStatusName,
          address: x.Address,
        })
      })
      .then((err) => console.log(err));
  }


  handleChange = (val, name) => {};
  updateGender = (val) => {};
  updateMaritalStatus = (val) => {};
  handleUpdateProfilePress = () => {
    Alert.alert("Profile Updated", "Profile has been updated");
  };

  showMode = (currentMode) => {
    this.setState({ show: true, mode: currentMode });
  };

  showDatepicker = (newDateIndex) => {
    this.setState({ mode: "date", dateIndex: newDateIndex, show:true });
  };
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setState({ show: Platform.OS === "ios" });
    if (this.state.dateIndex == 1) {
      this.setState({
        passportExpiryDate: selectedDate,
        _passportExpiryDate: selectedDate,
      });
    } else if (this.state.dateIndex == 2)
      this.setState({ dateOfBirth: selectedDate, _dateOfBirth: selectedDate });
  };

  render() {
    return (
      <Block>
        <Block style={GlobalStyle.block}>
          <LabelledInput
            label="Student Name"
            value={this.state.studentName}
            iconname="person"
            iconfamily="Fontisto"
            disabled
            onChange={(text) => this.handleChange(text, "studentName")}
          />
          <LabelledInput
            label="Father Name"
            iconname="person"
            iconfamily="Fontisto"
            value={this.state.fatherName}
            disabled
            onChange={(text) => this.handleChange(text, "fatherName")}
          />
          <LabelledInput
            label="Email"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.email}
            disabled
            onChange={(text) => this.handleChange(text, "email")}
          />
          <LabelledInput
            label="Passport Number"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.passportNumber}
            disabled
            onChange={(text) => this.handleChange(text, "passportNumber")}
          />
          {/* <LabelledInput
                label="Expiry Date"
                iconname="key"
                iconfamily="Entypo"
                value={passportExpiryDate}
                onChange={(text)=>handleChange(text,'passportExpiryDate')}
              /> */}
          <ButtonTextBox
            value={new Date(this.state.passportExpiryDate).toDateString()}
            label={"Expiry Date"}
            onPress={() => this.showDatepicker(1)}
          />
          <LabelledInput
            label="Landline"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.landline}
            disabled
            onChange={(text) => this.handleChange(text, "landline")}
          />
          <LabelledInput
            label="Cell Number"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.phone}
            disabled
            onChange={(text) => this.handleChange(text, "phone")}
          />
          <ButtonTextBox
            value={this.state.dateOfBirth}
            label={"Date Of Birth"}
            onPress={() => this.showDatepicker(2)}
          />
          <LabelledInput
            label="Gender"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.phone}
            disabled
            onChange={(text) => this.handleChange(text, "phone")}
          />
          {/* <ButtonTextBox
            value={this.state.gender}
            label={"Gender"}
            onPress={() => this.showDatepicker(2)}
          /> */}
          {/* <DropDown
            list={Genders}
            label={"Gender"}
            selectedValue={this.gender}
            onChange={this.updateGender}
          /> */}
          <LabelledInput
            label="Nationality"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.nationality}
            disabled
            onChange={(text) => this.handleChange(text, "nationality")}
          />
          {/* <DropDown
            list={MaritalStatuses}
            label={"Marital Status"}
            selectedValue={this.maritalStatus}
            onChange={this.updateMaritalStatus}
          /> */}
          <LabelledInput
            label="Address"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.address}
            disabled
            onChange={(text) => this.handleChange(text, "address")}
          />
          <Button
            style={styles.btnUpdate}
            onPress={this.handleUpdateProfilePress}
            disable
            color={"#a0a0a0"}
          >
            Update
          </Button>
        </Block>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.dateIndex==1?this.state._passportExpiryDate:this.state._dateOfBirth}
            mode={this.state.mode}
            is24Hour={true}
            display="default"
            onChange={this.onChange}
          />
        )}
      </Block>
    );
  }
}
export default ProfileTab;

const styles = StyleSheet.create({
  btnUpdate: {
    width:"100%",
    margin:0
  },
});
