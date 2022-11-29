//TypeDefs = type definitions(Query, Mutations, custom types etc)
//Resolvers = functions to resolve type definitions(Query,Mutation etc)
import { makeExecutableSchema } from "graphql-tools";
import {resolvers} from "./resolvers"

const TypeDefs = `
    type Query {
      getCourses : [Course]
    }

    type Course {
        _id : ID
        title: String!
        description: String
        date: String
        isReleased: Boolean
    }

`

export default makeExecutableSchema( {
    typeDefs: TypeDefs,
    resolvers: resolvers
})

