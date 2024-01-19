import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    username: {type:String},
    email: {type:String},
    password: {type:String},
    profilePicture: {type:String},
    location: {type:String},
    createdAt: {type:Date,default:new Date()},
    token: {type:String}
})