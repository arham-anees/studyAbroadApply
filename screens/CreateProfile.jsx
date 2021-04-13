import { Block } from "galio-framework";
import React from "react";
import { Alert } from "react-native";
import Background from "../components/Background";
import Profile from "../components/Profile.Component";
import GlobalStyle from "../GlobalStyles";
import ApplicationService from "../services/ApplicationService";
import SearchService from "../services/SearchService";
import ProfileTab from "./Applications/ApplicationDetailsTabs/ProfileTab";

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NationalityList: [],
    };
  }
  handleUpdateProfilePress = (props) => {
    //console.log(props);
    ApplicationService.UpdateProfile({ ...props, ProfileID: 0 })
      .then((x) => {
        //console.log(x);
        if (x.ResponseStatus) {
          //console.log("params for course apply",{...this.props.route.params.course,ProfileID:x.ResponseID});
          SearchService.ApplyForCourseApp({
            ...this.props.route.params.course,
            ProfileID: x.ResponseID,
          }).then((x) => {
            //console.log("create profile",x);
            if (x.ResponseID > 0) {
              Alert.alert("Applied", "successfully applied for course");
            }
          });
        } else
          Alert.alert(
            "Profile Update Failed",
            "Failed to update profile. Please try again later."
          );
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {}
  render() {
    return (
      <Background>
        <Block
          style={[{ paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding }]}
        >
          <ProfileTab
            ProfileID={-1}
            handleUpdateProfilePress={this.handleUpdateProfilePress}
          />
        </Block>
      </Background>
    );
  }
}

export default CreateProfile;
