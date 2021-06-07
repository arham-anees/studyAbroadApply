import { Block, Button } from "galio-framework";
import React from "react";
import { Alert, Keyboard, StyleSheet, View } from "react-native";
import DropDown from "../../../components/DropDown";
import LabelledInput from "../../../components/LabelledInput.Component";
import GlobalStyle from "../../../GlobalStyles";
import ButtonTextBox from "../../../components/ButtonTextBox.Component";
import DateTimePicker from "@react-native-community/datetimepicker";
import ApplicationService from "../../../services/ApplicationService";
import Loading from "../../../components/Loading";
import TextCustom from "../../../components/TextCustom";
import { RadioButton } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

class ProfileTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      LastName: "",
      FirstName: "",
      FatherName: "",
      Cell: "",
      Email: "",
      Password: "",
      ExpiryDate: new Date(),
      _ExpiryDate: new Date(),
      LandLine: "",
      DateOfBirth: new Date(),
      _DateOfBirth: new Date(),
      GenderID: 1,
      NationalityId: "",
      MartialStatusID: 0,
      Address: "",
      date: "",
      mode: "date",
      show: false,
      dateIndex: 1,
      NationalityList: [],
      loading: true,
      loadedOnce: false,
      loadingFailed: false,
      requiredShow: false, //to show red border for required fields
      MartialStatus: [
        { name: "Single", value: 0 },
        { name: "Married", value: 1 },
      ],
    };
  }

  componentDidMount() {
    this.setState({ ProfileID: this.props.ProfileID });
    ApplicationService.GetNationalityList()
      .then((x) => {
        try {
          //console.log(x);
          var list = [];
          x.forEach((item) => {
            list.push({ name: item.CountryName, value: item.CountryID });
          });
          this.setState({ NationalityList: list });
          if (this.props.ProfileID == -1) {
            this.setState({ loading: false });
          }
        } catch {}
      })
      .catch((err) => {
        this.setState({ loading: false, loadingFailed: true });
      });
    ApplicationService.GetCourse(this.props.applicationId)
      .then((y) => {
        y = y.MyCourse;
        this.setState({
          ProfileID: y.ProfileID,
        });
        ApplicationService.GetProfileData(y.ProfileID)
          .then((x) => {
            this.setState({
              FullName: x.FullName,
              FirstName: x.FirstName,
              LastName: x.LastName,
              FatherName: x.FatherName,
              Email: x.Email,
              Cell: x.Cell,
              Password: x.Password,
              ExpiryDate: x.ExpiryDate,
              _ExpiryDate: x.ExpiryDate.trim() ? new Date(x.ExpiryDate) : null,
              LandLine: x.LandLine,
              DateOfBirth: x.DateOfBirth,
              _DateOfBirth: x.DateOfBirth.trim()
                ? new Date(x.DateOfBirth)
                : null,
              GenderID: x.GenderName == "Male" ? 1 : 0,
              NationalityID: x.NationalityID,
              MartialStatusID: x.MartialStatusID,
              Address: x.Address,
              loading: false,
              loadedOnce: true,
              loadingFailed: false,
            });
          })
          .catch((err) => {
            this.setState({
              loading: false,
              loadedOnce: false,
              loadingFailed: true,
            });
            //console.log(err);
          });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          loadedOnce: false,
          loadingFailed: true,
        });
        //console.log(err);
      });
  }

  handleChange = (val, name) => {
    try {
      let profile = this.state;
      profile[name] = val;
      this.setState({ ...profile });
    } catch {}
  };
  updateMaritalStatus = (val) => {};

  showMode = (currentMode) => {
    this.setState({ show: true, mode: currentMode });
  };

  showDatePicker = (newDateIndex) => {
    this.setState({ mode: "date", dateIndex: newDateIndex, show: true });
  };
  onChange = (event, selectedDate) => {
    //const currentDate = selectedDate || date;
    this.setState({ show: Platform.OS === "ios" });
    if (this.state.dateIndex == 1) {
      if (selectedDate <= Date.now()) {
        Alert.alert("Expiry date cannot be older dates");
      } else {
        this.setState({
          ExpiryDate: selectedDate,
          _ExpiryDate: selectedDate,
        });
      }
    } else if (this.state.dateIndex == 2) {
      if (selectedDate >= Date.now()) {
        Alert.alert("Expiry date cannot be future dates");
      } else {
        this.setState({
          DateOfBirth: selectedDate,
          _DateOfBirth: selectedDate,
        });
      }
    }
  };
  submit = () => {
    try {
      Keyboard.dismiss();
    } catch {}
    const state = this.state;
    if (
      state.FirstName.length == 0 ||
      state.LastName.length == 0 ||
      state.FatherName.length == 0 ||
      state.Email.length == 0 ||
      state.Password.length == 0 ||
      state.Cell.length == 0 ||
      state.Address.length == 0 ||
      state._ExpiryDate == null ||
      state._DateOfBirth == null
    ) {
      this.setState({ requiredShow: true });
    } else {
      this.props.handleUpdateProfilePress({ ...this.state });
    }
  };
  getDateValue = () => {
    let date =
      this.state.dateIndex == 1
        ? this.state._ExpiryDate
        : this.state._DateOfBirth;
    return date ? date : new Date();
  };

  render() {
    return (
      <Block>
        <Loading isActive={this.state.loading && !this.state.loadedOnce} />
        <Block style={GlobalStyle.block}>
          {this.state.loadingFailed ? (
            <TextCustom>Failed to load profile data</TextCustom>
          ) : (
            <>
              <LabelledInput
                label="First Name"
                required
                value={this.state.FirstName}
                onChange={(text) => this.handleChange(text, "FirstName")}
                error={
                  this.state.requiredShow && this.state.FirstName.length == 0
                }
              />
              <LabelledInput
                label="Last Name"
                required
                value={this.state.LastName}
                onChange={(text) => this.handleChange(text, "LastName")}
                error={
                  this.state.requiredShow && this.state.LastName.length == 0
                }
              />
              <LabelledInput
                label="Father Name"
                required
                value={this.state.FatherName}
                onChange={(text) => this.handleChange(text, "FatherName")}
                error={
                  this.state.requiredShow && this.state.FatherName.length == 0
                }
              />
              <LabelledInput
                label="Email"
                required
                value={this.state.Email}
                onChange={(text) => this.handleChange(text, "Email")}
                type={"email-address"}
                disabled={this.props.ProfileID != -1}
                error={this.state.requiredShow && this.state.Email.length == 0}
              />
              <LabelledInput
                label="Passport Number"
                required
                value={this.state.Password}
                onChange={(text) => this.handleChange(text, "Password")}
                error={
                  this.state.requiredShow && this.state.Password.length == 0
                }
              />
              <ButtonTextBox
                value={new Date(this.state.ExpiryDate).toDateString()}
                label={"Expiry Date*"}
                onPress={() => this.showDatePicker(1)}
                error={
                  this.state._ExpiryDate == null && this.state.requiredShow
                }
              />
              <LabelledInput
                label="Mobile Number"
                required
                value={this.state.Cell}
                onChange={(text) => this.handleChange(text, "Cell")}
                type={"numeric"}
                error={this.state.requiredShow && this.state.Cell.length == 0}
              />
              <ButtonTextBox
                value={new Date(this.state.DateOfBirth).toDateString()}
                label={"Date Of Birth*"}
                onPress={() => this.showDatePicker(2)}
                error={
                  this.state._DateOfBirth == null && this.state.requiredShow
                }
              />
              <Block>
                <TextCustom>Gender*</TextCustom>
                <RadioButton.Group
                  onValueChange={(value) =>
                    this.handleChange(value, "GenderID")
                  }
                  value={this.state.GenderID}
                >
                  <RadioButton.Item
                    label="Male"
                    value={1}
                    color={GlobalStyle.color.textLight}
                    labelStyle={{ color: GlobalStyle.color.textLight }}
                    uncheckedColor={GlobalStyle.color.textLight}
                  />
                  <RadioButton.Item
                    label="Female"
                    value={0}
                    color={GlobalStyle.color.textLight}
                    uncheckedColor={GlobalStyle.color.textLight}
                    labelStyle={{ color: GlobalStyle.color.textLight }}
                  />
                </RadioButton.Group>
              </Block>
              <DropDown
                list={this.state.NationalityList}
                label="Nationality *"
                onChange={(val) => {
                  this.setState({ NationalityId: val });
                }}
                selectedValue={this.state.NationalityID}
                disabled={this.state.NationalityList.length == 1}
              />
              <DropDown
                list={this.state.MartialStatus}
                label="Marital Status*"
                onChange={(val) => {
                  this.setState({ MartialStatusID: val });
                }}
                selectedValue={this.state.MartialStatusID}
                disabled={this.state.MartialStatus.length == 1}
              />
              <LabelledInput
                label="Address"
                value={this.state.Address}
                onChange={(text) => this.handleChange(text, "Address")}
                required
                error={
                  this.state.requiredShow && this.state.Address.length == 0
                }
              />
              <Button style={styles.btnUpdate} onPress={() => this.submit()}>
                Update
              </Button>
            </>
          )}
        </Block>
        {this.state.show ? (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.getDateValue()}
            mode={this.state.mode}
            is24Hour={true}
            display="default"
            onChange={this.onChange}
          />
        ) : null}
      </Block>
    );
  }
}
export default ProfileTab;

const styles = StyleSheet.create({
  btnUpdate: {
    width: "100%",
    margin: 0,
  },
});
