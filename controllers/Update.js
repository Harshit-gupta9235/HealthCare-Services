import schema from "../models/Schema.js";

const updatedata=async(req,res)=>{
    try{
        const user=(req.body.user);
        console.log(user)
        const _id=req.body._id;
        console.log(_id);
        const fetch=await schema.updateOne({_id},user);
        res.status(200).send({
            msg:"update successfully",
            data:fetch
        })
    }catch(error){
        res.status(404).send({
            error :`error in Update.js ${error}`
        })
    }
}
export default updatedata;