const basicUrl = "http://mobileapi.studyabroadapply.com/";
const Urls = {
  Login: basicUrl + "account/Login",
  HomeGraphs:basicUrl +"Home/GetGraphsData",
  BrowseApplications:basicUrl+"application/browseApplication",
  GetAppNotes:basicUrl+"application/GetApplicationNotes",
  GetApplicationStatus:basicUrl+"application/PopulateApplicationStatus",
  GetAppCompIds:basicUrl+"application/course",
  GetProfile:basicUrl+"Application/PopulateProfile",
};

export default Urls;
