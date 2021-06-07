import axios from "axios";
import { Alert } from "react-native";
import Fetch from "./Axios";
import Urls from "./Urls";

function BrowseApplications() {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.BrowseApplications;
      Fetch.Post({ url }) //call authentication method
        .then((response) => {
          //if call is successful
          if (response == null) reject(Messages.FailedLogin);
          //if authentication is failed
          else {
            //if authentication is successful
            resolve(response.Applicationlist);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function GetApplicationNotes(applicationId) {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.GetAppNotes;
      Fetch.Get(url + `?applicationId=${applicationId}`) //call authentication method
        .then((response) => {
          //if call is successful
          if (response == null) reject(Messages.RequestFailed); //if authentication is failed
          //else {//if authentication is successful
          //LocalStorage.SetToken(response.data);//store token
          resolve(response); //
          //}
        })
        .catch((err) => {
          //console.log("ERROR: ", err);
          reject(err);
        }); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function GetApplicationStatus(applicationId) {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.GetApplicationStatus + "?ApplicationID=" + applicationId;
      Fetch.Post({ url }) //call authentication method
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function GetCourse(applicationId) {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.GetAppCompIds + "?applicationId=" + applicationId;
      Fetch.Post({ url }) //call authentication method
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}
function GetTravelInfo(statusId, applicationId) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        Urls.GetTravelInfo +
        "?statusId=" +
        statusId +
        "&applicationId=" +
        applicationId;
      Fetch.Post({ url }) //call authentication method
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function UpdateApplicationStatus(statusId, applicationId) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        Urls.UpdateAppStatus +
        "?statusId=" +
        statusId +
        "&applicationId=" +
        applicationId;
      Fetch.Post({ url }) //call authentication method
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function SetNewNote(applicationId, message, isVisibleToStudents) {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.SetNote; // + "?statusId=" + statusId + "&applicationId=" + applicationId;
      Fetch.Post({
        url,
        data: {
          ApplicationID: applicationId,
          Message: message,
          IsVisibleToStudents: isVisibleToStudents,
        },
      }) //call authentication method
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function GetNationalityList() {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.GetNationalityList;
      Fetch.Get(url)
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function GetStatusList() {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.GetStatusList;
      Fetch.Get(url)
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function GetProfileData(profileId) {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.GetProfile + "?profileId=" + profileId;
      Fetch.Post({ url }) //call authentication method
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function UpdateProfile(data) {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.CreateProfile;
      Fetch.Post({ url, data }) //call authentication method
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}
function _GetDocuments(applicationId, type) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        Urls.GetDocs + "?type=" + type + "&applicationId=" + applicationId;
      Fetch.Post({ url })
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function UploadFile({
  file,
  StudentID,
  ProfileID,
  ApplicationID,
  IsInstituteDocuments,
  DocumentCategoryID,
  Description,
}) {
  return new Promise((resolve, reject) => {
    //debugger
    if (file != null) {
      // console.log(
      //   StudentID,
      //   ProfileID,
      //   IsInstituteDocuments,
      //   DocumentCategoryID,
      //   Description,
      //   file
      // );
      //If file selected then create FormData
      const fileToUpload = file;
      const data = new FormData();
      data.append("file", {
        name: fileToUpload.filename,
        uri:
          Platform.OS === "android"
            ? fileToUpload.uri
            : fileToUpload.uri.replace("file://", ""),
        type: "*/*",
      });
      //data.append('file', fileToUpload);
      data.append("StudentID", StudentID);
      data.append("ProfileID", ProfileID);
      data.append("ApplicationID", ApplicationID);
      data.append("IsInstituteDocuments", IsInstituteDocuments);
      data.append("DocumentCategoryID", DocumentCategoryID);
      data.append("Description", Description);
      axios("http://studyabroadapply.com/mobileapi/uploadfiles", {
        method: "post",
        body: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data; ",
        },
      })
        .then((x) => {
          //console.log(x);
          resolve(x);
        })
        .catch((err) => {
          //console.log(err);
          reject(err);
        });
    } else {
      //if no file selected the show alert
      Alert.alert("Please Select File first");
    }
  });
}

function GetDocuments(applicationId) {
  return _GetDocuments(applicationId, 1);
}
function GetOffers(applicationId) {
  return _GetDocuments(applicationId, 2);
}

const ApplicationService = {
  BrowseApplications,
  GetApplicationNotes,
  GetApplicationStatus,
  GetCourse,
  GetProfileData,
  GetDocuments,
  GetOffers,
  UpdateApplicationStatus,
  GetStatusList,
  GetTravelInfo,
  SetNewNote,
  UpdateProfile,
  GetNationalityList,
  UploadFile,
};

export default ApplicationService;
