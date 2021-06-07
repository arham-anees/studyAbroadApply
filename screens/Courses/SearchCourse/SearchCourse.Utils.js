import SearchService from "../../../services/SearchService";

function GetAutoFill(CountryID, course) {
  return new Promise((resolve, reject) => {
    SearchService.GetCourseAutoFill(course, CountryID)
      .then((x) => {
        try {
          let count = 0;
          if (x != null && x.length > 0) {
            const coursesList = [];
            x.forEach((course) => {
              count++;
              coursesList.push({ id: count, text: course.Value });
            });
            resolve({ list: coursesList });
          }
        } catch (err) {
          reject(err);
          //this.setState({ disciplinesList: [], coursesListAdv: null });
        }
      })
      .catch((err) => {
        //console.log(err);
        reject(err);
        //this.setState({ disciplinesList: [], coursesListAdv: null });
      });
  });
}

function GetDisciplineAutoFill(CountryID, course) {
  return new Promise((resolve, reject) => {
    SearchService.GetDisciplineAutoFill(course, CountryID)
      .then((x) => {
        try {
          let count = 0;
          if (x != null && x.length > 0) {
            const disciplinesList = [];
            x.forEach((course) => {
              count++;
              disciplinesList.push({ id: count, text: course.Value });
            });
            resolve({ list: disciplinesList });
          }
        } catch (err) {
          reject(err);
          //this.setState({ disciplinesList: [], coursesListAdv: null });
        }
      })
      .catch((err) => {
        //console.log(err);
        reject(err);
        //this.setState({ disciplinesList: [], coursesListAdv: null });
      });
  });
}

const SearchCourseUtils = {
  GetAutoFill,
  GetDisciplineAutoFill,
};

export default SearchCourseUtils;
