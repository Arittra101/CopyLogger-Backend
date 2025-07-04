import { Request, response, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        console.log("📥 Request Headers:", req.headers);
        const user = await UserServices.createUserInDB(req.body);
        console.log("Request Body " + req.body)
        res.status(201).json({ message: "User created successfully" });

    } catch (error: any) {
        console.log("controller" + error)
        res.status(500).json({ error: error.message });

    }
};
 const logInUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Missing Feild"
            })
        }

        const user = await UserServices.logInUserInDB(email, password)
        return res.status(200).json({
            message: "Successfully login",
            user

        })

    } catch (error: any) {
        console.log("controller" + error)
        res.status(500).json({ error: error.message });
    }
};

export const userControllers = {
    createUser,
    logInUser
}