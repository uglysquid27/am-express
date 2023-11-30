var express = require("express");
var router = express.Router();
const moment = require("moment");
const path = require("path");
const multer = require("multer");
var temuanController = require("../controllers/input-temuan-controller")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/uploads/"));
    },
    filename: function (req, file, cb) {
      cb(null, moment().format("YYYYMMDDHHmmss") + "-" + file.originalname);
    },
  });
  const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', temuanController.index);
router.get('/get/:id', temuanController.findById);
router.get('/sect', temuanController.section);
router.delete("/delete/:id", temuanController.delete);
router.post('/store',  upload.single("item_desc_img"), temuanController.store);
router.put('/update/:id', upload.single("item_desc_img"), temuanController.update);

router.get('/qpgt', temuanController.qpgt);
router.get('/qpcd', temuanController.qpcd);
router.get('/qpct', temuanController.qpct);
router.get('/crhd', temuanController.crhd);
router.get('/csks', temuanController.csks);
router.get('/t024i', temuanController.t024i);
router.get('/t353i_t', temuanController.t353i_t);
router.get('/t357', temuanController.t357);

module.exports = router;
