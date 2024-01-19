import userModel from "../../models/user.js";

const deleteUserById = async(parent,args,context,info)=>{
    const id = args.userId;

    const userDelete = await userModel.findByIdAndDelete(id);

    if(userDelete){
        return true;
    }else{
        console.log("Error Deleting User");
        return false;
    }
}

export default deleteUserById;