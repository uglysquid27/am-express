var express = require("express");
var router = express.Router();
const moment = require("moment");
const path = require("path");
const multer = require("multer");
var tesController = require("../controllers/tes-controller")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/images/"));
    },
    filename: function (req, file, cb) {
      cb(null, moment().format("YYYYMMDDHHmmss") + "-" + file.originalname);
    },
  });
  const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', tesController.index);
router.post('/store',  upload.single("name"), tesController.store);

module.exports = router;
