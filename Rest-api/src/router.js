const router = require("express").Router();
const userController = require("./controllers/userController")
const bookController = require("./controllers/bookController")


router.use("/register", userController);
router.use("/login", userController);
router.use("/logout", userController);
router.use("/",bookController);
router.use("/dashboard",bookController);
router.use("/dashboard/details/:bookId",bookController);
router.use("/create",bookController);


module.exports = router