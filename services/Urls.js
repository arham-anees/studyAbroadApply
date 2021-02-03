const basicUrl = "http://mobileapi.studyabroadapply.com/";
const Urls = {
  Login: basicUrl + "account/Login",
  HomeGraphs:basicUrl +"Home/GetGraphsData",
  BrowseApplications:basicUrl+"application/browseApplication",
  GetAppNotes:basicUrl+"application/GetApplicationNotes",
  GetApplicationStatus:basicUrl+"application/PopulateApplicationStatus",
  GetAppCompIds:basicUrl+"application/course",
  GetProfile:basicUrl+"Application/PopulateProfile",
  GetDocs:basicUrl+"Application/PopulateApplicationDocument",
  GetCountriesList:basicUrl+"Application/GetCountryList",
  GetCoursesList:basicUrl+"Application/GetCourseList",
  GetCourseDisciplineList:basicUrl+"Application/GetCourseDisciplineList",
  GetInstituteList:basicUrl+"Application/GetInstituteList",
  GetLevelList:basicUrl+"Application/GetLevelList",
  GetIntakeList:basicUrl+"Application/GetIntakesList",
};

export default Urls;
