var express = require("express");
var router = express.Router();
const moment = require("moment");
const path = require("path");
const multer = require("multer");
var funcLocController = require("../controllers/func-loc-controller")

/* GET home page. */
router.get('/iflotx', funcLocController.index);
router.get('/iflotx/:id', funcLocController.findById);

module.exports = router;
