import schema from '../models/Schema.js'
const createdata=async(req,res)=>{
    try{
        console.log(req.body);
        const user=new schema(req.body);
        console.log(user);
        const saveduser=await user.save();
        res.status(200).send({
            msg:"created successfully",
            data:saveduser
        });

    }catch(error){
        res.status(404).send({
            error:`error in Create.js ${error}`
        })
    }
};
export default createdata;