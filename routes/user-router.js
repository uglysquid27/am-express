var express = require("express");
var router = express.Router();
const moment = require("moment");
const path = require("path");
const multer = require("multer");
const vwLoginController = require("../controllers/vw-login-controller");

/* GET all table_user data. */
router.get('/', vwLoginController.index);

module.exports = router;
