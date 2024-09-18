import mongoose, { Schema } from "mongoose";
const userschema=new mongoose.Schema({
    service_name:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
    
},{timestamps:true});
export default mongoose.model("schema",userschema);