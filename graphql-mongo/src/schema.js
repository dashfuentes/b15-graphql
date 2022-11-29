//TypeDefs = type definitions(Query, Mutations, custom types etc)
//Resolvers = functions to resolve type definitions(Query,Mutation etc)
import { makeExecutableSchema } from "graphql-tools";
import {resolvers} from "./resolvers"

const TypeDefs = `
    type Query {
      getCourses : [Course]
      getCourseById(id: ID) : Course
    }

    type Mutation {
        createCourse(input: CourseInput ) : Course
        updateCourse(input: CourseInput, _id : ID ) : Course
        removeCourse(): [Course]
    }
    type Course {
        _id : ID
        title: String!
        description: String
        date: String
        isReleased: Boolean
    }

    input CourseInput {
        title: String!
        description: String
        date: String
        isReleased: Boolean

    }


`

var test = 1;
var tes2 = 2

function sum( num1, num2 ) {
    return num1 + num2
}

sum(test,tes2)

export default makeExecutableSchema( {
    typeDefs: TypeDefs,
    resolvers: resolvers
})

