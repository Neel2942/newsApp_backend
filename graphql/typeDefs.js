export const typeDefs = `#graphql

  scalar Date
  scalar Upload

  type user{
    _id:ID
    username: String
    email: String
    password: String
    profilePicture: String
    location: String
    createdAt: Date
    token: String
  }

  type category{
    _id: ID
    categoryName: String
  }

  type tags{
    _id: ID
    tagName: String
  }

  type Query{
    getAllUsers: [user]

    getAllCategories: [category]
    getCategoryById(categoryId:ID): category

    getAllTags: [tags]
    getTagsById(tagId:ID): tags
  }

  input userData{
    username: String
    email: String
    password: String
    profilePicture: Upload
    location: String
    createdAt: Date
  }

  input categoryData{
    categoryName: String
  }

  input tagsData{
    tagName: String
  }

  input userCred{
    email: String
    password: String
  }

  type Mutation{
    registerUser(userDetails:userData): user
    loginUser(userCred:userCred): user
    deleteUserById(userId:ID): Boolean

    imageUpload(file: Upload!):String!

    insertCategory(categoryDetails:categoryData): category
    updateCategory(categoryId:ID,categoryDetails:categoryData): category
    deleteCategory(categoryId:ID): Boolean
    
    insertTags(tagsDetails:tagsData): tags
    updateTags(tagId:ID,tagsDetails:tagsData): tags
    deleteTag(tagId:ID): Boolean

  }
`;

export default typeDefs;

