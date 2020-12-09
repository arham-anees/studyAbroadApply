import { Block, Button } from "galio-framework";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ApplicationDetailsTabs from "../../components/Applications/ApplicationDetailsTabs";
import Images from "../../constants/Images";
import GlobalStyle from "../../GlobalStyles";
import CourseTab from "./ApplicationDetailsTabs/CourseTab";
import DocumentsTab from "./ApplicationDetailsTabs/DocumentsTab";
import NoticeBoardTab from "./ApplicationDetailsTabs/NoticeBoardTab";
import OffersTab from "./ApplicationDetailsTabs/OffersTab";
import ProfileTab from "./ApplicationDetailsTabs/ProfileTab";
import TravelInformation from "./ApplicationDetailsTabs/TravelInformation";

const { height, width } = Dimensions.get("screen");

const Tabs = {
  NoticeBoard: "noticeBoard",
  Profile: "profile",
  Documents: "documents",
  Offers: "offers",
  TravelInformation: "travelInformation",
};
class ApplicationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: Tabs.NoticeBoard,
      application: {
        studentName:'Ahmad Raza',
        fatherName:"Hamid Ali",
        email:"ahmad@mail.com",
        phone:"03001212123",
        passportNumber:"",
        passportExpiryDate:Date.now(),
        landline:"",
        dateOfBirth:Date.now(),
        gender:1,
        nationality:"Pakistan",
        maritalStatus:2,
        address:"Tordher, Swabi",
        applicationStatus: 2,
        followUps: [1607449959571, 1605447859571],
        notes: [
          { sender: "Faraz", note: "this is test note 1" },
          { sender: "Ahmad", note: "this is test note 2" },
          { sender: "Ibrar", note: "this is test note 3" },
        ],
      },
    };
  }

handleChange=(value, name)=>{
  let application=this.state.application;
  application[name]=value;
  this.setState({application});
}

handleUpdateGender=(newValue)=>{
  let application=this.state.application;
  application.gender=newValue;
  this.setState({application});
}
handleUpdateMaritalStatus=(newValue)=>{
  let application=this.state.application;
  application.maritalStatus=newValue;
  this.setState({application});
}
  handleApplicationStatusUpdate=(newStatus)=>{
    let application=this.state.application;
    application.applicationStatus=newStatus;
    this.setState({application});
  }
  handleAddFollowUp=(newFollowUp)=>{
    let application=this.state.application;
    application.followUps.push(newFollowUp);
    this.setState({application});
  }
handleAddNote=({sender, note})=>{
  let application=this.state.application;
application.notes.push({sender, note});
}

  onTabChange = (id) => {
    this.setState({ activeTab: id });
  };
  AddNewHandle=()=>{
    try{
      if(this.state.activeTab===Tabs.NoticeBoard){
        console.log("Notice board");
      }
      else if(this.state.activeTab===Tabs.Documents){
        this.props.navigation.navigate("NewDocument")
      }
      else if(this.state.activeTab===Tabs.Offers){
        console.log("Offers");
      }
    }
    catch(e){}
  }
  render() {
    return (
      <SafeAreaView>
        <ImageBackground
          source={Images.Onboarding}
          style={{ height, width, zIndex: 1 }}
        >
          <View>
            <KeyboardAvoidingView behavior="padding">
            <ApplicationDetailsTabs
              initialIndex={this.state.activeTab}
              onChange={this.onTabChange}
            />
            <ScrollView style={styles.container}>
              {this.state.activeTab === Tabs.NoticeBoard ? (
                <NoticeBoardTab application={this.state.application} 
                updateStatus={this.handleApplicationStatusUpdate}
                addFollowUp={this.handleAddFollowUp}
                addNote={this.handleAddNote}/>
              ) : this.state.activeTab === Tabs.Profile ? (
                <ProfileTab application={this.state.application} handleChange={this.handleChange}
                updateMaritalStatus={this.handleUpdateMaritalStatus}
                updateGender={this.handleUpdateGender}/>
              // ) : this.state.activeTab === Tabs.Course ? (
              //   <CourseTab />
              ) : this.state.activeTab === Tabs.Documents ? (
                <DocumentsTab />
              ) : this.state.activeTab === Tabs.Offers ? (
                <OffersTab />
              ) : this.state.activeTab === Tabs.TravelInformation ? (
                <TravelInformation />
              ) : null}

              <Block style={{ minHeight: 200 }}></Block>
            </ScrollView>
            {this.state.activeTab===Tabs.Documents? (
                  <Button onlyIcon icon="plus" iconFamily="antdesign"
                  iconSize={30} color="green" iconColor="#fff"
                  style={styles.floatingButton} onPress={this.AddNewHandle}>add</Button>
              ) : null}
              </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default ApplicationDetails;

const styles = StyleSheet.create({
  container: {
  },
  floatingButton:{
    width: 60,
    height: 60,
    position: "absolute",
    top: Dimensions.get("window").height - 150,
    right: 30,
  }
});
