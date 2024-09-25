import mongoose from "mongoose";

import mongoose from "mongoose"


const ResultSchema  = new mongoose.Schema({
    name: {type:String,required:true},
    fatherName:{type:String},
    schoolName:{type:String,required:true},
    address:{type:String,required:true},
    math:{type:Number,required:true},
    science:{type:Number,required:true},
    hindi:{type:Number,required:true},
    english:{type:Number,required:true},
    socialScience:{type:Number,required:true},
})

export default mongoose.models.Result || mongoose.model("Result",ResultSchema)