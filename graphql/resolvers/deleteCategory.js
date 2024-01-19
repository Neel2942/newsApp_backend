import categoryModel from "../../models/category.js";

const deleteCategory = async(parent,args,context,info)=>{
    const id = args.categoryId;

    const categoryDelete = await categoryModel.findByIdAndDelete(id);

    if(categoryDelete){
        return true;
    }else{
        return false;
    }
}

export default deleteCategory;