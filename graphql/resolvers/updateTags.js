import tagsModel from "../../models/tags.js";

const updateTags = async(paent,args,context,info)=>{
    const id = args.tagId;
    const data = args.tagsDetails;

    const tagFind = await tagsModel.findById(id);

    if(tagFind){
        const updateTagDb = await tagsModel.findByIdAndUpdate(id,data);
        if(updateTagDb){
            return data;
        }else{
            console.log("Error Updating Data");
        }

    }else{
        console.log("Tags Not Found");
    }
}

export default updateTags;