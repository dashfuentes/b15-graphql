import { Schema, model } from "mongoose";

const courseSchema = new Schema( {
    
    title: {
        type: String,
        required: true
    },
    description: String,
    date: String,
    isReleased: Boolean

} );
//We need to declare the name of the model in singular to prevent issues with the mongoose collection process
 export default model('Course', courseSchema)