import categoryModel from "../../models/category.js";

const updateCategory = async(parent,args,context,info)=>{
    const id = args.categoryId;
    const data = args.categoryDetails;

    const categoryFind = await categoryModel.findById(id);

    if(categoryFind){
        const updateCategoryDb = await categoryModel.findByIdAndUpdate(id,data);
        if(updateCategoryDb){
            return data;
        }else{
            console.log("Error Updating Data");
        }
    }else{
        console.log("Category Not Found");
    }
}

export default updateCategory;