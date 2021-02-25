import Fetch from "./Axios";
import Urls from "./Urls";

function GetCountries(){
    return new Promise((resolve, reject) => {
        try {
          const url = Urls.GetCountriesList;
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

function GetDisciplines(){
    return new Promise((resolve, reject) => {
        try {
          const url = Urls.GetCourseDisciplineList;
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


function GetCourses(levelId, instituteId){
    return new Promise((resolve, reject) => {
        try {
            if(!levelId)levelId=0;
            if(!instituteId)instituteId=0;
          const url = Urls.GetCoursesList+"?levelId="+levelId+"&instituteId="+instituteId;
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



function GetInstitutes(countryId){
    return new Promise((resolve, reject) => {
        try {
            if(!countryId)countryId=0;
          const url = Urls.GetInstituteList+"?countryId="+countryId;
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



function GetLevels(instituteId){
    return new Promise((resolve, reject) => {
        try {
            if(!instituteId)instituteId=0;
          const url = Urls.GetLevelList+"?instituteId="+instituteId;
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


function GetIntakes(instituteId){
    return new Promise((resolve, reject) => {
        try {
            if(!instituteId)instituteId=0;
          const url = Urls.GetIntakeList+"?instituteId="+instituteId;
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


function GetCourseAutoFill(){
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.GetCourseAutoFill;
      Fetch.Post({ url , data:{CourseName:""}}) 
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


function Search(props){
  return new Promise((resolve, reject) => {
    try {
       
      const url = Urls.SearchCourse;
      Fetch.Post({url,data:props} ) 
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


const SearchService={
    GetCountries,
    GetCourses,
    GetDisciplines,
    GetInstitutes,
    GetLevels,
    GetIntakes,
    Search,
    GetCourseAutoFill
}

export default SearchService;