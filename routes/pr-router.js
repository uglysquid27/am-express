var express = require("express");
var router = express.Router();
const moment = require("moment");
const path = require("path");
const multer = require("multer");
var prController = require("../controllers/pr-controller")

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, "../public/uploads/"));
//     },
//     filename: function (req, file, cb) {
//       cb(null, moment().format("YYYYMMDDHHmmss") + "-" + file.originalname);
//     },
//   });
//   const upload = multer({ storage: storage });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let destinationPath = path.join(__dirname, '../public/uploads/');

    if (file.mimetype.includes('image')) {
      // If the file is an image, use the default destination
      destinationPath = path.join(__dirname, '../public/uploads/');
    } else if (file.mimetype.includes('application')) {
      // If the file is a PDF, create a new folder in /public/ named 'pdf' (you can customize the folder name)
      destinationPath = path.join(__dirname, '../public/pdf/');
    } else {
      // Handle other file types as needed
      // ...
    }

    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    cb(null, moment().format('YYYYMMDDHHmmss') + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', prController.index); 
router.get('/get/:id', prController.findById);
router.get('/sect', prController.section);
router.get('/vendor', prController.vendor);
router.delete("/delete/:id", prController.delete);
router.post('/store',  upload.fields([
  { name: 'item_desc_img', maxCount: 1 },
  { name: 'attachment', maxCount: 1 },  
  { name: 'attachment2', maxCount: 1 },
]), prController.store);
router.put('/update/:id', upload.fields([
  { name: 'item_desc_img', maxCount: 1 },
  { name: 'attachment', maxCount: 1 },  
  { name: 'attachment2', maxCount: 1 },
]), prController.update);

module.exports = router;
