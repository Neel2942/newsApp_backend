import userModel from "../../models/user.js";

const getAllUsers = async(parent,args,context,info)=>{

    const getUsersDb = await userModel.find();

    if(getUsersDb){
        return getUsersDb;
    }
}

export default getAllUsers;