import mongoose from "mongoose";
import {Schema, model} from 'mongoose';
import normalize  from "normalize-mongoose";

const dbSchema = new Schema({
    amount:{type:Number, required:true},
    category:{type:String, required:true},
    date:{type:String, required:true}
}, {timestamps:true});

dbSchema.plugin(normalize);

export const trackerSchema = model('expense', dbSchema);





