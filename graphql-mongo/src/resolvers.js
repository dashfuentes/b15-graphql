import Course from "./models/Course"

export const resolvers = {

    Query: {
      
        async getCourses() {
            const courses = await Course.find();
            return courses;
        }
    },

    Mutation: {
        async createCourse( _, { input } ) {
            //{title: test, description: destest.........}
          return await  Course.create(input)
            
        }
    }

   
}