const router = require("express").Router();
const userController = require("./controllers/userController")

router.use("/register", userController);
router.use("/login", userController);
router.use("/logout", userController);


module.exports = router