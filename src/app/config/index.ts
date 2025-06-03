import dotenv from "dotenv";
dotenv.config()

export default {
    port: process.env.PORT,
    database_url: process.env.DB_URL,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};

