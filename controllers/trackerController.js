import { trackerSchema } from "../models/trackerModels.js"
import { trackerValidator } from "../validators/trackerValidator.js";


export const addExpenses =async (req,res,next)=>{

    try {
        const {error, value} = trackerValidator.validate(
            ...req.body,
        );

        if(error){
            res.status(401).json(error)
        }
        const result = trackerSchema.create(value);
        res.status(200).json(result)
    } catch (error) {
        next(error);
        
    }
}

export const getExpenses =async (req,res,next)=>{

    try {

        const {filter="{}", sort="{}"} = req.body;
        const result= await trackerSchema
        .find(JSON.parse(filter))
        .find(JSON.parse(sort));
        
        
    
        res.status(200).json(result)
    } catch (error) {
        next(error);
        
    }
}

export const deleteExpensesExpenses =async (req,res,next)=>{

    try {

        const {filter="{}", sort="{}"} = req.body;
        const result= await trackerSchema
        .find(JSON.parse(filter))
        .find(JSON.parse(sort));
        
        
    
        res.status(200).json(result)
    } catch (error) {
        next(error);
        
    }
}