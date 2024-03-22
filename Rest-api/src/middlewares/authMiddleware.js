const jwt = require("jsonwebtoken");


exports.authMiddleware = async (req,res,next)=>{
 const token = req.headers["x-authorization"];

 if(!token){
    return next();
 }
 try {
    const decodedToken =  jwt.verify(token,"SECRETKEY");
    req.user = decodedToken;

    next()

 } catch (error) {
    
    res.redirect("/");
 }


}
exports.isAuth = (req,res,next)=>{
    if(!req.user){
    return res.redirect("/login")
    }
  next()
};

exports.isGuest = (req,res,next)=>{
   if(req.user){
      return res.redirect("/");
   }
   next();
}