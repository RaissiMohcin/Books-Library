import mongoose from "mongoose"
const bookStore = mongoose.Schema(
    {title :{
        type:String,
        required : true
    },
    author :{
        type:String,
        required : true
    },
    publishedYear :{
        type:Number,
        required : true
    },},
    {
        timestamps : true
    }

)

export const Book = mongoose.model("Cat",bookStore)