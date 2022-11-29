import express from "express";
import { connect } from "./database"
import { graphqlHTTP } from "express-graphql";
import schema from './schema'
//import "./database"   //Uncomment this if you will use Mongo atlas connection

const app = express();
connect();

app.use( '/graphql-playground', graphqlHTTP( {
  schema: schema,
  graphiql : true
}))

app.get('/api/welcome', (req, res) => {
    res.send('hello world')
  })


app.listen( '3000', () => {
    console.log('running..')
})