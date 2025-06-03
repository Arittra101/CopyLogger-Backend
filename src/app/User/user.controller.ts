import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser =  async (req: Request, res: Response) => {
    try {

     const user =  await UserServices.createUserInDB(req.body);
      res.status(201).json({ message: "User created successfully" });

        // await UserServices.createUserInDB(userData);
      
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}   

export const userControllers = {
    createUser
}