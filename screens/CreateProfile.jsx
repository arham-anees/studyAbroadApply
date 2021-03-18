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
  handleUpdateProfilePress = (props) => {
      console.log(props);
    ApplicationService.UpdateProfile({...props, ProfileId:0})
      .then((x) => {
        console.log(x);
        if (x.ResponseStatus){
            SearchService.ApplyForCourse({...this.props.route.params,ProfileID:x.ResponseID})
            .then(x=>{
                console.log("create profile",x);
                if(x.ResponseID>0){
                    Alert.alert("Applied","successfully applied for course");
                }
            })
        }
        else
          Alert.alert(
            "Profile Update Failed",
            "Failed to update profile. Please try again later."
          );
      })
      .catch((err) => console.log(err));
  };
  componentDidMount(){
      //console.log(this.props.route.params)
  }
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