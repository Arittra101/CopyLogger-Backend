import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";


 const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
            required: true,
        },
        phoneNo:{
            type: String,
            required: false,
        },
        address:{
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }
)

export const  User = model<IUser>("User", userSchema);
