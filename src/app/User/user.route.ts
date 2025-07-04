import express  from "express";
import { userControllers } from "../User/user.controller";


const router = express.Router();

router.post("/signup",userControllers.createUser);
router.post("/signin", userControllers.logInUser);
export const userRoute =  router; 