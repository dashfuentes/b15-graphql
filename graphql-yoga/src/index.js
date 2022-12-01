import { server } from './server'
import { connect } from "./database";

connect()

server.start( { port: 3000 }, ( { port } ) => {
    console.log('Server running!!')
})