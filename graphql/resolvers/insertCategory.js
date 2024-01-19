import categoryModel from "../../models/category.js";

const insertCategory = async (parent,args,context,info) =>{
    const data = args.categoryDetails;;

    const insertCategoryDb = new categoryModel({
        ...data
    });

    const categorySaved = await insertCategoryDb.save();
    if(categorySaved){
        console.log(data);
        return data;
    }
}

export default insertCategory;