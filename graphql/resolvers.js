// Auth Mutations
import registerUser from "./resolvers/registerUser.js";
import loginUser from "./resolvers/loginUser.js";
// Backyard Mutations
import deleteUserById from "./resolvers/deleteUserById.js";
import insertCategory from "./resolvers/insertCategory.js";
import updateCategory from "./resolvers/updateCategory.js";
import deleteCategory from "./resolvers/deleteCategory.js";
import insertTags from "./resolvers/insertTags.js";
import deleteTag from "./resolvers/deleteTag.js";
import updateTags from "./resolvers/updateTags.js";
// Backyard Queries
import getAllUsers from "./resolvers/getAllUsers.js";
import getAllTags from "./resolvers/getAllTags.js";
import getTagsById from "./resolvers/getTagsById.js";
import getAllCategories from "./resolvers/getAllCategories.js";
import getCategoryById from "./resolvers/getCategoriesId.js";
// Graphql Upload Scalar
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
//Resolvers Fuctions
const resolvers = {
  Upload:GraphQLUpload,
  Query: {
    getAllUsers,
    getAllTags,
    getTagsById,
    getAllCategories,
    getCategoryById,
  },
  Mutation: {
    registerUser,
    loginUser,
    deleteUserById,
    insertCategory,
    updateCategory,
    deleteCategory,
    insertTags,
    updateTags,
    deleteTag,
  },
};

export default resolvers;
