import { Block, Button } from "galio-framework";
import React from "react";
import { StyleSheet } from "react-native";
import GlobalStyle from "../GlobalStyles";
import ButtonTextBox from "./ButtonTextBox.Component";
import LabelledInput from "./LabelledInput.Component";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Alert } from "react-native";
import ApplicationService from "../services/ApplicationService";


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      LastName: "",
      FirstName: "",
      FatherName: "",
      Cell: "",
      Email: "",
      PassportNumber: "",
      ExpiryDate: "",
      _ExpiryDate: new Date(),
      LandLine: "",
      DateOfBirth:"",
      _DateOfBirth: new Date(),
      NationalityName: "",
      Address: "",
      date: "",
      mode: "date",
      show: false,
      dateIndex: 1,
    };
  }

  componentWillUnmount() {
    //this._unsubscribe();
  }
  componentDidMount() {
    //this._unsubscribe = this.props.navigation.addListener('focus', () => {    
        let {FirstName, LastName, FatherName, Cell,LandLine, PassportNumber, ExpiryDate, DateOfBirth, NationalityName,
        Address}=this.props;
        FirstName=FirstName?FirstName:"";
        LastName=LastName?LastName:"";
        FatherName=FatherName?FatherName:"";
        Cell=Cell?Cell:"";
        LandLine=LandLine?LandLine:"";
        PassportNumber=PassportNumber?PassportNumber:"";
        ExpiryDate=ExpiryDate?ExpiryDate:"";
        DateOfBirth=DateOfBirth?DateOfBirth:"";
        Address=Address?Address:"";
        this.setState({FirstName, LastName, FatherName, Cell,LandLine, PassportNumber, _ExpiryDate:new Date(ExpiryDate), _DateOfBirth:new Date(DateOfBirth), NationalityName,
             Address})
    //})

  }

  handleChange = (val, name) => {
    try{
      let profile=this.state;
      profile[name]=val;
      this.setState({...profile});
    }
    catch{}
  };
  updateGender = (val) => {};
  updateMaritalStatus = (val) => {};
  handleUpdateProfilePress = () => {
    Alert.alert("Profile Updated", "Profile update is irreversible Process. Are you sure you want to update?",[{text:"Yes",onPress:()=>{
      ApplicationService.UpdateProfile(this.state)
      .then(x=>{
        if(x.ResponseStatus) Alert.alert("Profile Updated", "Profile has been updated");
        else Alert.alert("Profile Update Failed", "Failed to update profile. Please try again later.");
      })
      .catch(err=>console.log(err));
    }}, {text:"No"}]);
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
        ExpiryDate: selectedDate,
        _ExpiryDate: selectedDate,
      });
    } else if (this.state.dateIndex == 2)
      this.setState({ DateOfBirth: selectedDate, _DateOfBirth: selectedDate });
  };

  render() {
    return (
      <Block>
        <Block style={GlobalStyle.block}>
          <LabelledInput
            label="First Name"
            value={this.state.FirstName}
            onChange={(text) => this.handleChange(text, "FirstName")}
          />
          <LabelledInput
            label="Last Name"
            value={this.state.LastName}
            onChange={(text) => this.handleChange(text, "LastName")}
          />
          <LabelledInput
            label="Father Name"
            value={this.state.FatherName}
            onChange={(text) => this.handleChange(text, "FatherName")}
          />
          <LabelledInput
            label="Email"
            value={this.state.Email}
            onChange={(text) => this.handleChange(text, "Email")}
            type={"email-address"}
          />
          <LabelledInput
            label="Passport Number"
            value={this.state.PassportNumber}
            onChange={(text) => this.handleChange(text, "passportNumber")}
          />
          <ButtonTextBox
            value={new Date(this.state.ExpiryDate).toDateString()}
            label={"Expiry Date"}
            onPress={() => this.showDatepicker(1)}
          />
          <LabelledInput
            label="LandLine"
            value={this.state.LandLine}
            onChange={(text) => this.handleChange(text, "LandLine")}
            type={"numeric"}
          />
          <LabelledInput
            label="Cell Number"
            value={this.state.Cell}
            onChange={(text) => this.handleChange(text, "Cell")}
            type={"numeric"}            
          />
          <ButtonTextBox
            value={this.state.DateOfBirth}
            label={"Date Of Birth"}
            onPress={() => this.showDatepicker(2)}
          />
          <LabelledInput
            label="Gender"
            value={this.state.GenderName}
            onChange={(text) => this.handleChange(text, "GenderName")}
          />
          <LabelledInput
            label="Nationality"
            value={this.state.NationalityName}
            onChange={(text) => this.handleChange(text, "NationalityName")}
          />
          <LabelledInput
            label="Address"
            value={this.state.Address}
            onChange={(text) => this.handleChange(text, "Address")}
          />
          <Button
            style={styles.btnUpdate}
            onPress={this.handleUpdateProfilePress}
          >
            Update
          </Button>
        </Block>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.dateIndex==1?this.state._ExpiryDate:this.state._DateOfBirth}
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
export default Profile;

const styles = StyleSheet.create({
  btnUpdate: {
    width: "100%",
    margin: 0,
  },
});
