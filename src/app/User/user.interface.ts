import { Model } from "mongoose";

export interface IUser {
    _id: string;
    name: string;
    userName: string;
    email: string;
    password: string;
    role: "admin" | "user";
    phoneNo?: string;
    address?: string;
}


// export type IUserMethods extends Model <IUser>{}
