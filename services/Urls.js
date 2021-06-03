const basicUrl = "http://mobileapi.studyabroadapply.com/";
const baseAppUrl = basicUrl + "application/";
const Urls = {
  Login: basicUrl + "account/Login",
  RegisterStudent: basicUrl + "account/signup",
  ForgetPassword: basicUrl + "account/ForgetPassword",

  HomeGraphs: basicUrl + "Home/GetGraphsData",

  SearchCourse: basicUrl + "search/courseByName",
  GetCourseAutoFill: basicUrl + "search/courseAutoFill",
  GetDisciplineAutoFill: basicUrl + "search/CourseDisciplineAutoFill",
  CourseApply: basicUrl + "search/courseApply",

  BrowseApplications: baseAppUrl + "browseApplication",
  GetAppNotes: baseAppUrl + "GetApplicationNotes",
  GetApplicationStatus: baseAppUrl + "PopulateApplicationStatus",
  GetAppCompIds: baseAppUrl + "course",
  GetProfile: baseAppUrl + "PopulateProfile",
  GetDocs: baseAppUrl + "PopulateApplicationDocument",
  GetCountriesList: baseAppUrl + "GetCountryList",
  GetNationalityList: baseAppUrl + "GetNationality",
  GetCoursesList: baseAppUrl + "GetCourseList",
  GetCourseDisciplineList: baseAppUrl + "GetCourseDisciplineList",
  GetInstituteList: baseAppUrl + "GetInstituteList",
  GetLevelList: baseAppUrl + "GetLevelList",
  GetIntakeList: baseAppUrl + "GetIntakesList",
  UpdateAppStatus: baseAppUrl + "UpdateApplicationStatus",
  GetStatusList: baseAppUrl + "getApplicationStatusList",
  GetTravelInfo: baseAppUrl + "PopulateTravalInformation",
  SetNote: baseAppUrl + "InsertApplicationNotes",
  CreateProfile: baseAppUrl + "updateProfile",
  CourseApplyApp: baseAppUrl + "courseApply",
  NotificationsList: baseAppUrl + "getApplicationNotificationList",
  DeleteNotification: baseAppUrl + "DeleteNotification",
  MarkAllNotificationAsRead: baseAppUrl + "MarkAllNotificationAsRead",
};

export default Urls;
