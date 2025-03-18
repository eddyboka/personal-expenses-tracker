import Joi from "joi";

export const trackerValidator = Joi.object({
    amount:Joi.number().required(),
    category:Joi.string().required(),
    Date:Joi.string().required(),
});