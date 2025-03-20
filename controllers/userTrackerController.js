import { userModel } from "../models/userTrackerModels";
import { userLoginValidator, userRegisterValidator } from "../validators/userTrackerValidator"


export const registerUser =async (req,res,next)=>{

    const {error, value} = userRegisterValidator.validate(req.body);
    if(error){
        return res.status(422).json(error)
    }

//checks if user does not exist
    const user = await userModel.findOne({
        $or:[
            {userName:value.userName},
            {password:value.password}
        ]
    })
    if(user){
        return res.status(409).json("User already exists")
    }

}


export const loginUser =(req,res,next)=>{
    const{error, value} = userLoginValidator.validate(req.body);
    if (error){
        return res.status(401).json({message: error})
    }

    const result = userModel.create({
        $or
    })


}