import { configDotenv } from "dotenv";
import mongoose from "mongoose";
const connectdb=async()=>{
    try{
        configDotenv();
        const url=process.env.DB_URL;
        await mongoose.connect(`${url}`)
        console.log("database connected successfully")
    }catch(error){
        console.log(`error in Database.js ${error}`)
    }
}
export default connectdb;