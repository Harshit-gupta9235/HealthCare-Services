import express from 'express'
import readdata from '../controllers/Read.js'
import createdata from '../controllers/Create.js'
import updatedata from '../controllers/Update.js'
import deletedata from '../controllers/Delete.js'
const route=express.Router()
route.get("/fetchdata",readdata)
route.post("/createdata",createdata)
route.put("/updatedata",updatedata)
route.delete("/deletedata",deletedata);
export default route;