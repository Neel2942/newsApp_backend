import tagsModel from "../../models/tags.js";

const getTagsById = async(parent,args,context,info)=>{
    const id = args.tagId;

    const tagFound = await tagsModel.findById(id);

    if(tagFound){
        return tagFound;
    }else{
        console.log("No Tag Found");
    }
}

export default getTagsById;