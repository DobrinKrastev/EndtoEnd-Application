const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

 const userShema = new mongoose.Schema({
 username:{
    type: String,
    required: true,
    minLength:2,
 },
 email: {
    type: String,
    required: true,
    unique:true,
    maxLength: 10,
 },
 password: {
    type: String,
    required: true,
    minLength: 6,
 },
})

userShema.pre("save",async function(){
    this.password = await bcrypt.hash(this.password,12)
})

 const User = mongoose.model("User",userShema);
 module.exports = User ;
