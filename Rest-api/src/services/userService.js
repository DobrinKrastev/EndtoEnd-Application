const User = require("../Models/User")
const jwt = require("jsonwebtoken")



exports.register = async (userData) => {
  //  if(userData.password !== userData.repassword){
//     throw new Error("Password missmatched")
//  }
  try {
      const user = await User.create(userData);
      return generateAccessToken(user);
  } catch (error) {
      throw new Error("Failed to register user");
  }
};

exports.login = async (userData) => {
  try {
      const user = await User.findOne({ email: userData.email });
      if (!user) {
          throw new Error("User not found");
      }
      const isValid = await bcrypt.compare(userData.password, user.password);
      if (!isValid) {
          throw new Error("Invalid email or password");
      }
      return generateAccessToken(user);
  } catch (error) {
      throw new Error("Failed to login");
  }
};

function generateAccessToken(user){
    const token = jwt.sign({
        _id: user._id,
        email: user.email
     } ,'SECRETKEY')
     return {
        _id: user._id,
        email: user.email,
        token,
     }
}