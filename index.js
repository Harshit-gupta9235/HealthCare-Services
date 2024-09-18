import express from 'express'
import Connectdb from './config/Database.js'
import route from './routes/Route.js'
const port=8000;
const app = express();
app.use(express.urlencoded({extended:false}))
app.use(express.json());
Connectdb();
app.use("/",route)

app.listen(port,()=>{
    console.log(`Server Started Successfully`);
})