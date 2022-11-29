import Course from "./models/Course"

export const resolvers = {

    Query: {
      
        async getCourses() {
            const courses = await Course.find();
            return courses;
        },
        async getCourseById( _, { id } ) {
             return await Course.findById(id)
         }
    },

    Mutation: {
        async createCourse( _, { input } ) {
            //{title: test, description: destest.........}
            return await Course.create( input )
            
        },

        async updateCourse( _, { input, _id } ) {
            return await Course.findByIdAndUpdate(_id, input, {new: true})
        }
    }

   
}