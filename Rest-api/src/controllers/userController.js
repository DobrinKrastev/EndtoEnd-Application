const router = require("express").Router();
const userServise = require("../services/userService")

router.post("/register", async (req, res) => {
    console.log(req.body)
    try {
        const userData = req.body;
        const result = await userServise.register(userData);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }


});

router.post("/login", async (req, res) => {
    try {
        const userData = req.body;
        const result = await userServise.login(userData);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;