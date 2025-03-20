import mongoose from "mongoose";
import normalize from 'normalize-mongoose'
import {Schema,model} from 'mongoose'



const userSchema = new Schema({
    userName : {type:String(), unique:true, required:true},
    email : {type:String(), unique:true, required:true},
    password : {type:String(), required:true},
    confirmPassword : {type:String(), required:true},
})

userSchema.plugin(normalize);

export const userModel = model('User', userSchema);
