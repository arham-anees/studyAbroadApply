import { Block, Button, Text } from "galio-framework";
import React from "react";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
import { Modal } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ApplicationDetailsTabs from "../../components/Applications/ApplicationDetailsTabs";
import Background from "../../components/Background";
import Toast from "../../components/Toast";
import Icons from "../../constants/Icons";
import Images from "../../constants/Images";
import GlobalStyle from "../../GlobalStyles";
import CustomIcon from "../../Icons/BellIcon";
import ApplicationService from "../../services/ApplicationService";
import DocumentsTab from "./ApplicationDetailsTabs/DocumentsTab";
import CourseTab from './ApplicationDetailsTabs/CourseTab';
import NoticeBoardTab from "./ApplicationDetailsTabs/NoticeBoardTab";
import OffersTab from "./ApplicationDetailsTabs/OffersTab";
import ProfileTab from "./ApplicationDetailsTabs/ProfileTab";
import TravelInformation from "./ApplicationDetailsTabs/TravelInformation";
import NewDocument from "./NewDocument";

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
      applicationId: this.props.route.params.appId,
      activeTab: Tabs.NoticeBoard,
      showModal: false,
      isShow: false,
      toastMessage: "",
      application: {
        applicationStatus: 2,
        followUps: [1607449959571, 1605447859571],
        documents: [
          {
            id: 1,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 2,
            name: "Passport",
            category: "Passport",
            date: "Oct 29 2020",
          },
          {
            id: 3,
            name: "Bachelors Degree / Transcript",
            category: "Bachelors Degree / Transcript",
            date: "Oct 29 2020",
          },
          { id: 4, name: "HSSC", category: "HSSC", date: "Oct 29 2020" },
          {
            id: 5,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 6,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 7,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 8,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 9,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 10,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 11,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 12,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 13,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
        ],
        offers: [
          {
            id: 1,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 2,
            name: "Passport",
            category: "Passport",
            date: "Oct 29 2020",
          },
          {
            id: 3,
            name: "Bachelors Degree / Transcript",
            category: "Bachelors Degree / Transcript",
            date: "Oct 29 2020",
          },
          { id: 4, name: "HSSC", category: "HSSC", date: "Oct 29 2020" },
          {
            id: 5,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 6,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 7,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 8,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 9,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 10,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 11,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 12,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
          {
            id: 13,
            name: "CV",
            category: "Curriculum Vitae",
            date: "Oct 29 2020",
          },
        ],
      },
    };
  }

  componentDidMount() {
    ApplicationService.GetCourse(this.state.applicationId)
      .then((x) => {
        x=x.MyCourse;
        var course = {
          name: x.CourseName,
          institute: x.InstituteName,
          country: x.CountryName,
          intake: x.InTakeName,
          level: x.LevelName,
        };

        this.setState({
          profileId: x.ProfileID,
          userId:x.UserID,
          intakeId:x.IntakeID,
          courseId:x.CourseID,
          countryId:x.CountryID,
          course
        });
        console.log("course: ",x);
      })
      .catch((err) => console.log(err));
  }

  //#region NOTICE BOARD
  handleApplicationStatusUpdate = (newStatus) => {
    let application = this.state.application;
    application.applicationStatus = newStatus;
    this.setState({ application });
  };
  handleUpdateStatusPress = () => {
    Alert.alert("Status updated", "Application status updated successfully.");
  };
  //#endregion


  handleChange = (value, name) => {
    let application = this.state.application;
    application[name] = value;
    this.setState({ application });
  };


  handleDeleteOffer 

  // handleUpdateGender = (newValue) => {
  //   let application = this.state.application;
  //   application.gender = newValue;
  //   this.setState({ application });
  // };
  // handleUpdateMaritalStatus = (newValue) => {
  //   let application = this.state.application;
  //   application.maritalStatus = newValue;
  //   this.setState({ application });
  // };

  handleAddFollowUp = (newFollowUp) => {
    if (!newFollowUp) return;
    let application = this.state.application;
    application.followUps.push(newFollowUp);
    this.setState({ application });
  };
  // handleAddNote = ({ sender, note }) => {
  //   let application = this.state.application;
  //   application.notes.push({ sender, note });
  // };

  onTabChange = (id) => {
    this.setState({ activeTab: id });
  };
  AddNewHandle = () => {
    try {
      if (this.state.activeTab === Tabs.NoticeBoard) {
        this.setState({ showModal: true });
      } else if (
        this.state.activeTab === Tabs.Documents ||
        this.state.activeTab === Tabs.Offers
      ) {
        this.setState({ showModal: true });
      } else if (this.state.activeTab === Tabs.Offers) {
        //console.log("Offers");
      }
    } catch (e) {}
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };
  submitModal = (data) => {
    const { title, category, file } = data;

    let isValid = true;
    if (file == null) {
      this.setState({ isShow: true, toastMessage: "Please select a file" });
      return;
    }

    if (title.length == 0) {
      //console.log("title is not provided");
      isValid = false;
    }

    if (isValid) {
      let application = this.state.application;
      application.documents.push({
        name: title,
        category,
        date: new Date().toDateString(),
      });
      this.setState({ application });
      this.closeModal();
    }
  };

  render() {
    //console.log(this.state);

    return (
      <Background noScroll>
        <ApplicationDetailsTabs
          initialIndex={this.state.activeTab}
          onChange={this.onTabChange}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView style={styles.container}>
            {this.state.activeTab === Tabs.NoticeBoard ? (
              <NoticeBoardTab
                applicationId={this.state.applicationId}
                application={this.state.application}
                updateStatus={this.handleApplicationStatusUpdate}
                addFollowUp={this.handleAddFollowUp}
                addNote={this.handleAddNote}
                handleUpdateStatusPress={this.handleUpdateStatusPress}
              />
            ) : this.state.activeTab === Tabs.Profile ? (
              <ProfileTab
                applicationId={this.state.applicationId}
                profileId={this.state.profileId}
                application={this.state.application}
              />
            ) :  this.state.activeTab === Tabs.Course ? (
              <CourseTab item={this.state.course}/>):
            this.state.activeTab === Tabs.Documents ? (
              <DocumentsTab applicationId={this.state.applicationId}/>
            ) : this.state.activeTab === Tabs.Offers ? (
              <OffersTab
                applicationId={this.state.applicationId}
                application={this.state.application}
                deleteOffer={this.handleDeleteOffer}
              />
            ) : this.state.activeTab === Tabs.TravelInformation ? (
              <TravelInformation applicationId={this.state.applicationId} />
            ) : null}
            <Toast isShow={this.state.isShow}>{this.state.toastMessage}</Toast>
            <Block style={GlobalStyle.scrollBottomPadding}></Block>
          </ScrollView>
          {this.state.activeTab === Tabs.Documents ||
          this.state.activeTab === Tabs.Offers ? (
            <Button
              style={styles.floatingButton}
              onPress={this.AddNewHandle}
            >
              <CustomIcon source={Images.Add}/>
            </Button>
            // <TouchableOpacity style={styles.floatingButton} onPress={this.AddNewHandle}>
            //   <CustomIcon source={Images.Add}/>
            // </TouchableOpacity>
          ) : null}
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.showModal}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <NewDocument
                  closeModal={this.closeModal}
                  submitModal={this.submitModal}
                />
              </View>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </Background>
    );
  }
}

export default ApplicationDetails;

const styles = StyleSheet.create({
  container: {
    height: GlobalStyle.SIZES.PageHeight - GlobalStyle.SIZES.NavBarHeight,
    paddingHorizontal:GlobalStyle.SIZES.PageNormalPadding,
    flex: 1,
  },
  floatingButton: {
    width: 60,
    height: 60,
    position: "absolute",
    top: GlobalStyle.SIZES.PageHeight - GlobalStyle.SIZES.NavBarHeight * 3,
    right: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
