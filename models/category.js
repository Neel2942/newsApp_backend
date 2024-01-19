import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName: {type:String}
});

const categoryModel = mongoose.model("category",categorySchema);

export default categoryModel;