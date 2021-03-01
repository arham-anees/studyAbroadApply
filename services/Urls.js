const basicUrl = "http://mobileapi.studyabroadapply.com/";
const baseAppUrl=basicUrl+"application/";
const Urls = {
  Login: basicUrl + "account/Login",
  HomeGraphs:basicUrl +"Home/GetGraphsData",
  BrowseApplications:baseAppUrl+"browseApplication",
  GetAppNotes:baseAppUrl+"GetApplicationNotes",
  GetApplicationStatus:baseAppUrl+"PopulateApplicationStatus",
  GetAppCompIds:baseAppUrl+"course",
  GetProfile:baseAppUrl+"PopulateProfile",
  GetDocs:baseAppUrl+"PopulateApplicationDocument",
  GetCountriesList:baseAppUrl+"GetCountryList",
  GetCoursesList:baseAppUrl+"GetCourseList",
  GetCourseDisciplineList:baseAppUrl+"GetCourseDisciplineList",
  GetInstituteList:baseAppUrl+"GetInstituteList",
  GetLevelList:baseAppUrl+"GetLevelList",
  GetIntakeList:baseAppUrl+"GetIntakesList",
  UpdateAppStatus:baseAppUrl+"UpdateApplicationStatus",
  GetStatusList:baseAppUrl+"getapplicationStatusList",
  GetTravelInfo:baseAppUrl+"PopulateTravalInformation",
  SetNote:baseAppUrl+"InsertApplicationNotes",
  CreateProfile:baseAppUrl+"updateProfile",
  SearchCourse:basicUrl+"search/coursebyname",
  GetCourseAutoFill:basicUrl+"search/courseautofill",
  CourseApply:basicUrl+"search/courseApply"
};

export default Urls;
