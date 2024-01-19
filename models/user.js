import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {type:String},
    email: {type:String},
    password: {type:String},
    profilePicture: {type:String},
    location: {type:String},
    createdAt: {type:Date,default:new Date()},
    token: {type:String}
});

userSchema.pre("save",function(next){
    const user = this;

    bcrypt.hash(user.password,10,(err,hash)=>{
        user.password = hash;
        next();
    });
});

const userModel = mongoose.model("user",userSchema);

export default userModel;
