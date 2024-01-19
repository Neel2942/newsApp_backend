import categoryModel from "../../models/category.js";

const getAllCategories = async(parent,args,context,info)=>{

    const getCategoriesDb = await categoryModel.find();

    if(getCategoriesDb){
        return getCategoriesDb;
    }
}

export default getAllCategories;