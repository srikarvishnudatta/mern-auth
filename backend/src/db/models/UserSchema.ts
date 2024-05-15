import mongoose from "mongoose";

export interface UserType{
    username:string;
    email:string;
    password:string;
}

const UserSchema = new mongoose.Schema<UserType>({
    username:{type:String, required:true, unique:true},
    email:{type:String, required:true},
    password:{type:String, required:true}
},{timestamps:true});

export default mongoose.model('User', UserSchema);