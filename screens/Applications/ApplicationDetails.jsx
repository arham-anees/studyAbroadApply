import { Block, Button, Text } from "galio-framework";
import React from "react";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
import { Modal } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Dimensions, ScrollView } from "react-native";
import ApplicationDetailsTabs from "../../components/Applications/ApplicationDetailsTabs";
import Background from "../../components/Background";
import Toast from "../../components/Toast";
import Images from "../../constants/Images";
import GlobalStyle from "../../GlobalStyles";
import ApplicationService from "../../services/ApplicationService";
import DocumentsTab from "./ApplicationDetailsTabs/DocumentsTab";
import NoticeBoardTab from "./ApplicationDetailsTabs/NoticeBoardTab";
import OffersTab from "./ApplicationDetailsTabs/OffersTab";
import ProfileTab from "./ApplicationDetailsTabs/ProfileTab";
import TravelInformation from "./ApplicationDetailsTabs/TravelInformation";
import NewDocument from "./NewDocument";

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
      applicationId:this.props.route.params.appId,
      activeTab: Tabs.NoticeBoard,
      showModal: false,
      isShow: false,
      toastMessage: "this is test toast message",
      application: {
        studentName: "Ahmad Raza",
        fatherName: "Hamid Ali",
        email: "ahmad@mail.com",
        phone: "03001212123",
        passportNumber: "",
        passportExpiryDate: Date.now(),
        landline: "",
        dateOfBirth: Date.now(),
        gender: 1,
        nationality: "Pakistan",
        maritalStatus: 2,
        address: "Tordher, Swabi",
        applicationStatus: 2,
        followUps: [1607449959571, 1605447859571],
        notes: [],
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
  ApplicationService.GetApplicationNotes(this.state.applicationId)
  .then((x) => {
    console.log("notes: ",JSON.stringify(x));
    var mappedData=this.mapNotes(x);
    var application=this.state.application;
application.notes=mappedData;
    this.setState({application});
  })
  .catch((err) => {
    console.log("ERROR: ",JSON.stringify(err));
  });
}

mapNotes=(data)=>{
  try{
    var mappedData=[];
    data.forEach(element => {
      mappedData.push({
        sender:element.UserName,
        note:element.Message,
        date:element.CreationDate,
        isVisibleToStudents:element.IsVisableToStudents
      })
    });
    console.log("mapped notes", mappedData);
    return mappedData;
  }
  catch(err){
    return [];
  }
}

//#region NOTICE BOARD
handleApplicationStatusUpdate = (newStatus) => {
        let application = this.state.application;
        application.applicationStatus = newStatus;
        this.setState({ application });
};
handleUpdateStatusPress=()=>{
  Alert.alert("Status updated", "Application status updated successfully.");
}
//#endregion

//#region  
handleUpdateProfilePress=()=>{
  Alert.alert("Profile Updated","Profile has been updated");
}
//#endregion


handleChange = (value, name) => {
    let application = this.state.application;
    application[name] = value;
    this.setState({ application });
  };

  handleDeleteDocument = (id, callback) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to continue?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => { let application = this.state.application;
          callback();
          setTimeout(() => {
            application.documents = application.documents.filter((x) => x.id != id);
          this.setState({ application });
          }, 1000);
        }}
      ],
      { cancelable: false }
    );   
  };
  handleDeleteOffer = (id,callback) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to continue?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => { 
          let application = this.state.application;
          callback();
          setTimeout(() => {
            application.offers = application.offers.filter((x) => x.id != id);
          this.setState({ application });
          }, 1000);
        }}
      ],
      { cancelable: false }
    );   
  };

  handleUpdateGender = (newValue) => {
    let application = this.state.application;
    application.gender = newValue;
    this.setState({ application });
  };
  handleUpdateMaritalStatus = (newValue) => {
    let application = this.state.application;
    application.maritalStatus = newValue;
    this.setState({ application });
  };

  handleAddFollowUp = (newFollowUp) => {
    if(!newFollowUp)return;
    let application = this.state.application;
    application.followUps.push(newFollowUp);
    this.setState({ application });
  };
  handleAddNote = ({ sender, note }) => {
    let application = this.state.application;
    application.notes.push({ sender, note });
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
      } else if (this.state.activeTab === Tabs.Offers) {
        console.log("Offers");
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
      console.log("title is not provided");
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
                application={this.state.application}
                handleChange={this.handleChange}
                updateMaritalStatus={this.handleUpdateMaritalStatus}
                updateGender={this.handleUpdateGender}
                handleUpdateProfilePress={this.handleUpdateProfilePress}
              />
            ) : // ) : this.state.activeTab === Tabs.Course ? (
            //   <CourseTab />
            this.state.activeTab === Tabs.Documents ? (
              <DocumentsTab
              applicationId={this.state.applicationId}
                application={this.state.application}
                deleteDocument={this.handleDeleteDocument}
              />
            ) : this.state.activeTab === Tabs.Offers ? (
              <OffersTab
              applicationId={this.state.applicationId}
                application={this.state.application}
                deleteOffer={this.handleDeleteOffer}
              />
            ) : this.state.activeTab === Tabs.TravelInformation ? (
              <TravelInformation applicationId={this.state.applicationId}/>
            ) : null}
            <Toast isShow={this.state.isShow}>{this.state.toastMessage}</Toast>
            <Block style={GlobalStyle.scrollBottomPadding}></Block>
          </ScrollView>
          {this.state.activeTab === Tabs.Documents ||
          this.state.activeTab === Tabs.Offers ? (
            <Button
              onlyIcon
              icon="plus"
              iconFamily="antdesign"
              iconSize={30}
              color="green"
              iconColor="#fff"
              style={styles.floatingButton}
              onPress={this.AddNewHandle}
            >
              add
            </Button>
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
