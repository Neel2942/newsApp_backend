import mongoose from "mongoose";

const tagsSchema = new mongoose.Schema({
    tagName : {type:String}
});

const tagsModel = mongoose.model("tag",tagsSchema);

export default tagsModel;