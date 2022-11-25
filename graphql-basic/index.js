const express = require( 'express' );
const app = express();

const { buildSchema } = require( 'graphql' );
const { graphqlHTTP } = require( 'express-graphql' );
const { courses } = require( './data.json' )

const schema = buildSchema( `

    type Query {
     getWelcome:String
     getName(name: String, age: Int): String
     getCourses : [Course]
     
    }

    type Mutation {
        addCourse(id: Int!, title: String!, description: String) :  [Course]
        updateCourse(id: Int, title: String, description: String) : Course
        removeCourse(id: Int): [Course]

    }

    type Course {
        id: Int
        title: String
        description : String
    }

`)


const removeCourse = ( { id } ) => {
    //Find the object to remove
    let getIndex = courses.findIndex( line => line.id === id );
    //remove the object
    courses.splice(getIndex,1)
    //return courses without the initial course
    return courses;



    return courses.filter( line => { return line.id !== id } )
}
const addCourse = ({id,title,description}) => {
    //create object
    const newCourse = {id: id, title: title, description : description}
    //push the object to []
    courses.push( newCourse );
    //return the collection []
    return courses;
}

const updateCourse = ( { id, title, description } ) => {
    //Find the course object to update
    courses.map( course => {
        if ( course.id == id ) {

            course.title = title ? title : course.title;
            course.description = description ? description : course.description
        }
        return course
     })

    //Return object by id
    return courses.find( course => course.id == id );

}

const getWelcome = () => {
    return 'Hola mundo';
}


const getName = ( args ) => {
    return "Hello " + args.name + ' ' + args.age;

}
const getCourses = () => {
    return courses
}

const root = {
    //properties (Schema) == functions
    getWelcome: getWelcome,
    getName: getName,
    getCourses: getCourses,
    addCourse: addCourse,
    updateCourse: updateCourse,
    removeCourse : removeCourse
}

app.use( '/graphql', graphqlHTTP( {
    schema: schema,
    rootValue: root,
    graphiql : true
}))


app.listen( 3000, () => {
    console.log('Server is running!!')
})