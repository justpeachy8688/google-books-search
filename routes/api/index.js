//use book routes

//require and export

const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./bookRoutes");

router.use("/books", bookRoutes);

//any route except one mentioned before goes to the build - automatically get pushed to heroku
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;