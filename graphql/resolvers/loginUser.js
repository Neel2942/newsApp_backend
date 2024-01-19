import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../../models/user.js";


const loginUser = async (parent, args, context, info) => {
  const email = args.userCred["email"];
  const password = args.userCred["password"];
  const checkUser = await userModel.findOne({ email: email });
  if (checkUser) {
    const passwordCheck = await bcrypt.compare(password, checkUser["password"]);
    if (passwordCheck) {
      const token = jwt.sign(
        { userId: checkUser._id, email },
        "UNSAFE_STRING",
        {
          expiresIn: "2h",
        }
      );
      checkUser.token = token;
      console.log("Authentic User Login");
      return checkUser;
    } else {
      console.log("Wrong Password");
    }
  } else {
    console.log("No Email Found");
  }
};

export default loginUser;