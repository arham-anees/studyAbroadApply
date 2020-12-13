function SearchCourse({ country, course, institute }) {
  return new Promise((resolve, reject) => {
    try {
      let searchedCourses = [
        {
          id: 1,
          title:
            "BACHELOR OF ENGINEERING (CIVIL) (HONOURS)/BACHELOR OF ENVIRONMENTAL SCIENCE",
          university: "University of the Sunshine Coast",
          country: "England",
          city: "Queensland",
          intake: 0,
          duration: "1 Year(s) 6 Month(s)",
          annualFee: 0,
          feeCurrency: "$",
          courseDeadline: "12/12/2020",
        },
        {
          id: 2,
          title:
            "BACHELOR OF ENGINEERING (Mechanical) (HONOURS)/BACHELOR OF ENVIRONMENTAL SCIENCE",
          university: "University of the Sunshine Coast",
          country: "Australia",
          city: "Queensland",
          intake: 0,
          duration: "1 Year(s) 0 Month(s)",
          annualFee: 110,
          feeCurrency: "$",
          courseDeadline: "12/12/2020",
        },
        {
          id: 3,
          title:
            "BACHELOR OF ENGINEERING (Software) (HONOURS)/BACHELOR OF ENVIRONMENTAL SCIENCE",
          university: "University of the Sunshine Coast",
          country: "Australia",
          city: "Queensland",
          intake: 0,
          duration: "0 Year(s) 6 Month(s)",
          annualFee: 1000,
          feeCurrency: "$",
          courseDeadline: "12/12/2020",
        },
      ];
      resolve(searchedCourses);
    } catch (e) {
      reject({ errorCode: 11, message: "this is error", error: e });
    }
    resolve({title:"this has skipped data"})
  });
}



const CourseService={
    SearchCourse
}

export default CourseService;