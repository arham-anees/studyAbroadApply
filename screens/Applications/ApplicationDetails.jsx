import { Block, Button, Text } from "galio-framework";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Modal } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Dimensions, ScrollView } from "react-native";
import ApplicationDetailsTabs from "../../components/Applications/ApplicationDetailsTabs";
import Background from "../../components/Background";
import Toast from "../../components/Toast";
import Images from "../../constants/Images";
import GlobalStyle from "../../GlobalStyles";
import CustomIcon from "../../Icons/BellIcon";
import ApplicationService from "../../services/ApplicationService";
import DocumentsTab from "./ApplicationDetailsTabs/DocumentsTab";
import CourseTab from "./ApplicationDetailsTabs/CourseTab";
import NoticeBoardTab from "./ApplicationDetailsTabs/NoticeBoardTab";
import OffersTab from "./ApplicationDetailsTabs/OffersTab";
import ProfileTab from "./ApplicationDetailsTabs/ProfileTab";
import TravelInformation from "./ApplicationDetailsTabs/TravelInformation";
import NewDocument from "./NewDocument";
import { debug } from "react-native-reanimated";
import LocalStorage from "../../helper/LocalStorage";
import Role from "../../helper/Role";
import Messages from "../../helper/Messages";

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
      profileId: 0,
      userId: 0,
      roleId: 0,
      toastMessage: "",
      application: {
        applicationStatus: 2,
        followUps: [1607449959571, 1605447859571],
        documents: [],
        offers: [],
      },
    };
  }
  componentWillUnmount() {
    try {
      this.focusListener.remove();
    } catch {}
  }
  componentDidMount() {
    LocalStorage.GetUserInfo().then((x) => {
      x = JSON.parse(x);
      this.setState({ roleId: x.RoleID, userId: x.UserID });
    });
    this.focusListener = this.props.navigation.addListener("focus", () => {
      ApplicationService.GetCourse(this.state.applicationId)
        .then((x) => {
          x = x.MyCourse;
          var course = {
            name: x.CourseName,
            institute: x.InstituteName,
            country: x.CountryName,
            intake: x.InTakeName,
            level: x.LevelName,
          };

          this.setState({
            profileId: x.ProfileID,
            userId: x.UserID,
            intakeId: x.IntakeID,
            courseId: x.CourseID,
            countryId: x.CountryID,
            course,
          });
        })
        .catch((err) => {
          Alert.alert("Failed", Messages.AppDetailsLoadFail);
          console.log(err);
        });
    });
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

  handleUpdateProfilePress = (props) => {
    Alert.alert(
      "Profile Updated",
      "Profile update is irreversible Process. Are you sure you want to update?",
      [
        {
          text: "Yes",
          onPress: () => {
            ApplicationService.UpdateProfile(props)
              .then((x) => {
                //console.log(x);
                if (x.ResponseStatus)
                  Alert.alert("Profile Updated", "Profile has been updated");
                else
                  Alert.alert(
                    "Profile Update Failed",
                    "Failed to update profile. Please try again later."
                  );
              })
              .catch((err) => console.log(err));
          },
        },
        { text: "No" },
      ]
    );
  };
  handleAddFollowUp = (newFollowUp) => {
    if (!newFollowUp) return;
    let application = this.state.application;
    application.followUps.push(newFollowUp);
    this.setState({ application });
  };

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
      }
    } catch (e) {}
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };
  submitModal = (data) => {
    //console.log("submit modal");
    const { title, category, file, IsInstituteDocuments } = data;
    //console.log("file", file);
    let isValid = true;
    if (file != null) {
      //Alert.alert("File Uploaded", "File uploaded successfully");
      //return;

      LocalStorage.GetUserInfo()
        .then((userInfo) => {
          userInfo = JSON.parse(userInfo);
          //console.log("submit modal 2");
          ApplicationService.UploadFile({
            file: file,
            ApplicationID: this.state.applicationId,
            StudentID: this.state.userId,
            CurrentUserID: userInfo.UserID, //userInfo.UserID,
            ProfileID: this.state.profileId,
            IsInstituteDocuments,
            Description: title,
            DocumentCategoryID: category,
          })
            .then((x) => {
              console.log("file uploaded", x);
            })
            .catch((err) => {
              console.log("error in file upload", err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState({ isShow: true, toastMessage: "Please select a file" });
      return;
    }
    //console.log("submit modal 3");
    if (title.length == 0) {
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
    return (
      <Background noScroll>
        <ApplicationDetailsTabs
          initialIndex={this.state.activeTab}
          onChange={this.onTabChange}
        />
        <ScrollView
          style={styles.container}
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps={"handled"}
        >
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
            <View>
              <ProfileTab
                applicationId={this.state.applicationId}
                profileId={this.state.profileId}
                application={this.state.application}
                handleUpdateProfilePress={this.handleUpdateProfilePress}
              />
            </View>
          ) : this.state.activeTab === Tabs.Course ? (
            <CourseTab item={this.state.course} />
          ) : this.state.activeTab === Tabs.Documents ? (
            <DocumentsTab applicationId={this.state.applicationId} />
          ) : this.state.activeTab === Tabs.Offers ? (
            <OffersTab
              applicationId={this.state.applicationId}
              application={this.state.application}
              deleteOffer={this.handleDeleteOffer}
            />
          ) : this.state.activeTab === Tabs.TravelInformation ? (
            <TravelInformation applicationId={this.state.applicationId} />
          ) : null}
          <Block style={GlobalStyle.scrollBottomPadding}></Block>
          <Toast isShow={this.state.isShow}>{this.state.toastMessage}</Toast>
        </ScrollView>
        {this.state.activeTab === Tabs.Offers &&
          (this.state.roleId == Role.Administrator ||
            this.state.roleId == Role.StudentCounselor ||
            this.state.roleId == Role.Institute) &&
          false && (
            <Button style={styles.floatingButton} onPress={this.AddNewHandle}>
              <CustomIcon source={Images.Add} />
            </Button>
          )}
        {this.state.activeTab == Tabs.Documents && false && (
          <Button style={styles.floatingButton} onPress={this.AddNewHandle}>
            <CustomIcon source={Images.Add} />
          </Button>
        )}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showModal}
          offer={this.state.activeTab == Tabs.Offers}
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
      </Background>
    );
  }
}

export default ApplicationDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding,
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
