const router = require("express").Router();

const tokenHandler = require("../handlers/tokenHandler");
const { privateData } = require("../controllers");

router.get("/", tokenHandler.verifyToken, privateData.allFiles);
router.get("/:file", tokenHandler.verifyToken, privateData.oneFile);

module.exports = router;
