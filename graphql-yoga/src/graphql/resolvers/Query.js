import { get } from 'mongoose'
import Note from '../../models/Note'
import User from '../../models/User'
const Query= {
    ping(){
        return 'pong'
    },
    async getNotes(){
        const Notes= await Note.find()
        return Notes
    },
    async getNotesById(_,{_id}){
        const Notes = await Note.findById(_id)
        return Notes
    },

    async login( _, { email, password } ) {
        const verifyUser = await User.find( { email: email, password: password } );
        console.log(verifyUser)
        return verifyUser
    }


}
export default Query
