import { Block } from "galio-framework";
import React from "react";
import { Alert, KeyboardAvoidingView } from "react-native";
import Background from "../components/Background";
import Loading from "../components/Loading";
import GlobalStyle from "../GlobalStyles";
import Messages from "../helper/Messages";
import { isEmailValid } from "../helper/validations";
import ApplicationService from "../services/ApplicationService";
import SearchService from "../services/SearchService";
import ProfileTab from "./Applications/ApplicationDetailsTabs/ProfileTab";
import { CommonActions } from "@react-navigation/core";

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NationalityList: [],
      isLoading: false,
    };
  }
  handleUpdateProfilePress = (props) => {
    if (!isEmailValid(props.Email)) {
      Alert.alert("Invalid Email", Messages.InvalidEmailPopup);
      return;
    }
    this.setState({ isLoading: true });
    ApplicationService.UpdateProfile({ ...props, ProfileID: 0 })
      .then((x) => {
        if (x.ResponseStatus) {
          SearchService.ApplyForCourseApp({
            ...this.props.route.params.course,
            ProfileID: x.ResponseID,
          }).then((x) => {
            if (x.ResponseID > 0) {
              this.setState({ isLoading: false });
              this.props.navigation.dispatch({
                ...CommonActions.reset({
                  index: 1,
                  routes: [
                    {
                      name: "Home",
                    },
                    {
                      name: "Applications",
                    },
                  ],
                }),
              });
            }
          });
        } else {
          this.setState({ isLoading: false });
          Alert.alert("Failed", Messages.ProfileCreationFailed);
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log(err);
        Alert.alert("Failed", Messages.ProfileCreationFailed);
      });
  };
  componentDidMount() {}
  render() {
    return (
      <Background>
        <Loading isActive={this.state.isLoading} />
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
