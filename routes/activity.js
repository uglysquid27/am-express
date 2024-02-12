var express = require("express");
var router = express.Router();
const moment = require("moment");
const path = require("path");
const multer = require("multer");
var temuanController = require("../controllers/activity-end-controller")

/* GET home page. */
router.get('/', temuanController.index);
router.get('/get/:id', temuanController.findById);
router.post('/store', temuanController.store);


module.exports = router;
