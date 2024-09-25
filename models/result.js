import mongoose from "mongoose";


const ResultSchema  = new mongoose.Schema({
    name: {type:String,required:true},
    fatherName:{type:String,required:true},
    motherName:{type:String,required:true},
    schoolName:{type:String,required:true},
    address:{type:String,required:true},
    maths:{type:String,required:true},
    science:{type:String,required:true},
    hindi:{type:String,required:true},
    english:{type:String,required:true},
    socialScience:{type:String,required:true},
})

export default mongoose.models.Result || mongoose.model("Result",ResultSchema)