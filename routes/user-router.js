var express = require("express");
var router = express.Router();
const moment = require("moment");
const path = require("path");
const multer = require("multer");
const vwLoginController = require("../controllers/vw-login-controller");

/* GET all table_user data. */
router.get('/', vwLoginController.index);
router.get('/get/:id', vwLoginController.indexById);
router.put('/update/:id', vwLoginController.update);

module.exports = router;
