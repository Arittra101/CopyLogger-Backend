import { emit } from "process";
import { IUser } from "./user.interface";
import { User } from "./user.model";



const createUserInDB = async (userData: IUser) => {
    try {

        const isUserEmailExist = await User.findOne({ email: userData.email });
        const isUserNameExist = await User.findOne({ userName: userData.userName });
        if (isUserEmailExist || isUserNameExist) {
            throw new Error("User already exists");
        }

        // const hashedPassword = await bcrypt.hash(userData.password, Number(config.bcrypt_salt_rounds));

        const user = new User({
            name: userData.name,
            userName: userData.userName,
            email: userData.email,
            password:userData.password,
            role: userData.role,
            phoneNo: userData.phoneNo,
            address: userData.address
        });

        await user.save();

    } catch (error) {
        throw new Error("Error creating user");
    }
}

export const UserServices = {
    createUserInDB
}

