const router = require("express").Router();
const userServise = require("../services/userService")

router.post("/register",async(req,res)=>{
    const userData = req.body;
    const result = await userServise.register(userData);
    
    res.json({result})

});

router.post("/login",async (req,res)=>{
    const userData = req.body;
    const result = await userServise.login(userData);
    
    res.json({result})
})


module.exports = router;