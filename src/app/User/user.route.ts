import express  from "express";
import { userControllers } from "./user.controller";

const router = express.Router();

router.post("/signin",userControllers.createUser);
export const userRoute =  router;