import { emit } from "process";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";
import config from "../config";


const createUserInDB = async (userData: IUser) => {
    try {
        console.log("User data " + userData)
        const isUserEmailExist = await User.findOne({ email: userData.email });
        const isUserNameExist = await User.findOne({ userName: userData.userName });

        if (isUserEmailExist || isUserNameExist) {
            throw new Error("User already exists");
        }

        const hashedPassword = await bcrypt.hash(userData.password, Number(config.bcrypt_salt_rounds));

        const user = new User({
            name: userData.name,
            userName: userData.userName,
            email: userData.email,
            password: hashedPassword,
            role: userData.role,
            phoneNo: userData.phoneNo,
            address: userData.address
        });
        await user.save();

    } catch (error: any) {
        console.log("error " + error)
        throw new Error("Error creating user : " + error.message);
    }
}

const logInUserInDB = async (email: string, password: string) => {
    try {
        const isUserEmailExist = await User.findOne({ email })
        // const isUserNameExist = await User.findOne({ userName })
        if (!isUserEmailExist) {
            throw new Error("Cann't find user");
        }

        //password compare
        const isPasswordValid = await bcrypt.compare(password, isUserEmailExist.password)
        if(!isPasswordValid){
            throw new Error ("User Password not val")
        }

       const { password: _, ...userwithoutPassword } = isUserEmailExist.toObject();

        return userwithoutPassword;

    } catch (error: any) {
        throw new Error("Error login user: " + error.message);
    }
}

export const UserServices = {
    createUserInDB,
    logInUserInDB
}

