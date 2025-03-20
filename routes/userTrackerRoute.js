import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userTrackerController.js";

const userRouter = Router();

//user registration route
userRouter.post('/users', registerUser);

//user login route
userRouter.post('/users', loginUser);