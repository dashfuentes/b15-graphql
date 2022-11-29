import Course from "./models/Course"

export const resolvers = {

    Query: {
      
        async getCourses() {
            const courses = await Course.find();
            return courses;
        }
    },

   
}