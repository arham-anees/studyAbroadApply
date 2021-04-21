import { Block } from "galio-framework";
import React from "react";
import { Alert, KeyboardAvoidingView } from "react-native";
import Background from "../components/Background";
import Loading from "../components/Loading";
import GlobalStyle from "../GlobalStyles";
import ApplicationService from "../services/ApplicationService";
import SearchService from "../services/SearchService";
import ProfileTab from "./Applications/ApplicationDetailsTabs/ProfileTab";

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NationalityList: [],
      isLoading: false,
    };
  }
  handleUpdateProfilePress = (props) => {
    //console.log(props);
    props.navigation.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "Home",
            state: {
              routes: [
                {
                  name: "Applications",
                },
              ],
            },
          },
        ],
      }),
    });
    this.props.navigation.navigate("Applications");
    return;
    this.setState({ isLoading: true });
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
              //Alert.alert("Applied", "successfully applied for course");
              this.setState({ isLoading: false });
              props.navigation.dispatch({
                ...CommonActions.reset({
                  index: 0,
                  routes: [
                    {
                      name: "Home",
                      state: {
                        routes: [
                          {
                            name: "Applications",
                          },
                        ],
                      },
                    },
                  ],
                }),
              });
              this.props.navigation.navigate("Applications");
            }
          });
        } else {
          this.setState({ isLoading: false });
          Alert.alert(
            "Profile Update Failed",
            "Failed to update profile. Please try again later."
          );
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log(err);
        Alert.alert(
          "Profile Update Failed",
          "Failed to update profile. Please try again later."
        );
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
