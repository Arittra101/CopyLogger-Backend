import { z } from "zod";

const userZodSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }),
    userName: z.string({
        required_error: "Username is required",
    }),
    email: z.string({
        required_error: "Email is required",
    }).email("Invalid email address"),
    password: z.string({
        required_error: "Password is required",
    }),
    role: z.enum(["admin", "user"]).default("user"),
    phoneNo: z.string().optional(),
    address: z.string().optional(),
});

export default userZodSchema;