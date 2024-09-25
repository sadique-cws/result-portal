import mongoose from "mongoose";

export default function ConnectDb(){
    try {
        const connect = mongoose.connect("mongodb://localhost:27017/result-data")
        console.log("connected to DB")
    } catch (error) {
        console.log("error connecting to DB",error)
    }
}