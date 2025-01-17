import dotenv from "dotenv";
dotenv.config();
export const PORT = 5555;
export const mongoDBURL = process.env.mongoDBURL;
// export const mongoDBURL = "mongodb+srv://Mohcin:0662025817Rm@cluster0.ernst.mongodb.net/BookStore";