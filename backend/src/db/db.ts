import { log } from "console";
import mongoose from "mongoose";
import UserSchema, { UserType } from "./models/UserSchema";
import bcrypt from "bcrypt"
export async function connectDB(){
    try{
        const URI = process.env.DATABASE_URL as string;
        await mongoose.connect(URI);
    }catch(e){
        log('cannot process it');
    }
}
export async function addUser(user : UserType){
    const hashPassword =    bcrypt.hashSync(user.password, 10)
    return await UserSchema.create({...user, password:hashPassword})
}