import schema from '../models/Schema.js'
const deletedata=async (req,res)=>{

    try{
        const _id=req.body._id;
        const fetch=await schema.deleteOne({_id});
        res.status(200).send({
            msg:"deleted successfully",
            data:fetch,
        })
    }catch(error){
        res.status(404).send({
            error:`error in Delete.js ${error}`
        })
    }
}
export default deletedata;