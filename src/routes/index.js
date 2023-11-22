const router = require("express").Router();

router.use("/v1/secret/file", require("./privateRoute"));
router.use("/", require("./publicRoute"));

module.exports = router;
