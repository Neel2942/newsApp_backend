import jwt from "jsonwebtoken";
import userModel from "../../models/user.js";
import imageUpload from "./imageUpload.js";


const registerUser= async (parent, args, context, info) => {
    const user = args.userDetails;
    const email = user["email"];

    const checkEmail = await userModel.findOne({ email: user["email"] });
    if (checkEmail) {
      console.log("Only one account can be made using email address");
    } else {
      const image = await imageUpload(null, { file: args.userDetails.profilePicture }, context, null);
      console.log(image);
      const insertUserDb = new userModel({
        ...args.userDetails,
        profilePicture:image,
        createdAt:new Date()
      });
      const token = jwt.sign(
        { userId: insertUserDb._id, email },
        "UNSAFE_STRING",
        {
          expiresIn: "2h",
        }
      );
      insertUserDb.token = token;

      const userSaved = await insertUserDb.save();
      if (userSaved) {
        console.log(insertUserDb)
        return user;
      } else {
        console.log("Error Inserting Data In Database");
      }
    }
  }

  export default registerUser;