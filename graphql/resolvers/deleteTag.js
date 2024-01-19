import tagsModel from "../../models/tags.js";

const deleteTag = async(aprent,args,context,info)=>{
    const id = args.tagId;

    const tagDelete = await tagsModel.findByIdAndDelete(id);

    if(tagDelete){
        return true;
    }else{
        return false;
    }
}

export default deleteTag;