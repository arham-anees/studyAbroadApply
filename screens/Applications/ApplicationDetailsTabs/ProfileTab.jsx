import { Block, Button } from "galio-framework";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import DropDown from "../../../components/DropDown";
import LabelledInput from "../../../components/LabelledInput.Component";
import GlobalStyle from "../../../GlobalStyles";
import ButtonTextBox from "../../../components/ButtonTextBox.Component";
import DateTimePicker from "@react-native-community/datetimepicker";
import ApplicationService from "../../../services/ApplicationService";
import Loading from "../../../components/Loading";
import TextCustom from "../../../components/TextCustom";
import { RadioButton } from "react-native-paper";

class ProfileTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      LastName: "",
      FirstName: "",
      FatherName: "",
      Mobile: "",
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
      MartialStatus: [
        { name: "Single", value: 0 },
        { name: "Married", value: 1 },
      ],
    };
  }

  componentDidMount() {
    this.setState({ ProfileID: this.props.ProfileID });
    ApplicationService.GetNationalityList().then((x) => {
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
    });
    if (this.props.ProfileID != -1) {
      //-1 is sent from create profile
      ApplicationService.GetCourse(this.props.applicationId)
        .then((y) => {
          y = y.MyCourse;
          this.setState({
            ProfileID: y.ProfileID,
          });
          ApplicationService.GetProfileData(y.ProfileID)
            .then((x) => {
              //console.log(x);
              this.setState({
                FullName: x.FullName,
                FirstName: x.FirstName,
                LastName: x.LastName,
                FatherName: x.FatherName,
                Email: x.Email,
                Cell: x.Cell,
                Password: x.Password,
                ExpiryDate: x.ExpiryDate,
                _ExpiryDate: new Date(x.ExpiryDate),
                LandLine: x.LandLine,
                DateOfBirth: x.DateOfBirth,
                _DateOfBirth: new Date(x.DateOfBirth),
                GenderID: x.GenderID,
                NationalityID: x.NationalityID,
                MartialStatusID: x.MartialStatusID,
                Address: x.Address,
                loading: false,
                loadedOnce: true,
              });
            })
            .then((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
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

  showDatepicker = (newDateIndex) => {
    this.setState({ mode: "date", dateIndex: newDateIndex, show: true });
  };
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
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

  render() {
    return (
      <Block>
        <Loading isActive={this.state.loading && !this.state.loadedOnce} />
        <Block style={GlobalStyle.block}>
          <LabelledInput
            label="First Name"
            required
            value={this.state.FirstName}
            onChange={(text) => this.handleChange(text, "FirstName")}
          />
          <LabelledInput
            label="Last Name"
            required
            value={this.state.LastName}
            onChange={(text) => this.handleChange(text, "LastName")}
          />
          <LabelledInput
            label="Father Name"
            required
            value={this.state.FatherName}
            onChange={(text) => this.handleChange(text, "FatherName")}
          />
          <LabelledInput
            label="Email"
            required
            value={this.state.Email}
            onChange={(text) => this.handleChange(text, "Email")}
            type={"email-address"}
            disabled={this.props.ProfileID != -1}
          />
          <LabelledInput
            label="Passport Number"
            required
            value={this.state.Password}
            onChange={(text) => this.handleChange(text, "Password")}
          />
          <ButtonTextBox
            value={new Date(this.state.ExpiryDate).toDateString()}
            label={"Expiry Date*"}
            onPress={() => this.showDatepicker(1)}
          />
          <LabelledInput
            label="Mobile Number"
            required
            value={this.state.Cell}
            onChange={(text) => this.handleChange(text, "Cell")}
            type={"numeric"}
          />
          <ButtonTextBox
            value={new Date(this.state.DateOfBirth).toDateString()}
            label={"Date Of Birth*"}
            onPress={() => this.showDatepicker(2)}
          />
          <Block>
            <TextCustom>Gender*</TextCustom>
            <RadioButton.Group
              onValueChange={(value) => this.handleChange(value, "GenderID")}
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
            label="Address *"
            value={this.state.Address}
            onChange={(text) => this.handleChange(text, "Address")}
          />
          <Button
            style={styles.btnUpdate}
            onPress={() =>
              this.props.handleUpdateProfilePress({ ...this.state })
            }
          >
            Update
          </Button>
        </Block>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={
              this.state.dateIndex == 1
                ? this.state._ExpiryDate
                : this.state._DateOfBirth
            }
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
    width: "100%",
    margin: 0,
  },
});
