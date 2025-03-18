import { Router } from "express";
import { addExpenses, getExpenses } from "../controllers/trackerController.js";

const trackerRouter = Router;

//add expenses
trackerRouter.post('/', addExpenses)


//view a list of their own expenses
trackerRouter.get('/', getExpenses)


//Delete an expense
trackerRouter.get('/:id', deleteExpenses)

export default trackerRouter;

