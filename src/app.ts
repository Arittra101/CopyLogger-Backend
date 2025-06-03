import express, { Request, Response } from "express";
import { User } from "./app/User/user.model";
import { userRoute } from "./app/User/user.route";

const app = express();


app.use(express.json());

app.use("/api/user",userRoute);


app.get("/", (req:Request, res:Response) => {res.send("Hello World")});


export default app;