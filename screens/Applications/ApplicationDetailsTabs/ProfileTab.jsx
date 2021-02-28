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
      FullName: "",
      LastName:"",
      FirstName:"",
      FatherName: "",
      Cell: "",
      Email: "",
      passportNumber: "",
      ExpiryDate: "",
      _ExpiryDate:new Date(),
      LandLine: "",
      DateOfBirth: "",
      _DateOfBirth:new Date(),
      GenderName: "",
      NationalityName: "",
      MartialStatusName: 1,
      Address: "",
      date: "",
      mode: "date",
      show: false,
      dateIndex: 1,
    };
  }

  componentDidMount() {

    this.setState({ ProfileID : this.props.ProfileID  });
      ApplicationService.GetCourse(this.props.applicationId)
      .then((y) => {
        y=y.MyCourse;
        this.setState({
          ProfileID: y.ProfileID,
        });
        ApplicationService.GetProfileData(y.ProfileID )
        .then((x) => {
          this.setState({
            FullName: x.FullName,
            FirstName:x.FirstName,
            LastName:x.LastName,
            FatherName: x.FatherName,
            Email: x.Email,
            Cell: x.Cell,
            passportNumber: "",
            ExpiryDate: x.ExpiryDate,
            _ExpiryDate:new Date(x.ExpiryDate),
            LandLine: x.LandLine,
            DateOfBirth: x.DateOfBirth,
            GenderName: x.GenderName,
            NationalityName: x.NationalityName,
            MartialStatusName: x.MartialStatusName,
            Address: x.Address,
          })
        })
        .then((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    
   
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
    Alert.alert("Profile Updated", "Profile has been updated",[{text:"Yes",onPress:()=>{
      console.log("state",this.state);
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
            iconname="person"
            iconfamily="Fontisto"
            onChange={(text) => this.handleChange(text, "FirstName")}
          />
          <LabelledInput
            label="Last Name"
            value={this.state.LastName}
            iconname="person"
            iconfamily="Fontisto"
            onChange={(text) => this.handleChange(text, "LastName")}
          />
          <LabelledInput
            label="Father Name"
            iconname="person"
            iconfamily="Fontisto"
            value={this.state.FatherName}
            onChange={(text) => this.handleChange(text, "FatherName")}
          />
          <LabelledInput
            label="Email"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.Email}
            onChange={(text) => this.handleChange(text, "Email")}
          />
          <LabelledInput
            label="Passport Number"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.passportNumber}
            onChange={(text) => this.handleChange(text, "passportNumber")}
          />
          <ButtonTextBox
            value={new Date(this.state.ExpiryDate).toDateString()}
            label={"Expiry Date"}
            onPress={() => this.showDatepicker(1)}
          />
          <LabelledInput
            label="LandLine"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.LandLine}
            onChange={(text) => this.handleChange(text, "LandLine")}
          />
          <LabelledInput
            label="Cell Number"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.Cell}
            onChange={(text) => this.handleChange(text, "Cell")}
          />
          <ButtonTextBox
            value={this.state.DateOfBirth}
            label={"Date Of Birth"}
            onPress={() => this.showDatepicker(2)}
          />
          <LabelledInput
            label="Gender"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.GenderName}
            onChange={(text) => this.handleChange(text, "GenderName")}
          />
          <LabelledInput
            label="Nationality"
            iconname="key"
            iconfamily="Entypo"
            value={this.state.NationalityName}
            onChange={(text) => this.handleChange(text, "NationalityName")}
          />
          <LabelledInput
            label="Address"
            iconname="key"
            iconfamily="Entypo"
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
export default ProfileTab;

const styles = StyleSheet.create({
  btnUpdate: {
    width:"100%",
    margin:0
  },
});
