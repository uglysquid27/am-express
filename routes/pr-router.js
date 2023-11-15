var express = require("express");
var router = express.Router();
const moment = require("moment");
const path = require("path");
const multer = require("multer");
var prController = require("../controllers/pr-controller")

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
router.get('/', prController.index);
router.get('/section', prController.section);
router.delete("/:id", prController.delete);
router.post('/store',  upload.single("item_desc_img"), prController.store);

module.exports = router;
