import tagsModel from "../../models/tags.js";

const insertTags = async (parent,args,context,info) =>{
    const data = args.tagsDetails;

    const inserttagsDb = new tagsModel({
        ...data
    });

    const tagsSaved = await inserttagsDb.save();
    if(tagsSaved){
        console.log(data);
        return data;
    }
}

export default insertTags;