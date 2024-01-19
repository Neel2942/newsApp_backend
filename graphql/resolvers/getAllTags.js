import tagsModel from "../../models/tags.js"

const getAllTags = async(parent,args,context,info)=>{

    const getTagsDb = await tagsModel.find();

    if(getTagsDb){
        return getTagsDb;
    }
}

export default getAllTags;
