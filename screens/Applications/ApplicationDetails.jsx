import { Block, Button } from "galio-framework";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ApplicationDetailsTabs from "../../components/Applications/ApplicationDetailsTabs";
import Images from "../../constants/Images";
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
  Course: "course",
  Documents: "documents",
  Offers: "offers",
  TravelInformation: "travelInformation",
};
class ApplicationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: Tabs.NoticeBoard,
    };
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
        console.log("Document");
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
            <ApplicationDetailsTabs
              initialIndex={this.state.activeTab}
              onChange={this.onTabChange}
            />
            <ScrollView style={styles.container}>
              {this.state.activeTab === Tabs.NoticeBoard ? (
                <NoticeBoardTab />
              ) : this.state.activeTab === Tabs.Profile ? (
                <ProfileTab />
              ) : this.state.activeTab === Tabs.Course ? (
                <CourseTab />
              ) : this.state.activeTab === Tabs.Documents ? (
                <DocumentsTab />
              ) : this.state.activeTab === Tabs.Offers ? (
                <OffersTab />
              ) : this.state.activeTab === Tabs.TravelInformation ? (
                <TravelInformation />
              ) : null}

              <Block style={{ minHeight: 200 }}></Block>
            </ScrollView>
            {this.state.activeTab === Tabs.NoticeBoard ||this.state.activeTab===Tabs.Documents? (
                  <Button onlyIcon icon="plus" iconFamily="antdesign"
                  iconSize={30} color="green" iconColor="#fff"
                  style={styles.floatingButton}>add</Button>
              ) : null}
          
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default ApplicationDetails;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  floatingButton:{
    width: 60,
    height: 60,
    position: "absolute",
    top: Dimensions.get("window").height - 150,
    right: 30,
  }
});
