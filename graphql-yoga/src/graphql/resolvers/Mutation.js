import Note from "../../models/Note.js";
const Mutation ={
    async createNote(_, {input}){
        const Notes= await Note.create(input)
        return Notes
    },
        async updateNote(_,{input, _id}){
            return await Note.findByIdAndUpdate(
                _id,
                input,
                {new:true}
            )
        },
        async removeNote(_,{_id}){
          await Note.findByIdAndRemove(_id)
            return await Note.find()
        }
    
}
export default Mutation
