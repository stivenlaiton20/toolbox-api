const router = require("express").Router();

const { publicData } = require("../controllers");

router.get("/files/data", publicData.allFiles);
router.get("/file/data", publicData.oneFileData);

module.exports = router;
