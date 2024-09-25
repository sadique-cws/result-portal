import mongoose from "mongoose";

import mongoose from "mongoose"


const ResultSchema  = new mongoose.Schema({
    name: {type:String},
    fatherName:{type:String},
    schoolName:{type:String},
    adderss:{type:String}
})

export default mongoose.models.result || mongoose.model("ResultSchema",ResultSchema)