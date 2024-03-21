const User = require("../Models/User")
const jwt = require("jsonwebtoken")
exports.register = async (userData) =>{
//  if(userData.password !== userData.repassword){
//     throw new Error("Password missmatched")
//  }

 const user = await User.create(userData);

 const token = jwt.sign({
    _id: user._id,
    email: user.email
 })
 return {
    userId: user._id,
    email: user.email,
    token
 }

} 
