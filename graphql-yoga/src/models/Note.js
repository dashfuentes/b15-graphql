import { Schema,model } from "mongoose"

const noteSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
} );

export default model("Note", noteSchema)