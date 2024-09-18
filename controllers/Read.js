import schema from '../models/Schema.js'
const readdata=async(req,res)=>{
    try{
        const user=await schema.find();
        res.status(200).send({
            msg:"fetch successfully",
            data:user
        })
    }catch(error){
        res.status(404).send({
            error:`error in Read.js ${error}`
        })
    }
}
export default readdata;