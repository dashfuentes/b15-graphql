const express = require( 'express' );
const app = express();

const { buildSchema } = require( 'graphql' );
const { graphqlHTTP } = require( 'express-graphql' );

const schema = buildSchema( `

    type Query {
     getWelcome:String
     getName: String
    }


    type Carlos {
        id: Int,
        name: String!
    }


`)

const getWelcome = () => {
    return 'Hola mundo';
}

const getName = ()=>{
    return true
}

const root = {
    //properties (Schema) == functions
    getWelcome: getWelcome,
    getName : getName
}

app.use( '/graphql', graphqlHTTP( {
    schema: schema,
    rootValue: root,
    graphiql : true
}))


app.listen( 3000, () => {
    console.log('Server is running!!')
})