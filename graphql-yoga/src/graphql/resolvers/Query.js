import { get } from 'mongoose'
import Note from '../../models/Note.js'
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
    }

}
export default Query
