const User = require("../Models/User")
const jwt = require("jsonwebtoken")

exports.register = async (userData) =>{
//  if(userData.password !== userData.repassword){
//     throw new Error("Password missmatched")
//  }

 const user = await User.create(userData);

 return generateAccessToken(user)

}; 

exports.login = async (userData)=> {
  const user =  await User.findOne({email: userData.email});
  if(!user){
    throw new Error("User is invalid");
  }
  const isValid = await bcrypt.compare(userData.password, user.password);

  if(!isValid){
    throw new Error("Email or passwprd is invalid")
  }
  return generateAccessToken(user)
}


function generateAccessToken(user){
    const token = jwt.sign({
        _id: user._id,
        email: user.email
     } ,"SECRETKEY")
     return {
        _id: user._id,
        email: user.email,
        token,
     }
}