import categoryModel from "../../models/category.js";

const getCategoryById = async(parent,args,context,info)=>{
    const id = args.categoryId;

    const categoryFound = await categoryModel.findById(id);

    if(categoryFound){
        return categoryFound;
    }else{
        console.log("No Cateory Found");
    }
}

export default getCategoryById